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
 */
const peer = (str) => {
  const exec = /\w+\.languages\.extend\(['"`](\w+)['"`]/.exec(str);
  if (exec && exec[1]) {
    return exec[1];
  }
  return null;
};

/**
 * @param {string} str
 */
const clone = (str) => {
  const exec = /\w+\.util\.clone\(\w+\.languages\.(\w+)/.exec(str);
  if (exec && exec[1]) {
    return exec[1];
  }
  return null;
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
      clone(content),
      peer(content)
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

  const stringifyLanguages = JSON.stringify(languages, null, 2);
  const stringifyOptions = JSON.stringify(options, null, 2);

  const valid = wrap(imports(beautify(stringifyLanguages)));

  const memoize = 'import { default as memo } from \'memoize-one\';\r\n\r\n';
  const queue = 'const queue = (arr: Array<() => Promise<any>>) => {\r\n  let promise = Promise.resolve();\r\n  arr.forEach((chain) => promise = promise.then(chain));\r\n  return promise;\r\n};\r\n\r\n';
  const code = 'export const languages: Readonly<Record<string, () => Promise<any>>> = ' + valid + ';\r\n\r\n';
  const picker = 'export const options = ' + stringifyOptions + '\r\n';

  await fs.writeFile(dest, memoize + queue + code + picker, { encoding: 'utf8' });
})();
