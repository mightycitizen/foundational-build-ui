import twig from './module.twig';
import {
  wysiwyg,
  video,
  accordion,
  tabs,
  testimonial,
  contact,
  card,
} from '../../global/placeholders/components.json';

export default {
  title: 'Organisms/Modules',
};

const Template = (args) => twig(args);

const section_intro = {
  intro_class: 'text-left',
  section_label: {
    icon: {
      name: 'ph ph-[buildings]',
    },
    text: 'Example label goes here'
  },
  section_heading: '[h2, optional] Modular Component Intro, Label type',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  section_link: {
    url: '#',
    text: 'Optional Link'
  },
  divider: true,
};

export const AccordionModule = Template.bind({});
AccordionModule.args = {
  ...section_intro,
  module_type: 'accordion',
  ...accordion
};

export const CardGridModule = Template.bind({});
CardGridModule.args = {
  ...section_intro,
  module_type: 'card-group',
  cards: [
    { ...card },
    { ...card },
    { ...card },
  ],
};

export const TestimonialModule = Template.bind({});
TestimonialModule.args = {
  ...section_intro,
  module_type: 'testimonial',
  ...testimonial
};

export const VideoModule = Template.bind({});
VideoModule.args = {
  ...section_intro,
  module_type: 'video',
  ...video,
  caption: 'Sample Video'
};

export const WysiwygModule = Template.bind({});
WysiwygModule.args = {
  ...section_intro,
  module_type: 'wysiwyg',
  wysiwyg
};
