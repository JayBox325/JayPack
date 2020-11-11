/*
    Print current page

    Use: Add a button with a data-print-page attribute
*/

export default function printPage() {
    const printPageBtns = document.querySelectorAll('[data-print-page]')

    if (printPageBtns) {
        printPageBtns.forEach(el => {
            el.addEventListener('click', function(e) {
                window.print()
            })
        })
    }
}