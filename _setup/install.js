import run from './run.js'

async function install() {
    return await new Promise((resolve, reject) => {
        run('npm', ['i', '--prefix', '_frontend'])
        resolve()
    })
}

export default install