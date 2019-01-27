# JayPack

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


## Commands

There are three commands to run for this boilerplate as follows:

* `npm start` - this will compile everything then start watching all the source files.
* `npm build` - this builds all your source files, but still in your development environment so sourcemaps will be included and nothing will be minified.
* `npm package` - this is your command for pushing code live. This will remove all the sourcemaps and minify everything ready for launch.

