#!/usr/bin/env node
const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const fs = require('fs')
const { spawnSync } = require('child_process')

const projectConf = './_frontend/project.config.js'

var framework = ''
var projectName = ''
var projectSlug = ''

var args = process.argv.slice(2)

switch (args[0]) {

    case 'install':
    case 'i':
    case 'ok':
        if (process.argv.length == 3) {
            console.log(chalk.yellow('🔨 Jaypack is fetching your dependencies and installing them.'))
            run('npm', ['install', '--prefix', '_frontend'])
        } else if (process.argv.length == 4) {
            installNewPkg(process.argv.slice(3))
        }
        break

    case 'watch':
    case 'dev':
        console.log(chalk.yellow('👀 Jaypack is watching and waiting for commands...'))
        run('npm', ['run', 'watch', '--prefix', '_frontend'])
        break

    case 'init':
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'project_name',
                    message: "What is your project called?",
                },
                {
                    type: 'list',
                    name: 'project_framework',
                    message: 'Select your project framework:',
                    choices: [
                        'Static',
                        'Shopify',
                        'Craft'
                    ],
                }
            ])
            .then((answers) => {

                for (let [key, value] of Object.entries(answers)) {
                    switch(key) {
                        case 'project_name':
                            populateConfig(key, value)

                            break
                        case 'project_framework':
                            populateConfig(key, value)

                            /*
                                If craft:
                                    - download jaycraft in ./_craft
                                    - Notice about MAMP or other environment
                                    - Create next command once environment is setup that installs craft and imports the scaffold database

                                If static:
                                    - moves nunjucks scaffold into _src

                                If shopify
                                    - Installs themekit
                                    - Sets up a shopify conf file
                                    - Downloads a shopify blank theme
                            */
                           
                            break
                    }
                }
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
        break

    case 'package':
        console.log(chalk.yellow('📦 Runa is packaging the frontend for production'))
        run('npm', ['run', 'build', '--prefix', '_frontend'])
        break

    case 'add':
    case 'fetch':
        installNewPkg(process.argv.slice(3))
        break

    default:
        console.log(
            chalk.yellow(
                figlet.textSync('JayPack', { horizontalLayout: 'full' })
            ),
            '\n\nJayPack is a frontend boilerplate to build static,\nShopify or CraftCMS projects. Below are all the\ncommands available within JayPack:\n',

            chalk.yellow('\ninstall'),
            '\t\t\t',
            'This installs all dependencies',

            chalk.yellow('\ninit'),
            '\t\t\t',
            'Set up the project config file & scaffold',

            chalk.yellow('\nwatch'),
            '\t\t\t\t',
            'Start a local Browserstack instance and watch for changes',

            chalk.yellow('\npackage'),
            '\t\t\t',
            'Compile and purge project ready for deployment',

            chalk.yellow('\nfetch <package-name>'),
            '\t\t',
            'Fetch a new npm dependency and install it',

            '\n\nSee github.com/jaybox325/jaypack for issues.\n',

        )
        break
}

function run(cmd, args) {
    return spawnSync(cmd, args, { stdio: 'inherit' })
}

function installNewPkg(pkgs) {
    let command = ['i','-D','--prefix','_frontend']
    command.splice.apply(command, [2,0].concat(pkgs))

    console.log(chalk.yellow(`Runa is fetching and installing ${pkgs.join(', ').replace(/, ([^,]*)$/, ' and $1')}.`))
    run('npm', command)
}

function populateConfig(confType, confString) {
    var result

    fs.readFile(projectConf, 'utf8', function (err,data) {
        if (err) {
            return console.log(err)
        }

        switch(confType) {
            case 'project_name':
                result = data.replace(/name: '.*'/g, `name: '${confString.toLowerCase()}'`);
                break
            case 'project_framework':
                result = data.replace(/framework: '.*'/g, `framework: '${confString.toLowerCase()}'`);
                break
        }

        fs.writeFile(projectConf, result, 'utf8', function (err) {
            if (err) return console.log(err);
        })
    })
}