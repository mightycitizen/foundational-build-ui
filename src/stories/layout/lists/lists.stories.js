import listsTwig from './lists.twig';

export default {
  title: 'Layout/Containers/Lists',
};

const ListsTemplate = (args) => listsTwig(args);

const defaultArgs = {
  items: [
    '<div>Item</div>',
    '<div>Item</div>',
    '<div>Item</div>',
    '<div>Item</div>',
    '<div>Item</div>',
    '<div>Item</div>',
  ],
};

export const ListVertical = ListsTemplate.bind({});
ListVertical.args = {
  ...defaultArgs,
  columns: 1
}

export const List2Col = ListsTemplate.bind({});
List2Col.args = {
  ...defaultArgs,
  columns: 2
}

export const List3Col = ListsTemplate.bind({});
List3Col.args = {
  ...defaultArgs,
}
