// import {app} from '@storybook/vue3';

// app.use(ContrustNotifications);

// All stories expect a theme arg
// export const argTypes = { theme: { control: 'select', options: ['light', 'dark'] } };

// The default value of the theme arg to all stories
// export const args = { theme: 'light' };

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   // options: {
//   //   storySort: {
//   //     method: '',
//   //     order: [],
//   //     locales: '',
//   //   },
//   // },
//   layout: 'centered',
// }
// import { setup } from "@storybook/vue3";
// import { ContrustNotifications, ContrustDynamicModal } from "@/plugins";
// setup((app) => {
//   app.use(ContrustNotifications);
//   app.use(ContrustDynamicModal);
// });
import { Preview } from "@storybook/vue";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
