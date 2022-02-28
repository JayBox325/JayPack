import replace from 'replace-in-file'

function setInitTrue() {
    console.log('setting init to true')

    const options = {
        files: './_frontend/project.config.mjs',

        from: new RegExp(`init: false`),
        to: `init: true`
    };

    replace(options)
        .then(changedFiles => {
            console.log('set init to true')
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

export default setInitTrue