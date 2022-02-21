import replace from 'replace-in-file'
import chalk from 'chalk'

function write(key, value, resolve) {
    const oldValue = new RegExp(`${key}: '.*'`);
    const newValue = `${key}: '${value.toLowerCase()}'`

    const options = {
        files: './_frontend/project.config.js',

        from: oldValue,
        to: newValue
    };

    replace(options)
        .then(changedFiles => {
            if (changedFiles[0].hasChanged) {
                console.log(chalk.yellow(`New ${key} provided, updating config...`))
            } else {
                console.log(chalk.red(`${key} already set to "${value}", not updating config.`))
            }
            resolve()
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

export default write