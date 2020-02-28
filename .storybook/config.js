import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
// import { create } from '@storybook/theming';

// // coral / ocean highlights
// const theme = create({ base: 'light', colorPrimary: '#FF4785', colorSecondary: '#1EA7FD' });
// addParameters({ options: { theme } });
import yourTheme from './yourTheme';

addParameters({
  options: {
    theme: yourTheme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/', true, /.stories.jsx?$/);
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
