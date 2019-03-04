import paths from './path.config'
import environments from 'gulp-environments'
import path from 'path'

var development = environments.development
var production = environments.production

const env = production() ? 'production' : 'development'

// Webpack packages
import TerserPlugin from 'terser-webpack-plugin'

const config = {
    mode: env,
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
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
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
    optimization: {
        minimizer: [new TerserPlugin()],
    },
}

module.exports = config