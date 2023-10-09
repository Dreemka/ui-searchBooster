import type { Meta, StoryObj } from '@storybook/vue3';

import SearchBoosterButton from "./SearchBoosterButton.vue";
// import selectionIcon from "@/styles/contrust-icon/selection.json";



// const iconsList = () => {
//   const result = selectionIcon.icons.map(
//     (one: any) => "contrust-icon-" + one.icon.tags[0]
//   );
//   result.unshift("");
//   return result;
// };

// function ListTypes(component) {
//   let typesBtn = '';

//   if (component.props) {
//       typesBtn = component.props.variant.validator.toString().match(/"(.*?)"/g).map(option => option.replace(/"/g, ''));
//   } else {
//     console.log(component)
//       typesBtn = component.map(option => option.replace(/"/g, ''));
//   }
//   typesBtn = JSON.stringify(typesBtn)
//   typesBtn = typesBtn.replace(/[,]/g, ' ').replace(/["]/g, '`').replace(/[\[\]]/g, ' ')
//   return typesBtn
// }


const meta: Meta<typeof SearchBoosterButton> = {
  title: 'Actual/Button',
  component: SearchBoosterButton,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description: "Отключает возможность нажатия кнопки",
      table: {
        defaultValue: { summary: false },
      },
      options: [false, true],
      control: {
        type: "radio",
      },
    },
    rounded: {
      description: "Сделать закругленные края кнопки",
      table: {
        defaultValue: { summary: false },
      },
      options: [false, true],
      control: {
        type: "radio",
      },
    },
    variant: {
      description: "Внешний вид кнопки",
      table: {
        defaultValue: { summary: "contained" },
      },
      options: ["contained", "outlined", "ghost"],
      control: {
        type: "select",
      },
    },
    size: {
      // description: "Размер кнопки",
      description: '`x-small` `small` `medium` `large` `x-large`',
      table: {
        defaultValue: { summary: "medium" },
      },
      options: ["x-small", "small", "medium", "large", "x-large"],
      control: {
        type: "select",
      },
    },
    color: {
      description: `Опция для передачи цвета`,
      table: {
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "blue", "green", "yellow", "red", "grey"],
      control: {
        type: "select",
      },
    },
    // prependIcon: {
    //   // description: `Иконка слева \n \n ${ListTypes(iconsList())}`,
    //   description: `Иконка слева`,
    //   table: {
    //     defaultValue: { summary: "" },
    //   },
    //   options: iconsList(),
    //   control: {
    //     type: "select",
    //   },
    // },
    // appendIcon: {
    //   description: "Иконка слева",
    //   table: {
    //     defaultValue: { summary: "" },
    //   },
    //   options: iconsList(),
    //   control: {
    //     type: "select",
    //   },
    // },
    // icon: {
    //   description: "Кнопка иконка",
    //   table: {
    //     defaultValue: { summary: "" },
    //   },
    //   options: iconsList(),
    //   control: {
    //     type: "select",
    //   },
    // },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBoosterButton>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    title: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    ...Contained.args,
    variant: 'outlined',
  },
};