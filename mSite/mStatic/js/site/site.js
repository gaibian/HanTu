/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/mStatic/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ({

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*require('../../../css/page/site/site.less');
const FastClick = require('fastclick');
$(()=>{
    "use strict";
    FastClick.attach(document.body);
    const lazy = require('../../component/lazy');
    let $lazy = document.getElementsByClassName('lazy');
    lazy.one($lazy,function(){
        "use strict";
        let srcValue = this.getAttribute('data-src');
        this.setAttribute('src',srcValue);
        this.className = this.className + ' la';
    });
    const tabContent = (function(){
        let _queue = [];
        class tabContentFun{
            constructor(dom){
                this.dom = dom;
                this.btn = this.dom.find('.tab_btn');
                this.contentBox = this.dom.find('.tab_content');
                this.maskBox = this.dom.find('.mask_box');
                this.newIndex = 0;
                this.init();
            }
            init(){
                this.btn.each((index)=>{
                    let $this = this.btn.eq(index);
                    if($this.hasClass('active')){
                        this.newIndex = index;
                        this.contentBox.siblings().hide().eq(this.newIndex).show();
                        this.maskBox.show();
                    }
                });
                this.bind();
            }
            bind(){
                this.btn.each((index)=>{
                    let $this = this.btn.eq(index);
                    $this.on('click',()=>{
                        this.btn.siblings().removeClass('active').eq(index).addClass('active');
                        this.contentBox.siblings().hide().eq(index).show();
                        this.maskBox.show();
                    })
                });
                this.maskBox.on('click',(e)=>{
                    this.btn.removeClass('active');
                    this.contentBox.hide();
                    this.maskBox.hide();
                })
            }
        }
        return (el)=>{
            "use strict";
            let wrapper = typeof el === 'string' ? $(el) : el;
            wrapper.each((index)=>{
                let $this = wrapper.eq(index);
                if($this.hasClass('init')) return false;
                _queue.push(new tabContentFun($this));
                $this.addClass('init');
            });
        }
    })();
    tabContent('.tab_box');
});*/


/***/ })

/******/ });