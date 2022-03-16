import { resolve } from 'path';

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

const npm = (name) => resolve('node_modules', name);

const alias = {
  'react': npm('preact/compat'),
  'react-dom': npm('preact/compat'),
  'react-ssr-prepass': npm('preact-ssr-prepass'),
  'react-render-to-string': npm('preact-render-to-string')
};

// Common env
const _env = ['NODE_ENV', 'BABEL_ENV', 'NEXTAUTH_URL', 'VERCEL', 'VERCEL_URL'];
const isENV = (key) => key.startsWith('NEXT_PUBLIC_') || _env.includes(key);

/**
 * @param {string} phase
 * @param {{ defaultConfig: import('next').NextConfig }} params
 * @returns {import('next').NextConfig}
 */
const config = () => {
  return {
    webpack(webpack, options) {
      webpack.resolve = webpack.resolve || {};

      // Add preact aliases
      webpack.resolve.alias = Object.assign(webpack.resolve.alias || {}, alias);

      // Disable exports
      webpack.resolve.exportsFields = [];

      // Use future mainFields
      webpack.resolve.mainFields = fields;

      const cache =
        webpack.optimization &&
        webpack.optimization.splitChunks &&
        webpack.optimization.splitChunks.cacheGroups;

      // Add preact chunk
      if (cache && cache.framework) {
        cache.preact = Object.assign({}, cache.framework, {
          test: /[/\\]node_modules[/\\](preact|preact-render-to-string|react-ssr-prepass|preact-context-provider)[/\\]/
        });
      }

      if (!options.isServer) {
        // Use future target
        webpack.target = ['web', 'es2021'];

        const DefinePlugin = webpack.plugins.find((plugin) => {
          return plugin.constructor.name === 'DefinePlugin';
        });

        // Fix missing env
        DefinePlugin.definitions['process.env.BABEL_ENV'] = JSON.stringify(process.env.NODE_ENV);
        for (const key of _env) {
          DefinePlugin.definitions[`process.env.${key}`] = JSON.stringify(process.env[key]);
        }

        // Define only safe env
        const env = {};

        for (const key in process.env) {
          if (isENV(key)) {
            env[key] = process.env[key];
          }
        }

        // Rewrite env
        DefinePlugin.definitions['process.env'] = JSON.stringify(env);
      }

      return webpack;
    },
    webpack5: true,
    swcMinify: true,
    experimental: {
      fullySpecified: false,
      esmExternals: true
    }
  };
};

export { config };
