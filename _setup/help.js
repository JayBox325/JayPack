import chalk from 'chalk'
import figlet from 'figlet'

function help() {
    console.log(
        chalk.yellow(
            figlet.textSync('JayPack', { horizontalLayout: 'full' })
        ),
        '\n\nDescription here about this framework... TBC\n\n',
        'Start each of the following commands with ' + chalk.magenta('npm run') + ' then add:',
        '\n',

        chalk.yellow('\ninstall'),
        '\t',
        'This installs all the dependencies for JayPack to run.',

        chalk.yellow('\nsetup'),
        '\t\t',
        'Setup the project.config file, install front-end dependencies and provision the project (CraftCMS/Shopify/Static).',

        chalk.yellow('\nprovision'),
        '\t',
        'Provision the project (CraftCMS/Shopify/Static) if you skipped this during the setup',

        chalk.yellow('\ndev'),
        '\t\t',
        'Boot a local development gulp instance and watch for changes.',

        chalk.yellow('\nproduction'),
        '\t',
        'Boot a local production gulp instance and watch for changes.',

        chalk.yellow('\nbuild'),
        '\t\t',
        'Build your project without any minification.',

        chalk.yellow('\npackage'),
        '\t',
        'Minify and prepare your project for deployment to production.',

        chalk.yellow('\nhelp'),
        '\t\t',
        'List commands available within JayPack.',
    )
}

help()

export default help