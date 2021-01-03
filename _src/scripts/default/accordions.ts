export default function accordions() {
    const accordions = document.querySelectorAll('[data-accordion]')
    const accordionTitles = document.querySelectorAll('[data-accordion-title]')
    const hiddenClass = 'is-hidden'
    let thisGroup
    let accordionBody
    let accordionHeight

    if (accordions) {
        accordionTitles.forEach(accordionTitle => {
            accordionBody = accordionTitle.nextElementSibling
            accordionHeight = accordionBody.offsetHeight
            accordionBody.dataset.height = accordionHeight
            accordionTitle.parentElement.classList.add('is-hidden')

            accordionTitle.addEventListener('click', function(el) {
                if (!this.parentElement.classList.contains(hiddenClass)) {
                    closeAccordion(this)
                } else {
                    openAccordion(this)
                }
            })
        })
    }

    function openAccordion(title) {
        // Enable this to close other accordions when one is opened.
        // closeOthers(title)
        accordionHeight = title.nextElementSibling.dataset.height
        console.log(accordionHeight)
        title.nextElementSibling.style.height = `${accordionHeight}px`
        title.parentElement.classList.remove(hiddenClass)
        title.setAttribute('aria-expanded', true)
    }

    function closeAccordion(title) {
        title.parentElement.classList.add(hiddenClass)
        title.nextElementSibling.style.height = null
        title.setAttribute('aria-expanded', false)
    }

    function closeOthers(title) {
        thisGroup = title.closest('[data-accordion-wrap]')
        thisGroup = thisGroup.querySelectorAll('[data-accordion]')

        thisGroup.forEach(accordion => {
            closeAccordion(accordion.querySelector('[data-accordion-title]'))
        })
    }
}