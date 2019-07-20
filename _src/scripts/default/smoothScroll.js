import zenscroll from 'zenscroll'

export default function smoothScroll() {
    const defaultDuration = 777 // ms
    const edgeOffset = 0 // px
    zenscroll.setup(defaultDuration, edgeOffset)
}