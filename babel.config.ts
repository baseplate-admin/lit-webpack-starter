import type { TransformOptions } from '@babel/core';
import litCssMinifyPlugin from './babel-plugins/babel-plugin-lit-css-minify.mts';

const config: TransformOptions = {
    presets: ['@babel/preset-env'],
    plugins: [litCssMinifyPlugin],
};

export default config;
