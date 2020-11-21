# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.2 -- DEV
### Added
- Webpack JS audit
- JS improvement
- Darkmode button JS
- Cookie bar JS
- Tailwind 2

### Changed
- Converted keyboard trapping to non jQuery
- Updated Row CSS to be Tailwind-based
- Updated nunjucks components to be DRY

## 2.1.9
### Added
- Deployment checklist

### Changed
- Updated packages
- Fixed dependency vulnerabilities
- Fixed name error in package.json
- Moved the README content into a GitHub Wiki
- Removing craft references and making project-config handle more
- Separated the Tailwind Utils into it's own CSS file for HUGE Gulp speed improvements

## 2.1.8
### Added
- Brotli htaccess file
- Print stylesheet
- Print page button JS
- Missing Njks files
- Header style JS
- Form markup
- Tailwind dark mode
- Production watch script

### Changed
- Improved gulp move task
- Adjusted Sass colours more to suit Tailwind
- Worked with gzipping and removed it, server side gzipping is better
- Adjusted gulp paths
- Heading alternative classes
- Updated gulp notifications
- Tailwind CSS to purge HTML from Nunjucks compilation
- Updated social icon paths
- Source directory root conf

## 2.1.7
### Changed
- Converted `resp-font-size()` Scss mixin to work with Tailwind font size values
- Need to convert colour map to match tailwind names for shades
- Cleaning gulp tasks
- Removing Jquery from modules in an effort to learn vanilla JS and make smaller bundles!

### Added
- Mockup body component to test all content styles
- New method of setting text colour based on the background value
- New 'primary' and 'secondary' colourschemes as these are usually specific and may not sit inside 'green' or 'red' etc.
- Default Footer scss file.
- Sass Gulp Node_modules include path
- NVM
- Webpack 5!
- Gzipping for js bundle for Craft projects (need to add .gz config to JayCraft!)

## 2.1.6
### Removed
- Todo list from README and moved into GitHub issues

### Changed
- Fixed symbols extension
- Moved accessibility Scss to fix variable import oder bug

### Added
- Link to tailwind shade generator
- Default social links component
- New FB icon
- Gulp-Data + Nunjucks module
- Njks header component
- Button component
- Theming changes to use tailwind classes instead of pre-defined classes
- Default BarbaJS module

## 2.1.5
### Changed
- Fixed typos in changelog
- Sass import fix
- Relocated files to `_includes`
- Fixed gulp HTML paths

## 2.1.4
### Changed
- Changed licence to an 'unlicence'
- Updated README
- Updated Tailwind config
- Modified Colour vars
- Changed dev command from `start` to `watch` to mirror Laravel Mix for ease of familiarity

## Added
- Gulp Sass Glob
- Darkmode file
- Njks default markup & macros
- List Sass file

### Removed
- Redundant dev packages
- Asset rev attempts
- Vendor jQuery

## 2.1.3
### Changed
- Fixed JS import errors

## 2.1.2
### Changed
- Streamlined JS modules
- Updated NPM packages
- Improved README.
- Fixed Nunjucks move Gulp task

### Removed
- Yarn config, NPM does the same job now!

### Added
- IE stylesheet

## 2.1.1
### Added
- Empty Components and Elements directories for Nunjucks

### Changed
- Removed previous styling from `.row` class

## 2.1.0
### Added
- Nunjucks and CraftCMS versions of JayPack

## 2.0.2
### Removed
- Legacy grid sass file
- Legacy twig versioning

### Added
- Symbols gulp task
- Elements Sass directory
- Selection of reusable FontAwesome icons
- Icon Sass file to style SVG Symbols
- Social brand colours to tailwind colour palette
- JS sourcemaps
- Removing sourcemaps on `package` task

### Changed
- Gulp tasks to include new symbols task
- Updated yarn packages
- Updated the README
- Updated the licence

## 2.0.1
### Removed
- Styling component from jaycollett.co

### Added
- More min-width variable options in Tailwind

### Changed
- Upgraded yarn packages to resolve security vunerability

## 2.0.0
- New version without CraftCMS built in. This is now a separate repo in `jaybox325/jaycraft`.