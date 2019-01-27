import gulp from 'gulp'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'
const webpackConfig = config.webpack

// Server packages
import Browser from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

// Server setup
const browser = Browser.create()
const bundler = webpack(webpackConfig)

export function server() {
    let config = {
        server: 'site',
        middleware: [
            webpackDevMiddleware(bundler, {
                /* options */
            })
        ]
    }
    browser.init(config)
    //gulp.watch('site/*.js').on('change', () => browser.reload())
}