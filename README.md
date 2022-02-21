# JayPack 🍾
A Frontend boilterplate using Webpack & Gulp 4. Read the docs in the [JayPack Wiki](https://github.com/JayBox325/JayPack/wiki).


### Setting up

#### Project Wrapper
Install the wrapper with `npm i`.

#### Project Setup
Install all project dependencies and configure the project with `npm run setup`.

#### Provision CraftCMS and Nitro
Firstly make a new `_craft` directory and cd into it then run `composer create-project JayBox325/JayCraft .` to install a CraftCMS project in here.

Set up a CraftCMS Security Key with `./craft setup/security-key`.

Add this project to Nitro (provided you have it installed and setup on your machine) with `nitro add`.

### Shopify

`theme open -e development` Open the development theme in the browser.


### Dependency notes

- `gulp-imagemin` installed at `7.0.0` as `8.0.0` is not compatible outside of typescript.