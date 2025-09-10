import twig from '@templates/page/page.twig';
import pageData from '@templates/page/page.stories.js';

import hero from '@organisms/hero/hero.twig';

import module from '@organisms/module/module.twig';
import module_data from '@organisms/module/module.stories.js';


import {
  hero_secondary,
} from '../../global/placeholders/components.json';

export default {
  title: 'Demos/Pages/Alerts/Alerts Listing',
};

const AlertsListingTemplate = (args) => twig(args);

const alertsListingArgs = {
  ...pageData,
  end_to_end: true,
  hero_section: hero({
    ...hero_secondary,
    breadcrumbs: pageData.breadcrumbs,
    heading: "University Alerts",
    summary: "[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum. ",
    hero_button: {
      text: "Primary Button",
      url: "#"
    },
    readmore_link: {
      text: "Optional Link",
      url: "#"
    }
  }),
  content: [
    module(module_data.AlertsModule.args),
    module({
      ...module_data.InactiveAlertsModule.args,
      section_class: 'bg-neutrals-50'
    }),
  ].join(''),
};

export const AlertsListing = AlertsListingTemplate.bind({});
AlertsListing.args = alertsListingArgs;
