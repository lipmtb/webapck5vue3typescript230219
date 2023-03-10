'use strict';
const path = require('path');

module.exports = {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        host: 'localhost',
        port: 8089,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        // devtool: "cheap-module-eval-source-map",
        devtool: "source-map",
        cacheBusting: true,
        cssSourceMap: true
    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        devtool: "cheap-moudle-source-map",
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
