import twig from '../page.twig';
import breadcrumbs_twig from '../../components/navigation/breadcrumbs/breadcrumbs.twig';
import sidebar from '../../components/sidebar/sidebar-events.twig';
import sidebar_bottom from '../../components/sidebar/sidebar-events-bottom.twig';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';
import { placeholder, sizes } from '../../global/placeholders/images.json';
import {
  breadcrumbs as breadcrumb_data,
  wysiwyg,
} from '../../global/placeholders/components.json';

export default {
  title: 'Pages/Demo Pages',
};

const EventsFullTemplate = (args) => twig(args);
const sidebar_data = {
  page_title: 'Title of Event',
  register_button: {
    text: 'Register now',
    url: '#'
  },
  event_website: {
    text: 'Event Website',
    url: '#'
  },
  event_date: 'March 4, 2025',
  event_time: '4:30am - 5:30pm CT',
  event_location: 'Address line 1 goes here</br>Address line 2 goes here</br>Address line 3 goes here',
  event_directions_url: {
    text: 'Get Directions',
    url: '#',
  },
  event_virtual_meeting_url: {
    text: 'Virtual Meeting Link',
    url: '#',
  },
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
  who_its_for: [
    {
      text: 'Current Students',
      url: '#'
    },
    {
      text: 'Alumni',
      url: '#'
    }
  ],
  event_series: {
    text: 'Portuguese Literature Speaker Series',
    url: '#'
  },
  media_name: 'Firstname Lastname',
  media_email: 'email@mightyu.edu',
  media_phone: '512-555-1234',
}
const eventsDetailArgs = {
  page_structure: 'sidebar_full_flex',
  hero: {
    hero_inline: true,
    heading: 'Title of Event',
    type: 'event',
    eyebrow: 'EVENT',
    summary: 'Summary of event goes here',
    below_hero: 'Rendered image goes here',
    links_bar_menu: null,
  },
  content: wysiwyg,
  sidebar: sidebar( sidebar_data ),
  sidebar_bottom: sidebar_bottom( sidebar_data ),
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

export const EventsFull = EventsFullTemplate.bind({});
EventsFull.args = eventsDetailArgs;
