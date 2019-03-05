// import jquery from 'jquery'
// window.jQuery = jquery
// window.$ = jquery

// Loaded once on initial page load
import menu from './default/menu'
import fontLoader from './default/fontLoader'

// Other JS functions are fired in Highway

import defaultJS from './default/_index.js'
import moduleJS from './modules/_index.js'

defaultJS.defaultJS()
moduleJS.moduleJS()

// Highway page transitions
import highway from './highway/index.js' 



