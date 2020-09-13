# JayPack 🍾
A CraftCMS & Frontend boilterplate using Webpack & Gulp 4.

JayPack is the front end framework for use with [JayCraft](https://github.com/JayBox325/JayCraft) or as a static site builder with Nunjucks.

## Installation
To install JayPack, you will need to have NPM or Yarn installed. I prefer yarn, but both do the job. Simply run `npm i` to install all the front end dependencies.

## Setup
Firstly, decide if your project is going to be static or with a CraftCMS instance behind it. from here, the only configuration you need to make is in the `./project.config.js` file. Set `craft` to true or false depending on your needs.

If you have a Craft site, you need to populate where your local craft instance is to point browserstack for live refreshing to work with Twig.

Once these tasks are done, to set up this project to work with CraftCMS, you will need to clone the JayCraft boilerplate using composer into the `./build` directory. This is documented in the [JayCraft README](https://github.com/JayBox325/JayCraft).

## TailwindCSS
JayPack uses TailwindCSS, because it rules. To get your project started you will need to set up your project theme colours in the `./_gulp/tailind.config.js` file on line 20 (at time of README writing...).

> Note that whenever you update anything within the `_gulp` dir, you will need to restart your gulp instance by breaking out of your current one and re-running `npm run start`.

## Working
There are three commands to run for this boilerplate as follows:

* `npm start` - Compile everything then start watching all the source files.
* `npm build` - Build all your source files, but still in your development environment so sourcemaps will be included and nothing will be minified.
* `npm package` - Package your project. This will remove all the sourcemaps and minify everything ready for launch.