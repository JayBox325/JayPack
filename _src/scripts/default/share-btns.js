/*
    Open social share links in small new windows

    Use: Add the data-share attibute to buttons that have a social media share href
*/

export default function shareBtns() {
    const shareBtns = document.querySelectorAll('[data-share]')

    if (shareBtns) {
        shareBtns.forEach(el => {
            el.addEventListener('click', function(e) {
                e.preventDefault()
                window.open(this.href, 'Share', 'width=800, height=600')
                return false
            })
        })
    }
}