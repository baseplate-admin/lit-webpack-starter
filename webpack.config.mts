import path from 'path';
import { fileURLToPath } from 'url';
import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type Configuration = WebpackConfiguration & DevServerConfiguration;

const config: Configuration = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: [
            {
                directory: path.resolve(__dirname, 'dist'),
            },
            {
                directory: path.resolve(__dirname, 'public'),
                publicPath: '/',
            },
        ],
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            configFile: path.resolve(
                                __dirname,
                                './babel.config.ts'
                            ),
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [],
};

export default config;
