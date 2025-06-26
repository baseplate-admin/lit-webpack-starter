import litCssMinifyPlugin from './babel-plugins/babel-plugin-lit-css-minify.mjs';

export default {
    presets: ['@babel/preset-env'],
    plugins: [litCssMinifyPlugin],
};
