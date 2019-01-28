import paths from './path.config'
import path from 'path'

const config = {
    mode: 'production',
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
