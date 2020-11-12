import paths from './path.config'
import environments from 'gulp-environments'
import path from 'path'

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

var production = environments.production

const env = production() ? 'production' : 'development'
const isProd = env === 'production'

const config = {
    mode: env,
    devtool: isProd ? false : 'source-map',
    entry: {
        app: paths.js.app,
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin() // Enable this for a JS audit
    ]
}

module.exports = config