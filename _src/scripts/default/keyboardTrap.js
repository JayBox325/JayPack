import $ from 'jquery'

// Keep a keyboard user where we want them to be

export default function setFocus($target) {
    setTimeout(function() {
        const $focusElement = $target.find('a,input,button').eq(0).filter(':visible:first')
        $focusElement.focus()
    }, 0)

    $target.keydown(function(e) {
        trapTabKey($(this), e)
    })
}


function trapTabKey(obj, evt) {

    // Trapped tabbing
    let focusedElementBeforeModal
    var focusableElementsString = "a[href], area[href], input:not([disabled]), summary, select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"

    // if tab or shift-tab pressed
    if (evt.which == 9) {

        // get list of all children elements in given object
        var o = obj.find('*')

        // get list of focusable items
        var focusableItems
        focusableItems = o.filter(focusableElementsString).filter(':visible')

        // get currently focused item
        var focusedItem
        focusedItem = jQuery(':focus')

        // get the number of focusable items
        var numberOfFocusableItems
        numberOfFocusableItems = focusableItems.length

        // get the index of the currently focused item
        var focusedItemIndex
        focusedItemIndex = focusableItems.index(focusedItem)

        if (evt.shiftKey) {
            //back tab
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedItemIndex == 0) {
                focusableItems.get(numberOfFocusableItems - 1).focus()
                evt.preventDefault()
            }

        } else {
            //forward tab
            // if focused on the last item and user preses tab, go to the first focusable item
            if (focusedItemIndex == numberOfFocusableItems - 1) {
                focusableItems.get(0).focus()
                evt.preventDefault()
            }
        }
    }

}