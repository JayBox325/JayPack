import config from './config'
import projectConfig from '../project.config'

const assets = `${config.distRoot}/assets`

const paths = {
	sass: {
        src: `${config.srcRoot}/styles/styles.scss`,
        utils: `${config.srcRoot}/styles/utilities.scss`,
        watch: `${config.srcRoot}/styles/**/*.scss`,
        dest: `${assets}/styles`,
        tailwind: '_gulp/tailwind.config.js'
    },

    njks: {
        storage: `_gulp/html/**/*`,
        access: `./${config.srcRoot}/html/_layout/_base.njk`,
        render: `${config.srcRoot}/html`,
        src: `${config.srcRoot}/html/pages/*.njk`,
        watch: `${config.srcRoot}/html/**/*`,
        data: `${config.srcRoot}/html/__data/data.json`,
        dest: `${config.distRoot}`,
        moveDest: `${config.srcRoot}`,
    },

    twig: {
        watch: `${config.distRoot}/templates/**/*.twig`
    },

    js: {
        app: `./${config.srcRoot}/scripts/app.js`,
        watch: `${config.srcRoot}/scripts/**/*.js`,
        dest: `${assets}/scripts`
    },

    assets: {
        images: {
            src: `${config.srcRoot}/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            watch: `${config.srcRoot}/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            dest: `${assets}/images`
        },
        videos: {
            src: `${config.srcRoot}/assets/videos/*.{mp4,.webm}`,
            watch: `${config.srcRoot}/assets/videos/*.{mp4,.webm}`,
            dest: `${assets}/videos`
        },
        favicons: {
            src: `${config.srcRoot}/assets/favicons/*.*`,
            watch: `${config.srcRoot}/assets/favicons/*.*`,
            dest: `${assets}/favicons`
        },
        svg: {
            src: `${config.srcRoot}/assets/svg/*.svg`,
            watch: `${config.srcRoot}/assets/svg/*.svg`,
            dest: `${assets}/svg`
        },
        fonts: {
            src: `${config.srcRoot}/assets/fonts/*.*`,
            watch: `${config.srcRoot}/assets/fonts/*.*`,
            dest: `${assets}/fonts`
        }
    },

    symbols: {
        dest: projectConfig.cms ? `${config.distRoot}/templates/_includes` : `${config.srcRoot}/html/_includes`
    },

    rev: {
        styles: `${assets}/**/*.css`,
        scripts: `${assets}/**/*.js`,
        dist: `${assets}`,
    }
}

export default paths