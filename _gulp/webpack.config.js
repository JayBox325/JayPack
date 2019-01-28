import paths from './path.config'
import environments from 'gulp-environments'
import path from 'path'

var development = environments.development
var production = environments.production

const env = production() ? 'production' : 'development'

// Webpack packages
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const config = {
    mode: env,
    entry: {
        app: paths.js.app,
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
    },
    externals: {
        jquery: 'jQuery'
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
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}

module.exports = config

// module.exports = {
//     entry: {
//         app: paths.js.app,
//     },
//     output: {
//         path: path.resolve(__dirname, 'app'),
//         filename: 'bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js)$/,
//                 exclude: /(node_modules)/,
//                 use: [
//                     {
//                         loader: 'babel-loader',
//                         options: {
//                             presets: ['@babel/preset-env']
//                         }
//                     }
//                 ]
//             },
//         ],
//     },
//     devtool: 'source-map'
// };
