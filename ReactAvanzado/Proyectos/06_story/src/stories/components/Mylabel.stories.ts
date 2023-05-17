import type { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";


const meta = {
    title: 'Ui/Leonard/Label',
    component: MyLabel,
    tags: ['autodocs'],
    
    argTypes: {
      label:  { label: 'Prueba' },
      size:   { size: 'normal' },
      color:  { control:'select', options:['primary', 'secondary', 'tertiary']},
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof MyLabel>;
  
  export default meta;

  type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
    args: {
        label: 'Prueba',
        color:'primary'
      },
};

  
  

