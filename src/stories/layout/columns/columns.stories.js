import columnsTwig from './columns.twig';

export default {
  title: 'Layout/Containers/Columns',
};

const ColumnsTemplate = (args) => columnsTwig(args);

const defaultArgs = {
  col_1: 'Column 1',
  col_2: 'Column 2'
};

export const ColumnsNarrow = ColumnsTemplate.bind({});
ColumnsNarrow.args = {
  ...defaultArgs,
  columns: 'narrow',
}

export const ColumnsDefault = ColumnsTemplate.bind({});
ColumnsDefault.args = {
  ...defaultArgs,
  columns: 'default',
}

export const ColumnsWide = ColumnsTemplate.bind({});
ColumnsWide.args = {
  ...defaultArgs,
  columns: 'wide',
}

export const ColumnsHalf = ColumnsTemplate.bind({});
ColumnsHalf.args = {
  ...defaultArgs,
  columns: 'half',
}
