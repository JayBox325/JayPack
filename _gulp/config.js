import environments from 'gulp-environments'

// Config rules
const config = {
    // Environment variables - can be 'development' or 'production'
    env: {
        production: environments.production,
        development: environments.development
    },

    // Root directory for assets produced in Gulp
    distRoot: './build/public/assets',

    // Sass variables
    autoprefixerVersions: [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],

    // Browsersync
    browserSync: {
        open: 'external',
        host: 'local.xx.build',
        proxy: "local.xx.build",
        port: 3000,
        notify: false
    }
}

export default config