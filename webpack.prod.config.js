// for extracting out css in separate Css file during build process
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// for generating html template with style & JS links during build
const HTMLWebpackPlugin = require('html-webpack-plugin');
// for cleaning up dist folder every time web runs the build 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'production',
    // module: {
    //     rules: [
    //         {
    //             test: /\.(css)$/,
    //             /**
    //              * css-loader -> Transpile CSS code from JS to CSS 
    //              * MiniCssExtractPlugin.loader --> Get the css code and create a new file out of it
    //              */
    //             use: [MiniCssExtractPlugin.loader, 'css-loader']
    //             /**
    //              * for putting the css inline in DOM 
    //              * this should be used for critical css.
    //              */
    //             // use: ['style-loader', 'css-loader']
    //         },
    //         {
    //             /**
    //              * for handling scss file in the code, you need sass-loader in front
    //              * then remaining loader chain will work fine
    //              */
    //             test: /\.scss/,
    //             use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    //         },

    //     ]
    // },
    plugins: [
        /**
         * setting for allowing mystyles.css file to be created.
         */
        // new MiniCssExtractPlugin({
        //     filename: 'mystyles.css'
        // }),
        new HTMLWebpackPlugin({
            /**
             * New template needs to be created from index.html file
             * !we can delete the links for styles / js from the original one 
             */
            template: './index.html'
        }),
        // cleaning webpack plugin to clear the dist folder during each build
        new CleanWebpackPlugin()
    ]
});