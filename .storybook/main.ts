// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-webpack5)
import type { StorybookConfig } from '@storybook/vue3-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  // core: {
  //   builder: '@storybook/builder-vite',
  // },

  docs: {
    autodocs: true,
    // see below for alternatives
    defaultName: 'Docs' // set to change the name of generated docs entries
  },

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  viteFinal: async (config, { configType }) => {
    if(configType === "PRODUCTION") {
      return {...config, base: './'};
    }
    // config.base = ''; //  './' also works, but i like "assets/.." urls better than "./assets/..." urls.
    return config;
  }
};

export default config;