# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.1.5 -- DEV
### Changed
- Fixed typos in changelog
- Sass import fix
- Relocated files to `_includes`

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