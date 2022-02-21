import inquirer from 'inquirer'
import run from './run.js'
import projectConfig from '../_frontend/project.config.js'

async function provision(options) {
    return await new Promise((resolve, reject) => {
        const answer = inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'framework',
                    message: 'Select your project framework:',
                    choices: [
                        'Static',
                        'Shopify',
                        'Craft'
                    ],
                    default: projectConfig['framework']
                },
                {
                    type: 'confirm',
                    name: 'provision',
                    message: "Would you like to provision this project?",
                }
            ])
            .then((answers) => {
                if (answers.provision) {
                    console.log(answers.framework)
                    switch (answers.framework) {
                        case 'Shopify':
                            run('mkdir', ['_shopify'])
                            console.log('install themekit & shopify stuff')
                            break;

                        case 'Craft':
                            Promise.resolve()

                                // Make Craft directory
                                .then(() => 
                                    run('mkdir', ['_craft'])
                                )

                                // Create project from scaffold repo
                                .then(() => 
                                    run('composer', ['create-project', 'JayBox325/JayCraft', '_craft'])
                                )

                                // CD into _craft
                                .then(() => 
                                    run('cd', ['_craft'])
                                )

                                // Create security key
                                .then(() => 
                                    run('php', ['craft', 'setup/security-key'])
                                )

                                // Build in Nitro
                                .then(() => 
                                    run('nitro', ['add'])
                                )
                                // .then(() => 
                                //     run('nitro', ['db', 'import', 'DATABASE FILE'])
                                // )
                            break;

                        case 'Static':
                            run('mkdir', ['_build'])
                            console.log('Move Nunjucks into _src')
                            break;
                    
                        default:
                            break;
                    }
                }
            })
            .catch((error) => console.log(error))

            /*
                - Setup local project based on framework choice
                    - download and setup jaycraft for craftcms
                    - download and setup themekit for shopify
                    - move the nunjucks directory into _frontend for static
            */
    })
}

export default provision