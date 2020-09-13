# JayPack 🍾
A CraftCMS & Frontend boilterplate using Webpack & Gulp 4.

JayPack is the front end framework for use with [JayCraft](https://github.com/JayBox325/JayCraft) or as a static site builder with Nunjucks.

## Installation
Simply run `npm i` to install all the front end dependencies in the root directory.

## Setup
Configure the project in `./project.config.js`. Set `craft` to true or false depending on your needs.

### CraftCMS
If you have a CraftCMS site, populate your local MAMP instance to direct browserstack for live refreshing.

Once these tasks are done,you will need to clone the JayCraft boilerplate using composer into the `./build` directory. This is documented in the [JayCraft README](https://github.com/JayBox325/JayCraft).

### Static
Once `craft` is set to `false`, you can get started by building the project in the `_src/html` directory. HTML templates will generated and exported to a `build` directory.

## TailwindCSS
JayPack uses [TailwindCSS](https://tailwindcss.com/), because it rules. To get your project started you will need to set up your project theme colours in the `./_gulp/tailind.config.js` file around line 20.

> Note that whenever you update anything within the `_gulp` dir, you will need to restart your local gulp instance if it is already watching and re-running `npm run start`.

## Working
There are three commands to run for this boilerplate as follows:

* `npm start` - Compile everything then start watching all the source files.
* `npm build` - Build all your source files, but still in your development environment so sourcemaps will be included and nothing will be minified.
* `npm package` - Package your project. This will remove all the sourcemaps and minify everything ready for launch.