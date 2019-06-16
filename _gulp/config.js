import environments from 'gulp-environments'
import projectConfig from '../project.config'

if (projectConfig.project == 'static') {
    var distAssets = './build/assets'
} else {
    var distAssets = './build/public/assets'
}

// Config rules
const config = {
    // Project variable - either 'craft' or 'static'. Set in the root project config file.
    project: projectConfig.project,


    // Environment variables - can be 'development' or 'production'
    env: {
        production: environments.production,
        development: environments.development
    },


    // Root directory for assets produced in Gulp
    distRoot: distAssets,


    // Sass variables
    autoprefixerVersions: [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],


    // Browsersync
    browserSync: {
        static: {
            server: {
                baseDir: "build"
            },
            port: projectConfig.port
        },
        craft: {
            proxy: projectConfig.siteUrl
        },
        notify: false
    }
}

export default config