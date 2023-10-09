import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  brandTitle: 'Contrust Storybook',
  // brandUrl: 'https://example.com',
  brandImage: 'https://contrust.app/assets/logo.5003a104.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#52238D',
  colorSecondary: '#6938A9',
  

  // UI
  appBg: '#f9f9fa',
  appContentBg: '#ffffff',
  appBorderColor: '#E4E4EB',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#090517',

  // Toolbar default and active colors
  barTextColor: '#090517',
  barSelectedColor: '#6938A9',
  barHoverColor: '#52238D',
  barBg: '#f9f9fa',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#52238D',
  inputTextColor: '#7F818F',
  inputBorderRadius: 2,
});