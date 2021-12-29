import React from 'react';
import Collapser  from '../lib/components/Collapser';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponents/Collapser',
  component: Collapser,
};
const Template = (args) => <Collapser {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat sit amet nunc ut sollicitudin. Pellentesque odio ante, scelerisque eget erat ac, cursus dignissim metus. Sed sed vehicula felis. Aliquam laoreet magna quis varius rutrum. Donec erat nulla, ornare in lobortis ac, condimentum at ipsum. Donec hendrerit quis lacus at convallis. In sit amet diam facilisis, lacinia nisl sed, auctor lectus. Aliquam erat volutpat. Sed lorem leo, fermentum in mi in, venenatis vehicula eros. Duis pretium ac eros nec tempus. In sodales sed libero vel tempor. Sed sit amet tincidunt eros. Nulla facilisi.</p>,
  className: 'collapser',
  active: true
};
