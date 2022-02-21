import inquirer from 'inquirer'
import write from './write.js'

async function question(options) {
    return await new Promise((resolve, reject) => {
        const answer = inquirer
            .prompt([
                options
            ])
            .then((answers) => {
                for (let [key, value] of Object.entries(answers)) {
                    write(key, value, resolve)
                }
            })
            .catch((error) => console.log(error))
    })
}

export default question