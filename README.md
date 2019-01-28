# JayPack 🍾

A Webpack & Gulp 4 framework for projects in 2019. The evolution from the [JayBox Gulp framework](https://github.com/JayBox325/jaybox).


## Installation 

This is a Gulp 4 boilerplate, so the first thing to do is remove any current versions of Gulp you have installed globally. This will break other projects on older versions of Gulp, but it's something the guys at Gulp recommend you do first.

```
npm rm --global gulp
```

You will need these things installed before you can begin:

* node
* npm
* yarn

Then globally install the Gulp CLI tools if you haven't got them already:

```
npm install --global gulp-cli
```

## Setup

Get your local project setup with Yarn by typing:

```
yarn init
```

Install just install all the required project dependencies:

```
yarn
```

## Config

### Static or CraftCMS 🧐

This boilerplate can be used for static HTML websites built with Nunjucks, or it can be used for CraftCMS projects. The configuration for this is set in the `project.config.js` file.

If the project is set to `static` the nunjucks commands will be run. If it's set to `craft` then we let some CraftCMS plugins take care of the asset versioning. But also, browsersync will serve your static HTML files, whereas Craft just refreshes your Twig files if files are changed.

### CraftCMS site url

If you are running a CraftCMS site, you will need to set your weburl (e.g. local.project.com) in the `project.config.js` file.

### Static site port number

However, if you're running a static site, you should set a new port number in the same `project.config.js` file to save any clashes with other projects.

## Commands

There are three commands to run for this boilerplate as follows:

* `npm start` - this will compile everything then start watching all the source files.
* `npm build` - this builds all your source files, but still in your development environment so sourcemaps will be included and nothing will be minified.
* `npm package` - this is the command for pushing code live. This will remove all the sourcemaps and minify everything ready for launch.

## TODO

* Test Craft BrowserSync functionality
* Import reused HTML, Scss and JS modules from projects - ongoing
    * Header - in progress
    * Hamburger
    * Accessible nested menu drawer
    * Footer
    * Base CSS Grid system
* Typography scaling