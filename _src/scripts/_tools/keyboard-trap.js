/*
    Keep a keyboard user where we want them to be
*/

let focusableItems
let numberOfFocusableItems
let focusedItemIndex
let focusedItem
let items

const focusableElementsString = 'a[href], area[href], input:not([disabled]), summary, select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'

export default function setFocus(target) {
    setTimeout(function() {
        // Focus on the first element
        const focusElement = target.querySelectorAll('a,input,button')[0]
        focusElement.focus()
    }, 0)

    // Start listening for tab key
    target.addEventListener('keydown', function(e) {
        trapTabKey(target, e)
    })
}

function trapTabKey(target, evt) {

    // if tab or shift-tab pressed
    if (evt.which == 9) {

        // get list of all focusable children elements in given target
        items = target.querySelectorAll(focusableElementsString)

        // get the number of focusable items
        numberOfFocusableItems = items.length
        
        // get currently focused item
        focusedItem = document.activeElement

        // get the index of the currently focused item
        focusedItemIndex = Array.prototype.indexOf.call(items, focusedItem)

        // back tab
        console.log(evt)
        if (evt.shiftKey) {
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedItemIndex == 0) {
                items[numberOfFocusableItems - 1].focus()
                evt.preventDefault()
            }

        // forward tab
        } else {
            console.log('forwards')
            // if focused on the last item and user preses tab, go to the first focusable item
            if (focusedItemIndex == numberOfFocusableItems - 1) {
                items[0].focus()
                evt.preventDefault()
            }
        }
    }
}