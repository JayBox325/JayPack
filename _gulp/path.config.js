import config from './config'

const assets = config.distRoot

const paths = {
	sass: {
        src: `_src/styles/*.scss`,
        watch: `_src/styles/**/*.scss`,
        dest: `${assets}/styles`
    },

    njks: {
        render: `_src/html`,
        src: `_src/html/*.njk`,
        watch: `_src/html/**/*.*`,
        data: `_src/html/__data/data.json`,
        dest: `build`
    },

    twig: {
        watch: `build/templates/**/*.twig`
    },

    js: {
        app: `./_src/scripts/app.js`,
        watch: `_src/scripts/**/*.*`,
        vendor: `./_src/scripts/vendor/*`,
        dest: `${assets}/scripts`
    },

    assets: {
        images: {
            src: `_src/assets/images/*.*`,
            watch: `_src/assets/images/*.*`,
            dest: `${assets}/images`
        },
        videos: {
            src: `_src/assets/videos/*.*`,
            watch: `_src/assets/videos/*.*`,
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
    }
}

export default paths