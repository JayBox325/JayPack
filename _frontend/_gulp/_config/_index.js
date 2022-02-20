import environments from 'gulp-environments'
import projectConfig from '../../project.config'
import distRoot from './dist.js'

const config = {
    framework: projectConfig.framework,
    
    env: {
        production: environments.production,
        development: environments.development
    },

    // Build directory
    distRoot: distRoot,
    srcRoot: './_src/',

    // Sass variables
    autoprefixerVersions: [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],

    // Browsersync
    browserSync: projectConfig.framework == 'craft' ? {
        open: 'external',
        host: projectConfig.domain,
        proxy: projectConfig.domain,
        port: 3000,
        notify: false
    } : {
        server: {
            baseDir: distRoot
        }
    }
}

export default config