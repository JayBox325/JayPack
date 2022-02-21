import {spawnSync} from 'child_process'

function run(cmd, args) {
    return spawnSync(cmd, args, { stdio: 'inherit' })
}

export default run