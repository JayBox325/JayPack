import config from './config'
import projectConfig from '../project.config'

const assets = `${config.distRoot}/assets`

const paths = {
	sass: {
        src: `_src/styles/*.scss`,
        watch: `_src/styles/**/*.scss`,
        dest: `${assets}/styles`,
        tailwind: '_gulp/tailwind.config.js'
    },

    njks: {
        storage: `_gulp/html/**/*`,
        access: `./_src/html/_layout/_base.njk`,
        render: `_src/html`,
        src: `_src/html/pages/*.njk`,
        watch: `_src/html/**/*`,
        data: `_src/html/__data/data.json`,
        dest: `${config.distRoot}`,
        moveDest: `_src`,
    },

    twig: {
        watch: `${config.distRoot}/templates/**/*.twig`
    },

    js: {
        app: `./_src/scripts/app.js`,
        watch: `_src/scripts/**/*.js`,
        dest: `${assets}/scripts`
    },

    assets: {
        images: {
            src: `_src/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            watch: `_src/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            dest: `${assets}/images`
        },
        videos: {
            src: `_src/assets/videos/*.{mp4,.webm}`,
            watch: `_src/assets/videos/*.{mp4,.webm}`,
            dest: `${assets}/videos`
        },
        favicons: {
            src: `_src/assets/favicons/*.*`,
            watch: `_src/assets/favicons/*.*`,
            dest: `${assets}/favicons`
        },
        svg: {
            src: `_src/assets/svg/*.svg`,
            watch: `_src/assets/svg/*.svg`,
            dest: `${assets}/svg`
        },
        fonts: {
            src: `_src/assets/fonts/*.*`,
            watch: `_src/assets/fonts/*.*`,
            dest: `${assets}/fonts`
        }
    },

    symbols: {
        dest: projectConfig.craft ? `${config.distRoot}/templates/_includes` : `_src/html/_includes`
    },

    rev: {
        styles: `${assets}/**/*.css`,
        scripts: `${assets}/**/*.js`,
        dist: `${assets}`,
    }
}

export default paths