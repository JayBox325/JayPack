// Source: https://github.com/jonnyhaynes/inline-svg
import inlineSVG from 'inline-svg'

inlineSVG.init({
    svgSelector: 'img.svg',
    initClass: 'js-inlinesvg',
}, function () {
    console.log('All SVGs inlined')
})