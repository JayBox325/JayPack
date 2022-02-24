import run from './run.js'

async function install() {
    return await new Promise((resolve, reject) => {
        run('npm', ['i', '--prefix', '_frontend'])
        resolve()
    })
}

install()

export default install