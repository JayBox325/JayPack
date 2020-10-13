import fontLoader from './fontLoader'
import share from './share'
import menu from './menu'
import printPage from './print-page'

export default function defaultJS() {
    fontLoader()
    menu()
    share()
    printPage()
}