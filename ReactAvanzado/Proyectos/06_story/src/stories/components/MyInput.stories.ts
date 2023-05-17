import type { Meta, StoryObj } from '@storybook/react';
import { MyInput } from "../../components/MyInput";


const meta = {
    title: 'Ui/Leonard/Input',
    component: MyInput,
    tags: ['autodocs'],
    
    argTypes: {
      label:  { label: 'Ejemplo Leonard' },
      size:   { size: 'normal' },
      color:  { control:'select', options:['primary', 'secondary', 'tertiary']},
      backgroundColor: { control: 'color' },
      borderradius: { control:'select', options:['none', 'sx', 'md', 'lg', 'all']},
      border: { control:'select', options:['success', 'warning', 'info']},
      placeholder:   { placeholder: 'Ejemplo Leonard' },
      sizeinput:{ control:'select', options:['sx', 'md', 'lg']},
      type:{ control:'select', options:['text', 'email', 'password', 'date']},
      colorinput: { control: 'color' },
      
    },
  } satisfies Meta<typeof MyInput>;
  
  export default meta;

  type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
    args: {
      label:'Ejemplo Leonard',
      size: 'normal',
      color:'primary',
      borderradius: 'none',
      border: 'success',
      placeholder: 'Ejemplo Leonard',
      sizeinput:'sx',
      type:'text',
      colorinput:'black',
      }
};

  
  

