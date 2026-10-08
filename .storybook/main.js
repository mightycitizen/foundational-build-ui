import path from 'path';
import { fileURLToPath } from 'url';
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  staticDirs: ['../public'],

  stories: [
    "../src/stories/**/**/*.stories.js"
  ],

  addons: ["@storybook/addon-a11y", '@storybook/addon-docs'],

  framework: {
    name: '@storybook/html-vite',
    options: {}
  },

  async viteFinal(config) {
    // Add JS import alias for stories
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@base': join(__dirname, '../', 'src/stories/00-base'),
      '@atoms': join(__dirname, '../', 'src/stories/01-atoms'),
      '@molecules': join(__dirname, '../', 'src/stories/02-molecules'),
      '@organisms': join(__dirname, '../', 'src/stories/03-organisms'),
      '@templates': join(__dirname, '../', 'src/stories/04-templates'),
    };

    config.plugins.push(
      ViteImageOptimizer({
        logStats: true,
        includePublic: true,
        mozjpeg: { quality: 75 },
        pngquant: { quality: [0.6, 0.8] },
        svgo: true,
        webp: { quality: 75 },
        /* pass your config */
      })
    );
    config.plugins.push(
      twig({
        // You can configure options here
        namespaces: {
          components: join(__dirname, '../', 'src/stories/components'),
          global: join(__dirname, '../', 'src/stories/global'),
          layout: join(__dirname, '../', 'src/stories/layout'),
          pages: join(__dirname, '../', 'src/stories/pages'),
          wrappers: join(__dirname, '../', 'src/stories/wrappers'),

          base: join(__dirname, '../', 'src/stories/00-base'),
          atoms: join(__dirname, '../', 'src/stories/01-atoms'),
          molecules: join(__dirname, '../', 'src/stories/02-molecules'),
          organisms: join(__dirname, '../', 'src/stories/03-organisms'),
          templates: join(__dirname, '../', 'src/stories/04-templates'),
        },
      })
    );

    return config;
  },

  docs: {}
};
