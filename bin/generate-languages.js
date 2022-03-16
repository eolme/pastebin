const fs = require('fs/promises');
const path = require('path');
const glob = require('fast-glob');

/**
 * @param {string} str
 */
const beautify = (str) => str.replaceAll('"', '\'');

/**
 * @param {string} str
 */
const imports = (str) => str.replace(/('.*?')(,|\s)/g, '() => import($1)$2');

/**
 * @param {string} str
 */
const wrap = (str) => str.replace(/:\s(\[[\s\S]*?\])/gm, ': memo(() => queue($1))');

/**
 * @param {string} str
 * @param {RegExp} regex
 */
const regexAll = (str, regex) => {
  return Array.from(str.matchAll(regex)).map((arr) => (arr && arr[1]) || null);
}

/**
 * @param {string} str
 */
const peer = (str) => {
  return regexAll(str, /\w+\.languages\.extend\(['"`](\w+)['"`]/g);
};

/**
 * @param {string} str
 */
const clone = (str) => {
  return regexAll(str, /\w+\.util\.clone\(\w+\.languages\.(\w+)/g);
};

/**
 * @param {string} str
 */
const inherit = (str) => {
  return regexAll(str, /\w+\.languages\.(?!extend|(?:\w+\s*=))(\w+)/g);
};

/**
 * @param {any[]} arr
 */
const unique = (arr) => {
  return Array.from(new Set(arr.filter((item) => !!item)));
};

(async () => {
  const dest = path.resolve(process.cwd(), 'src', 'common', 'languages.ts');

  const base = path.resolve(process.cwd(), 'node_modules') + '/';
  const components = path.resolve(base, 'prismjs', 'components');

  const matchName = /prism\-([\w-]+)\./;

  let modules = await glob(components + '/prism-*.min.js');

  const deps = {};
  const raw = {};
  const deep = {};

  const languages = {};

  const options = [{
    name: 'plain',
    value: 'plain'
  }];

  for (const lang of modules) {
    if (lang.includes('code')) {
      continue;
    }

    const content = await fs.readFile(lang, { encoding: 'utf8' });

    const exec = matchName.exec(lang);
    const name = exec[1];

    deps[name] = [
      ...inherit(content),
      ...clone(content),
      ...peer(content)
    ];

    raw[name] = lang.replace(base, '');

    options.push({ name, value: name });
  }

  const lookup = (name) => {
    const inner = [];
    if (name) {
      if (deps[name]) {
        for (const deeper of deps[name]) {
          if (deeper && deeper !== name) {
            inner.push(...lookup(deeper));
          }
        }
      }
      inner.push(name);
    }
    return inner;
  };

  for (const dep in deps) {
    deep[dep] = [];

    for (const inn of deps[dep]) {
      deep[dep].push(...lookup(inn));
    }
  }

  for (const dep in deep) {
    languages[dep] = [];

    for (const deeper of deep[dep]) {
      languages[dep].push(raw[deeper]);
    }

    languages[dep].push(raw[dep]);
  }

  for (const lang in languages) {
    languages[lang] = unique(languages[lang]);
  }

  const stringifyTypes = Object.keys(languages).map((lang) => '\'' + lang + '\'').join(' |\r\n  ');

  const stringifyLanguages = JSON.stringify(languages, null, 2);
  const stringifyOptions = JSON.stringify(options, null, 2);

  const validLanguages = wrap(imports(beautify(stringifyLanguages)));
  const validOptions = beautify(stringifyOptions);
  const validTypes = stringifyTypes + ' |\r\n  \'plain\'';

  const memoize = 'import { default as memo } from \'memoize-one\';\r\n\r\n';
  const queue = 'const queue = (arr: Array<() => Promise<any>>) => {\r\n  let promise = Promise.resolve();\r\n  arr.forEach((chain) => promise = promise.then(chain));\r\n  return promise;\r\n};\r\n\r\n';
  const code = 'export const languages: Readonly<Record<string, () => Promise<any>>> = ' + validLanguages + ';\r\n\r\n';
  const picker = 'export const options = ' + validOptions + ';\r\n\r\n';
  const types = 'export type Languages =\r\n  ' + validTypes + ';\r\n';

  await fs.writeFile(dest, memoize + queue + code + picker + types, { encoding: 'utf8' });
})();
