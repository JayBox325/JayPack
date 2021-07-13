import config from './_index.js'
let distRoot

switch(config.framework) {
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