import config from './config'
import projectConfig from '../project.config'

const assets = config.distRoot

const paths = {
	sass: {
        src: `_src/styles/*.scss`,
        watch: `_src/styles/**/*.scss`,
        dest: `${assets}/styles`,
        tailwind: '_gulp/tailwind.config.js'
    },

    njks: {
        render: `_src/html`,
        src: `_src/html/pages/*.njk`,
        watch: `_src/html/**/*.njk`,
        data: `_src/html/__data/data.json`,
        dest: `build`,
        storage: `_gulp/html`
    },

    twig: {
        watch: `build/templates/**/*.twig`
    },

    js: {
        app: `./_src/scripts/app.js`,
        watch: `_src/scripts/**/*.js`,
        vendor: `./_src/scripts/vendor/*.js`,
        dest: `${assets}/scripts`
    },

    assets: {
        images: {
            src: `_src/assets/images/*.{png,gif,jpg,svg}`,
            watch: `_src/assets/images/*.{png,gif,jpg,svg}`,
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
        dest: projectConfig.craft ? `build/templates/_layout` : `_src/html/_layout`
    },

    rev: {
        styles: `${assets}/**/*.css`,
        scripts: `${assets}/**/*.js`,
        dist: `${assets}`,
    }
}

export default paths