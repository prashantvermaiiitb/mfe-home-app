const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
    //from which file webpack should start the bundling process.
    entry: './index.js',
    output: {
        filename: 'home.component.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg)/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            india: path.resolve(__dirname, 'src/india')
        },
        extensions: ['.jsx', '.js']
    },
    plugins: [
        new HTMLWebpackPlugin({
            /**
             * New template needs to be created from index.html file
             * !we can delete the links for styles / js from the original one 
             */
            template: './index.html'
        }),
        // cleaning webpack plugin to clear the dist folder during each build
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            // specify the name for the app which will be used to import in the container app
            name: 'homeApp',
            /**
             * name of the file that will be loaded in container app 
             * -> either in index.html using <script/> tag 
             * -> or in the webpack config > remotes configuration
             */
            filename:'remoteEntry.js',
            // remotes property where in we will be mentioning key-value pair
            exposes: {
                './home':'./src/index.jsx' 
            },
            shared :{
                'react': {
                    singleton: true,
                    requiredVersion: "^18.2.0"
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: "^18.2.0"
                },
                'styled-components': {
                    singleton: true,
                    requiredVersion: "^6.0.7"
                }
            }
        })
    ]
}