import { configure, addDecorator } from '@storybook/react';


const centered = require('@storybook/addon-centered').default


addDecorator(centered);

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/', true, /.stories.jsx?$/);
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
