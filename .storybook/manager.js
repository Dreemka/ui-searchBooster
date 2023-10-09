import { addons } from '@storybook/addons';
// import { addons } from '@storybook/manager-api';
import SearchBoosterTheme from './SearchBoosterTheme';

addons.setConfig({
  showToolbar: false,
  theme: SearchBoosterTheme,
});