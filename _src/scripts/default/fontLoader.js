import WebFont from 'webfontloader'

export default function fontLoader() {
    WebFont.load({
        google: {
            families: ['Abril Fatface', 'Open Sans', 'Open Sans:600']
        }
    })
}
