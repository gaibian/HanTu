"use strict";
var win = window;
win.resize = {};
var timer = null;
var rem = 12;
var doc = win.document;
var docEl = doc.documentElement;
/**
 * 刷新页面REM值
 */
function refreshRem() {
  var width = docEl.getBoundingClientRect().width;
  width = width > 768 ? 640 : width;
  rem = width / 7.5;
  docEl.style.fontSize = rem + 'px';
}
win.addEventListener('resize', function () {
  clearTimeout(timer);
  timer = setTimeout(refreshRem, 300);
}, false);
win.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    clearTimeout(timer);
    timer = setTimeout(refreshRem, 300);
  }
}, false);
refreshRem();