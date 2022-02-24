import question from './question.js'
import install from './install.js'
import provision from './provision.js'
import chalk from 'chalk'
import setInitTrue from './setInitTrue.js'
import projectConfig from '../_frontend/project.config.js'

Promise.resolve()
    .then(() => {
        // Install the project if it hasn't been yet.
        console.log(projectConfig.init)
        if (!projectConfig.init) {
            install()
            setInitTrue()
        } else {
            console.log(chalk.red('Initial installation already completed, skipping.'))
        }
    })
    .then(() => 
        question(
            {
                type: 'input',
                name: 'name',
                message: "What is your project called?",
                default: projectConfig['name']
            }
        )
    )
    .then(() =>
        question(
            {
                type: 'input',
                name: 'domain',
                message: "Enter a local dev domain",
                default: projectConfig['domain']
            }
        )
    )
    // .then(() =>
    //     question(
    //         {
    //             type: 'list',
    //             name: 'framework',
    //             message: 'Select your project framework:',
    //             choices: [
    //                 'Static',
    //                 'Shopify',
    //                 'Craft'
    //             ],
    //             default: projectConfig['framework']
    //         }
    //     )
    // )
    .then(() =>
        provision()
    )