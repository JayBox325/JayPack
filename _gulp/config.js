import environments from 'gulp-environments'

import projectConfig from '../project.config'

// Config rules
const config = {
    // Project variable - either 'craft' or 'static'. Set in the root project config file.
    project: projectConfig.project,


    // Environment variables - can be 'development' or 'production'
    env: {
        production: environments.production,
        development: environments.development
    },


    // Sass variables
    autoprefixerVersions: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],


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
        }
    }
}

export default config