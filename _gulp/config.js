import environments from 'gulp-environments'

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
    autoprefixerVersions: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
}

export default config