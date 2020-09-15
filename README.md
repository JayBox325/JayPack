# JayPack 🍾
A CraftCMS & Frontend boilterplate using Webpack & Gulp 4.

JayPack is the front end framework for use with [JayCraft](https://packagist.org/packages/jaybox325/jaycraft) or as a static site builder with Nunjucks.

## Installation
Simply run `npm i` to install all the front end dependencies in the root directory.

## Setup
Configure the project in `./project.config.js`. Set `craft` to true or false depending on your needs.

### CraftCMS
If you have a CraftCMS site, populate your local MAMP instance to direct browserstack for live refreshing.

Once these tasks are done, you will then need to create a new `/build` directory in the root of the project and run `composer create-project JayBox325/JayCraft .` BEFORE you run the initial `npm run build` command - CraftCMS won't install the project if the `/build` directory has contents.

Composer will then download and install a JayCraft instace from Packagist with a lot of pre-defined config. The only configuration you need to do on install is:

1. Populate the `/build/.env` file with your details (Security Key, DB password, DB name and your Default site URL)
2. Set up a local MAMP instance and Database that matches the details from your env file.
4. Import the initial Database located in `/_db` to your local environment.

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

## First run
After setting up a project for the first time, you will need to run `npm build` so JayPack structures the project directories.

## TODO
- Build Jquery into Webpack/Bundle
- Update base Twig templates for modern workflow
    - Update language tag based on Craft's language setting
    - Set up initial Favicon
    - Embed Jquery into webpack/bundle
    - Set up craft css/js template versioning (craft-asset-rev)
    - Set up site structure to work with Barba.js
    - Update forms templating from D** project
    - Set up 'errors' template dir
    - Set up base menu and header
    - Set up darkmode CSS styles
    - Add IMAGER to JayCraft
    - Remove Tailwind transitions and transforms modules, it's built into TW 1.2 - See [breaking TW changes](https://tailwindcss.com/docs/upcoming-changes)
    - Include a DB setup command
    - Include SVG symbol example markup
    - Remove colour vars
    - Move Row into Layout
    - Add elements CSS to styles