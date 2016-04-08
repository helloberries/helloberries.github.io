window.onload = function () {
    var viewportW = window.innerWidth || document.documentElement.clientWeight,
        prelinks = document.querySelectorAll('.pre-links'),
        skilltitles = document.querySelectorAll('.skill-title');
    if (viewportW <= 768) {
        skilltitles[2].textContent = 'JS';
        skilltitles[3].textContent = '工具';
    } else {
        skilltitles[2].textContent = 'JavaScript';
        skilltitles[3].textContent = '开发工具';
    }
};

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


