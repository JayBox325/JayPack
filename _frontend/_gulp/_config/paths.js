import config from './_index.js'

let assets
let symbolsDist
let templateExt
let purge

switch (config.framework) {
    case 'craft':
        assets = `${config.distRoot}/public/assets`
        symbolsDist = `${config.distRoot}/templates/_includes`
        purge = `${config.distRoot}/**/*.twig`
        templateExt = '.twig'
        break;
    
    case 'static':
        assets = `${config.distRoot}/assets`
        symbolsDist = `${config.srcRoot}/html/_includes`
        purge = `${config.distRoot}/**/*.html`
        templateExt = '.njk'

    case 'shopify':
        assets = `${config.distRoot}/assets`
        symbolsDist = `${config.distRoot}/snippets`
        templateExt = '.liquid'
        purge = `${config.distRoot}/**/*.liquid`

    default:
        break;
}

const paths = {
    templateExt: templateExt,

	sass: {
        src: `${config.srcRoot}/styles/styles.scss`,
        watch: `${config.srcRoot}/styles/**/*.scss`,
        dest: config.shopify ? assets : `${assets}/styles`,
        tailwind: './tailwind.config.js',
        purge: purge
    },

    js: {
        app: `./${config.srcRoot}/scripts/app.ts`,
        watch: `${config.srcRoot}/scripts/**/*.ts`,
        dest: config.shopify ? assets : `${assets}/scripts`,
        bundle: `${assets}/scripts/bundle.js`
    },

    assets: {
        images: {
            src: `${config.srcRoot}/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            watch: `${config.srcRoot}/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            dest: config.shopify ? assets : `${assets}/images`
        },
        videos: {
            src: `${config.srcRoot}/assets/videos/*.{mp4,.webm}`,
            watch: `${config.srcRoot}/assets/videos/*.{mp4,.webm}`,
            dest: config.shopify ? assets : `${assets}/videos`
        },
        favicons: {
            src: `${config.srcRoot}/assets/favicons/*.*`,
            watch: `${config.srcRoot}/assets/favicons/*.*`,
            dest: config.shopify ? assets : `${assets}/favicons`
        },
        fonts: {
            src: `${config.srcRoot}/assets/fonts/*.*`,
            watch: `${config.srcRoot}/assets/fonts/*.*`,
            dest: config.shopify ? assets : `${assets}/fonts`
        }
    },

    symbols: {
        src: `${config.srcRoot}/assets/svg/*.svg`,
        dest: symbolsDist,
        watch: `${config.srcRoot}/assets/svg/*.svg`
    },

    // NUNJUCKS
    njks: {
        storage: `_gulp/utils/html/**/*`,
        access: `./${config.srcRoot}/html/_layout/_base.njk`,
        render: `${config.srcRoot}/html`,
        src: `${config.srcRoot}/html/pages/*.njk`,
        watch: `${config.srcRoot}/html/**/*`,
        data: `${config.srcRoot}/html/__data/data.json`,
        dest: `${config.distRoot}`,
        moveDest: `${config.srcRoot}`,
    },

    // CRAFT
    twig: {
        watch: `${config.distRoot}/templates/**/*.twig`
    },


}

export default paths