import config from './config'

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
        src: `_src/html/*.njk`,
        watch: `_src/html/**/*.njk`,
        data: `_src/html/__data/data.json`,
        dest: `build`
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
            src: `_src/assets/images/*.{png,gif,jpg}`,
            watch: `_src/assets/images/*.{png,gif,jpg}`,
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

    versionPaths: {
        craft: {
            src: 'build/templates/_layout/base.twig',
            dest: 'build/templates/_layout/'
        },
        static: {
            src: 'build/*.html',
            dest: 'build/'
        }
    }
}

export default paths