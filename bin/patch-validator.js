const fs = require('fs/promises');
const path = require('path');

(async () => {
  const json = path.resolve(process.cwd(), 'node_modules', 'validator', 'package.json');

  const content = await fs.readFile(json, { encoding: 'utf8' });

  const pkg = JSON.parse(content);
  pkg.type = 'module';
  pkg.module = './es/index.js';

  const stringify = JSON.stringify(pkg);

  return await fs.writeFile(json, stringify, { encoding: 'utf8' });
})();
