# JayPack 🍾
A Frontend boilterplate using Webpack & Gulp 4. Read the docs in the [JayPack Wiki](https://github.com/JayBox325/JayPack/wiki).


### Setting up

#### Project Wrapper
Install the wrapper with `npm i`.

#### Project Setup
Install all project dependencies and configure the project with `npm run setup`.

#### Provision CraftCMS and Nitro
Run `composer create-project JayBox325/JayCraft _craft` to install a CraftCMS project in a new directory called `_craft`.

Set up a CraftCMS Security Key with `_craft/craft setup/security-key`.

Add this project to Nitro (provided you have it installed and setup on your machine) with `nitro add _craft`.

If the database prompt doesn't show options, just type `2` for postgres.



### Shopify

`theme open -e development` Open the development theme in the browser.


### Dependency notes

- `gulp-imagemin` installed at `7.0.0` as `8.0.0` is not compatible outside of typescript.

### Futures

- Don't include the _frontend directory by default. Question 1 should be React or Gulp.
    - If react:
        - Clone a NextJS boilerplate.
    - If Gulp:
        - Clone the current Gulp boilerplate into a _frontend dir.
        - Ask questions about Craft/Static/Shopify then clone the appropriate repo.
- Include themekit in Gulp for shopify projects.
    