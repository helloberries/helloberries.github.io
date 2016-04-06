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

var timer = null;
function startMove(elem, iTarget) {
    clearInterval(timer);
    timer = setInterval(function(){
        var speed = 0;
        if (elem.offsetLeft > iTarget) {
            speed = -10;
        } else {
            speed = 10;
        }
        if (elem.offsetLeft === iTarget) {
            clearInterval(timer);
        } else {
            elem.style.left = elem.offsetLeft + speed + 'px';
        }
    },30);
}
///** makeLine: 生成悬停链接时的运动的下划线*/
//function makeLine(a){
//    var w = a.offsetWidth;
//    var line = document.createElement('div');
//
//    line.style.width = w + 'px';
//    line.style.bottom = 0 + 'px';
//    line.style.left = -w + 'px';
//
//    line.className = 'line';
//    a.parentNode.appendChild(line);
//}
//
//var addresses = document.querySelectorAll('.contact .address a');
//for (var i=0; i<addresses.length; i++) {
//    var w = addresses[i].offsetWidth;
//    var line = document.createElement('div');
//
//    line.style.width = w + 'px';
//    line.style.bottom = 0 + 'px';
//    line.style.left = -w + 'px';
//
//    line.className = 'line';
//    addresses[i].parentNode.appendChild(line);
//
//    addEvent(addresses[i], 'mouseover', function(){
//        (function () {
//            line.style.display = 'block';
//            startMove(addresses[i], 0);
//        })();
//    });
//}