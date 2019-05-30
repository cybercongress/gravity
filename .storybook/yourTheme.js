import { create } from '@storybook/theming';
import logo from '../src/img/logoStoory.svg'

export default create({
  base: 'dark',
  //light

//  colorPrimary: 'hotpink',
  colorSecondary: '#36d6aee3',

  // UI
    appBg: '#000',
    //  appContentBg: '#000',
     appBorderColor: 'rgba(54, 214, 174, 0.5)',
//   appBorderRadius: 4,

//   // Typography
   fontBase: '"Play", sans-serif',
//   fontCode: 'monospace',

//   // Text colors
   textColor: '#fff',
   textInverseColor: '#36d6ae',

  // Toolbar default and active colors
  // barTextColor: '#fff',
   barSelectedColor: '#36d6ae',
//   barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  //  inputBorder: 'silver',
  //  inputTextColor: 'black',
//   inputBorderRadius: 4,

  brandTitle: 'Gravity',
//   brandUrl: 'https://example.com',
  brandImage: logo,
});