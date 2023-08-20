const path = require('path');
// to combine multiple configuration into a single configuration file
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config') // reference to common configration

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, './dist') // specify the path for the bundle output i.e. dist folder
        },
        devMiddleware: {
            writeToDisk: true
        }
    }
});