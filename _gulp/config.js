import environments from 'gulp-environments'
import projectConfig from '../project.config'

let projectVariables

// Project framework variables
if (projectConfig.framework == 'nunjucks') {
    projectVariables = {
        // Has local CMS
        localCms: false,

        // Project structure
        distRoot: 'build',

        // booleans for ternary operators
        craft: false,
        nunjucks: true,
        shopify: false
    }
} else if (projectConfig.framework == 'craft') {
    projectVariables = {
        // Local Domain
        domain: 'local.jaypack.com',

        // Has local CMS
        localCms: true,

        // Project structure
        distRoot: projectConfig.isBwu ? '../_craft/' : 'build',

        // booleans for ternary operators
        craft: true,
        nunjucks: false,
        shopify: false
    }
} else if (projectConfig.framework == 'shopify') {
    projectVariables = {
        // Project Domain
        domain: 'local.jaypack.com',

        // Has local CMS
        localCms: false,

        // Project structure
        distRoot: projectConfig.isBwu ? '../_shopify/' : 'shopify',

        // booleans for ternary operators
        craft: false,
        nunjucks: false,
        shopify: true
    }
}


// Config rules
const config = {
    framework: projectConfig.framework,
    shopify: projectVariables.shopify,
    
    env: {
        production: environments.production,
        development: environments.development
    },

    // Build directory
    distRoot: projectVariables.distRoot,
    srcRoot: '_src',

    // Sass variables
    autoprefixerVersions: [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],

    // Browsersync
    browserSync: projectVariables.localCms ? {
        open: 'external',
        host: projectVariables.domain,
        proxy: projectVariables.domain,
        port: 3000,
        notify: false
    } : {
        server: {
            baseDir: projectVariables.distRoot
        }
    }
}

export default config