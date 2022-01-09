function hasCommonParentOnSameLevel(node1, node2) {
    let p1 = node1.parentElement
    let p2 = node2.parentElement

    while (p1 && p2) {

        if (p1 === p2) {
            return true
        }

        p1 = p1.parentElement
        p2 = p2.parentElement
    }

    return false
}

const observer = new MutationObserver(function() {
    // eslint-disable-next-line quotes
    const settingsButtons = document.querySelectorAll('[aria-label="Settings"]')
    // eslint-disable-next-line quotes
    const unmuteButtons = document.querySelectorAll('[aria-label="Unmute"]')

    if (settingsButtons && settingsButtons.length > 0 && unmuteButtons && unmuteButtons.length > 0) {
        unmuteButtons.forEach(b => {
            if (hasCommonParentOnSameLevel(settingsButtons[0], b)) {
                b.click()
            }
        })
    }
})

observer.observe(document, {subtree: true, childList: true})
