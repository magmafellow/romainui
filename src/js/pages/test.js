import { checkPath } from '/local/templates/otvet2026/js/utils/check-path.js'
const pagePaths = ['/test.html', '/test', '/test/']

console.log('[Script for test page /test.js] loaded')

window.addEventListener('DOMContentLoaded', function () {
    // Check if we on the right page now
    if (!checkPath(pagePaths)) {
        return
    }
    console.log('[Script for test page /test.js] run')
})
