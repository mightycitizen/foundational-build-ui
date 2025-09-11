import twig from './page.twig';

import header from '@organisms/header/header.twig';
import header_data from '@organisms/header/header.stories.js';

import footer from '@organisms/footer/footer.twig';
import footer_data from '@organisms/footer/footer.stories.js';

import hero from '@organisms/hero/hero.twig';
import hero_data from '@organisms/hero/hero.stories.js';

import breadcrumbs from '@molecules/breadcrumbs/breadcrumbs.twig';
import breadcrumb_data from '@molecules/breadcrumbs/breadcrumbs.stories.js';

import module from '@organisms/module/module.stories.js';

export default {
  title: 'Templates/Page',
  header: header( header_data ),
  footer: footer( footer_data ),
  breadcrumbs: breadcrumbs( breadcrumb_data ),
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const Page = Template.bind({});

const defaultArgs = {
  end_to_end: true,
  header: header( header_data ),
  footer: footer( footer_data ),
  hero_section: hero( hero_data ),
  breadcrumbs: breadcrumbs( breadcrumb_data ),
  content: [
    module.Template(module.CardGridModule.args),
  ],
  modules: [
    {
      module_type: 'cta',
      section_heading: 'Explore degrees & programs',
      section_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.',
      section_button: {
        url: '#',
        text: 'Button'
      },
      section_link: {
        url: '#',
        text: 'Link text'
      },
      section_image: {
        src: "/images/hero-secondary.jpg",
        alt: 'Alt Text',
        alignment: 'right'
      }
    },
    {
      module_type: 'cardgroup',
      intro_class: 'text-left',
      section_heading: 'News from Mighty University',
      section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      cards: [
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        },
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        },
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        }
      ]
    },
    {
      module_type: 'cardgroup',
      intro_class: 'text-left',
      section_label: {
        icon: {
          name: 'ph ph-[buildings]',
        },
        text: 'Example label goes here'
      },
      section_heading: 'Upcoming Events',
      section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      cards: [
        {
          no_outline: true,
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Home Game'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Tickets Available'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          type: 'Events',
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          type: 'Events',
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          type: 'Events',
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        }
      ]
    },
    {
      module_type: 'cta',
      section_class: 'bg-neutrals-50',
      intro_class: 'text-center',
      section_label: {
        icon: {
          name: 'ph ph-[buildings]',
        },
        text: 'Example label goes here'
      },
      section_heading: 'Take Your first steps at MightyU.',
      section_description:
        '[200 char, text + links allowed] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros.',
      section_button: {
        url: '#',
        text: 'Apply Now'
      },
      section_button_tertiary: {
        url: '#',
        text: 'Visit'
      }
    },
  ]
};
// export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Page.args = defaultArgs;

export { Page };

// export const PageSidebar = Page.bind({});
// PageSidebar.args = {
//   ...defaultArgs,
//   page_structure: 'page_sidebar',
// }

// export const PageFullHeightSidebar = Page.bind({});
// PageFullHeightSidebar.args = {
//   ...defaultArgs,
//   page_structure: 'page_sidebar_full',
// }

// export const PageFullHeightSidebarSecondary = Page.bind({});
// PageFullHeightSidebarSecondary.args = {
//   ...defaultArgs,
//   page_structure: 'page_sidebar_full_secondary',
// }
