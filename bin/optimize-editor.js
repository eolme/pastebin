const fs = require('fs/promises');
const path = require('path');

const stripInlineCSS = (code) => {
  return code.replace(`React.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: cssText } })`, '');
};

const fixSpell = (code) => {
  return code.replace(`spellCheck: false`, `spellCheck: 'false'`)
};

(async () => {
  const editor = path.resolve(process.cwd(), 'node_modules', 'react-simple-code-editor', 'lib', 'index.js');

  const content = await fs.readFile(editor, { encoding: 'utf8' });

  return await fs.writeFile(editor, fixSpell(stripInlineCSS(content)), { encoding: 'utf8' });
})();
