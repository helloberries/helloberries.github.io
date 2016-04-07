/** addEvent: 绑定事件，兼容不同浏览器 */
function addEvent (elem, type, func) {
    if (elem.addEventListener) {
        elem.addEventListener(type, func, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on'+type, func);
    } else {
        elem['on'+type] = func;
    }
}

