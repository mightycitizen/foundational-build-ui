import twig from '../page.twig';
import breadcrumbs_twig from '../../02-molecules/breadcrumbs/breadcrumbs.twig';
import sidebar from '../../03-organisms/sidebar/sidebar-news.twig';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';
import { placeholder, sizes } from '../../global/placeholders/images.json';
import {
  breadcrumbs as breadcrumb_data,
  wysiwyg,
} from '../../global/placeholders/components.json';

export default {
  title: 'Pages/Demo Pages',
};

const NewsFullTemplate = (args) => twig(args);
const page_sidebar = {
  topics: [
    {
      text: 'Alumni',
      url: '#'
    },
    {
      text: 'Topic name here',
      url: '#'
    },
    {
      text: 'Topic name here',
      url: '#'
    },
    {
      text: 'Topic name here',
      url: '#'
    },
  ],
  publication: {
    text: 'Orange Cape Newsletter',
    url: 'Orange Cape Newsletter'
  },
  authors: [
    {
      thumbnail: {
        src: '/images/author-thumb.jpg',
        alt: 'author'
      },
      name: 'Authorname Lastname',
      url: '#',
      org_name: 'Organization name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros... '
    },
    {
      thumbnail: {
        src: '/images/author-thumb.jpg',
        alt: 'author'
      },
      name: 'Authorname Lastname',
      url: '#',
      org_name: 'Organization name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros... '
    }
  ],
  media_name: 'Firstname Lastname',
  media_email: 'email@mightyu.edu',
  media_phone: '512-555-1234'
};
const newsDetailArgs = {
  page_structure: 'sidebar_full_flex',
  hero: {
    hero_inline: true,
    heading: 'Title of News Article',
    type: 'news',
    eyebrow: 'NEWS',
    summary: 'Summary of article goes here',
    below_hero: 'Rendered image goes here',
    byline: {
      authors: [
        'Firstname Lastname',
      ],
      publish_date: 'MM DD, YYYY',
    },
    links_bar_menu: null,
  },
  content: wysiwyg,
  sidebar: sidebar( page_sidebar ),
  breadcrumbs: breadcrumbs_twig({ breadcrumbs: breadcrumb_data }),
  menu,
  utility_menu,
  links_bar_menu,
  anchor_nav,
  local_nav,
  cta_menu,
  header_dropdown,
  logo,
  social,
  address,
  footer_links,
  site_name,
  menu_column,
};

export const NewsFull = NewsFullTemplate.bind({});
NewsFull.args = newsDetailArgs;

// Add more demo stories (e.g., events-full.twig) below as needed.