import projectConfig from '../../project.config.mjs'
let distRoot = ''

switch(projectConfig.framework) {
    case 'nunjucks':
        distRoot = '../build'
        break
    case 'shopify':
        distRoot = '../shopify'
        break
    case 'craft':
        distRoot = '../craft'
        break
}

export default distRoot