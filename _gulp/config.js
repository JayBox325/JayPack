import environments from 'gulp-environments'
import projectConfig from '../project.config'

// Config rules
const config = {
    env: {
        production: environments.production,
        development: environments.development
    },

    // Craft or static?
    type: projectConfig.type,

    // Build directory
    distRoot: projectConfig.distRoot,
    srcRoot: projectConfig.srcRoot,

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
            baseDir: projectConfig.distRoot
        }
    }
}

export default config