import environments from 'gulp-environments'


// Config rules
const config = {

    // Environment variables - can be 'development' or 'production'
    env: {
        production: environments.production,
        development: environments.development
    },


    // Sass variables
    autoprefixerVersions: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
}

export default config