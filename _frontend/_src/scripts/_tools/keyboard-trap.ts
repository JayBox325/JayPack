/*
    Keep a keyboard user where we want them to be
*/

let focusableItems
let numberOfFocusableItems
let focusedItemIndex
let focusedItem
let items

export default function setFocus(target) {

    // Focus on first element
    setTimeout(function() {
        getKeyboardFocusableElements(target)[0].focus()
    }, 0)

    // Start listening for tab key
    target.addEventListener('keydown', function(e) {
        trapTabKey(target, e)
    })
}

// Get all focusable elements
function getKeyboardFocusableElements(target) {
    return Array.prototype.slice.call(target.querySelectorAll('a[href], area[href], input:not([disabled]), summary, select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"], *[contenteditable]')).filter(isVisible)
}

function isVisible(el) {
  return el.offsetWidth > 0
      || el.offsetHeight > 0
      || el.getClientRects().length > 0;
}

function trapTabKey(target, evt) {

    // if tab or shift-tab pressed
    if (evt.which == 9) {

        // get list of all focusable children elements in given target
        items = getKeyboardFocusableElements(target)

        console.log(items)

        // get the number of focusable items
        numberOfFocusableItems = items.length
        
        // get currently focused item
        focusedItem = document.activeElement

        // get the index of the currently focused item
        focusedItemIndex = Array.prototype.indexOf.call(items, focusedItem)

        // If going backwards
        if (evt.shiftKey) {
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedItemIndex == 0) {
                items[numberOfFocusableItems - 1].focus()
                evt.preventDefault()
            }

        // Going forwards
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