import environments from 'gulp-environments'
import projectConfig from '../project.config'

// Config rules
const config = {
    // Environment variables - can be 'development' or 'production'
    env: {
        production: environments.production,
        development: environments.development
    },

    type: projectConfig.type,

    // Root directory for assets produced in Gulp
    distRoot: projectConfig.craft ? 'build/public/assets' : 'build/assets',

    // Sass variables
    autoprefixerVersions: [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],

    // Browsersync
    browserSync: projectConfig.craft ? {
        open: 'external',
        host: projectConfig.domain,
        proxy: projectConfig.domain,
        port: 3000,
        notify: false
    } : {
        server: {
            baseDir: './build'
        }
    }
}

export default config