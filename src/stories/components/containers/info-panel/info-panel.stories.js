import twig from './info-panel.twig';

export default {
  title: 'Components/Containers/Info Panel'
};

const Template = (args) => {
  return twig(args);
};

export const Default = Template.bind({});
Default.args = {
  panel_theme: 'light',
  label_display: 'inline',
  columns: [
    {
      heading: 'Contact',
      items: [
        { icon: 'ph ph-[at]', label: 'Email', content: 'example@mightyu.edu' },
        { icon: 'ph ph-[phone-call]', label: 'Phone', content: '123-456-7890' },
        { icon: 'ph ph-[phone-call]', label: 'Fax', content: '123-456-7890' },
      ]
    },
    {
      heading: 'Location',
      items: [
        { icon: 'ph ph-[map-pin-line]', label: '<a href="#">Address</a>', additional_info: '1234 Mighty Building<br>Austin, TX 78745' },
      ]
    },
    {
      heading: 'Information',
      items: [
        { icon: 'ph ph-[link]', content: '<a href="#">Faculty Website</a>' },
        { icon: 'ph ph-[link]', content: '<a href="#">Curriculum Vitae</a>' },
      ]
    }
  ]
};

export const Dark = Template.bind({});
Dark.args = {
  panel_heading: 'Program at a Glance',
  panel_theme: 'dark',
  label_display: 'above',
  columns: [
    {
      items: [
        { label: 'College/School', content: '<a href="#">College of Arts & Sciences</a>' },
        { label: 'Program Type', content: 'Undergraduate - Bachelor\'s' },
      ]
    },
    {
      items: [
        { label: 'Campus/Location', content: '<a href="#">Campus value goes here</a>' },
        { label: 'Accelerated', content: 'Yes' },
      ]
    },
    {
      items: [
        { label: 'Next start date', content: 'MM/DD/YYYY' },
        { label: 'Application deadline', content: 'MM/DD/YYYY' },
      ]
    }
  ]
};
