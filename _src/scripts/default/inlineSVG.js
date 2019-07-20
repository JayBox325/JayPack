// Source: https://github.com/jonnyhaynes/inline-svg
import inlineSVG from 'inline-svg'

export default function svg() {
    inlineSVG.init({
        svgSelector: 'img.js-inlinesvg'
    }, function () {
        //console.log('All SVGs inlined')
    })
}