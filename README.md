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

> *Note:* Your assets will be saved in different locations depending on if you are running a `static` or `craft` project. Static projects have their assets in `/build/assets`, whereas Craft projects need them to be saved into `/build/public/assets`.

### CraftCMS site url

If you are running a CraftCMS site, you will need to set your weburl (e.g. local.project.com) in the `project.config.js` file.

### Static site port number

However, if you're running a static site, you should set a new port number in the same `project.config.js` file to save any clashes with other projects.

## Commands

There are three commands to run for this boilerplate as follows:

* `npm start` - this will compile everything then start watching all the source files.
* `npm build` - this builds all your source files, but still in your development environment so sourcemaps will be included and nothing will be minified.
* `npm package` - this is the command for pushing code live. This will remove all the sourcemaps and minify everything ready for launch.

## Craft project setup

Before you begin, setup a database on your local MySQL and make a note of the name, user and password! You'll need these shortly.

Once you've setup a database and updated the variables in the `project.config` file, you are ready to get started with Craft. Start by downloading Craft via Composer inside the `/build` directory:

```
composer create-project craftcms/craft /build
```

However, Craft downloads everything inside a `/craft` directory within our build directory, which isn't what we want so you need to do the following steps:

1 Rename the `/craft` directory to anything else (e.g. `/_craft`)
2 Move the contents of `/craft` into the `/build` directory. We had to rename the `/craft` folder above because one of the files we downloaded via Composer has the same name.

Once this has been done, from inside the `/build` directory run the CraftCMS setup wizard:

```
./craft setup
```
Run through the database setup which is where you'll need the database details from the start. Following that, you'll be asked to install Craft. Yes is the correcy answer.

Here you'll setup login details for the admin and the site URL (which should match your MAMP server when you set one up).

> *Optional:* Rename the `/web` directory to `/public`.

You should now have a Craft 3 instance on your local machine ready to start development!



## TODO

* Test Craft BrowserSync functionality
* Import reused HTML, Scss and JS modules from projects - ongoing
    * 
    * Accessible nested menu drawer
    * Footer
    * Base CSS Grid system
    * Form fields
    * Non-JS dialogs, menu opening and accordions with `<detail>` - [example](https://twitter.com/calebporzio/status/1122924167769264130)
    * Basic buttons setup
