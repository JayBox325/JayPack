/*
    Print current page

    Use: Add a button with a data-print-page attribute
*/

export default function printPage() {
    const printPageBtn = document.querySelector('[data-print-page]')

    if (printPageBtn) {
        printPageBtn.addEventListener('click', function(e) {
            window.print()
        })
    }
}