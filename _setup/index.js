import question from './question.js'

Promise.resolve()
    .then(() =>
        question(
            {
                type: 'input',
                name: 'project_name',
                message: "What is your project called?"
            }
        )
    )
    .then(() =>
        question(
            {
                type: 'list',
                name: 'project_framework',
                message: 'Select your project framework:',
                choices: [
                    'Static',
                    'Shopify',
                    'Craft'
                ]
            }
        )
    );

function populateConf(answers) {
    for (let [key, value] of Object.entries(answers)) {
        console.log(key, value)
    }
}