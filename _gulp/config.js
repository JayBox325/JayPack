import environments from 'gulp-environments'
import paths from './path.config'

// Config rules
const config = {
    // Project variable - either 'craft' or 'static'.
    project: 'static',

    // Environment variables - can be 'development' or 'production'
    env: {
        production: environments.production,
        development: environments.development
    },

    // Versioning
    version: {
        value: '%MDS%',
        append: {
            key: 'v',
            to: ['css', 'js']
        }
    },


    // Sass variables
    autoprefixerVersions: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],


    // Browsersync
    browserSync: {
        static: {
            server: {
                baseDir: "build"
            },
            port: 8080
        },
        craft: {
            proxy: 'local.whatever.mamp'
        }
    }
}

export default config