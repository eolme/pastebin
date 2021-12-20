/* eslint-disable @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires */

const aliases = require('module-alias');
const path = require('path');

const fields = [
  // Non-standard esm
  'modern',
  'esm',
  'esnext',

  // Previous de-facto standard
  'jsnext:main',
  'jsnext',

  // These are generally shipped as a higher ES language level than `module`
  'es2015',
  'esm2015',
  'fesm2015',

  // Current leading de-facto standard
  'module',

  // Lower ES level
  'esm5',
  'fesm5',

  // Standard
  'main',
  'browser',

  // Fallback
  'umd:main',
  'umd',

  // Vendor specific
  'unpkg'
];

const npm = (name) => path.resolve('node_modules', name);

const alias = {
  'react': npm('preact/compat'),
  'react-dom': npm('preact/compat'),
  'react-ssr-prepass': npm('preact-ssr-prepass'),
  'react-render-to-string': npm('preact-render-to-string')
};

aliases.addAliases(alias);

/**
 * @param {string} phase
 * @param {{ defaultConfig: import('next').NextConfig }} params
 * @returns {import('next').NextConfig}
 */
const config = () => {
  return {
    env: {
      NEXT_PUBLIC_HOST: 'https://pastebin.petrov.engineer',
      NEXT_PUBLIC_REMOTE_HOST: 'https://aluhjtoyjpcudfdykqvx.supabase.co',
      NEXT_PUBLIC_REMOTE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDAwNjk3NiwiZXhwIjoxOTU1NTgyOTc2fQ._6V8huTMhHioYXgM4J-FYijHf9fnKQP_Y-KpSW1WlrQ'
    },
    webpack(webpack) {
      webpack.resolve = webpack.resolve || {};

      webpack.resolve.exportsFields = [];
      webpack.resolve.alias = Object.assign(webpack.resolve.alias || {}, alias);
      webpack.resolve.mainFields = fields;

      const cache =
        webpack.optimization &&
        webpack.optimization.splitChunks &&
        webpack.optimization.splitChunks.cacheGroups;

      if (cache && cache.framework) {
        cache.preact = Object.assign({}, cache.framework, {
          test: /[/\\]node_modules[/\\](preact|preact-render-to-string|preact-context-provider|react-ssr-prepass)[/\\]/
        });
      }

      return webpack;
    },
    webpack5: true,
    swcMinify: true,
    experimental: {
      fullySpecified: false,
      styledComponents: false,
      urlImports: false,
      serverComponents: false,
      reactRoot: false,
      concurrentFeatures: false,
      esmExternals: true
    }
  };
};

module.exports = config;
