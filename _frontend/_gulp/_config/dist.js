import projectConfig from '../../project.config'
let distRoot = ''

switch(projectConfig.framework) {
    case 'nunjucks':
        distRoot = '../_build/'
        break
    case 'shopify':
        distRoot = '../_shopify/'
        break
    case 'craft':
        distRoot = '../_craft/'
        break
}

export default distRoot