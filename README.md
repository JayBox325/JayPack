# JayPack 🍾
A CraftCMS & Frontend boilterplate using Webpack & Gulp 4.

JayPack is the front end framework for use with [JayCraft](https://github.com/JayBox325/JayCraft), a CraftCMS boilerplate. This framework will be converted to work for static sites built with Nunjucks in the future, but for now, it's just a CraftCMS framework.

Once you have JayPack set up, you will need to clone JayCraft into the `build` directory.

## Installation
To install JayPack, you will need to have NPM or Yarn installed. I prefer yarn, but both do the job. Simply run `npm i` if you use NPM or run `yarn` to install all the front end dependencies.

## Setup
Firstly, to set up this project to work with CraftCMS, you will need to clone the JayCraft boilerplate using composer. This is documented in the [JayCraft README](https://github.com/JayBox325/JayCraft).

Once you have a local CraftCMS instance running, I use MAMP, we need to tell JayPack's Browsersync where your local CraftCMS instance is pointing (e.g. local.projectname.com). To do this, edit the Browsersync config inside the `./_gulp/config.js` file. This will set up live refresh for your CraftCMS site when you make front end changes.

## TailwindCSS
JayPack uses TailwindCSS, because it rules. To get your project started you will need to set up your project theme colours in the `./_gulp/tailind.config.js` file on line 20 (at time of README writing...).

> Note that whenever you update anything within the `_gulp` dir, you will need to restart your gulp instance by breaking out of your current one and re-running `npm run start`.

## Working
There are three commands to run for this boilerplate as follows:

* `npm start` - Compile everything then start watching all the source files.
* `npm build` - Build all your source files, but still in your development environment so sourcemaps will be included and nothing will be minified.
* `npm package` - Package your project. This will remove all the sourcemaps and minify everything ready for launch.