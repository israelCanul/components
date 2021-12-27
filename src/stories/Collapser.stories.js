import React from 'react';

import Collapser  from '../lib/components/Collapser';


export default {
    title: 'Example/Collapser',
    component: Collapser,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <Collapser active={false} >Ejemplo</Collapser>;
  export const Primary = Template.bind({});