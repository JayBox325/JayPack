var webpack = require('webpack');

var config = {
    context: __dirname + '/_src', // `__dirname` is root of project and `src` is source
    entry: {
        app: './scripts/app.js',
    },
    output: {
        path: __dirname + '/dist', // `dist` is the destination
        publicPath: "/assets/",
        filename: 'bundle.js',
    },
};

module.exports = config;