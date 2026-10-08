import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import twigAttributes from 'add-attributes-twig-extension';
import twigMap from './lib/map';
import './storybook.css';
import '../src/assets/js/app.js';

twigMap(Twig);
twigDrupal(Twig);
twigAttributes(Twig);

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Base',
        'Atoms',
        'Molecules',
        'Organisms',
        'Templates',
        'Demos',
        'Global',
        'Layout',
        'Components',
        'Pages',
        '*',
      ],
      includeName: true,
    },
  },
};

export const tags = ['autodocs'];
