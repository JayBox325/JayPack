import inquirer from 'inquirer'

async function run() {
    var answer = await inquirer.prompt(
 [{
    type: 'input',
    message: 'What is the meaning of life?',
    name: 'truth'
}]
);
    //do something with the answer? 
}

async function question(options) {
    const answer = await inquirer
        .prompt([
            options
        ])
        .then((answers) => {
            console.log(answers)
        })
        .catch((error) => console.log(error))
}

export default question