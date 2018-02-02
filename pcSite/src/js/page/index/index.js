require('../../../css/page/index/index.less');

$(function(){
    const lazy = require('../../component/lazy');
    let $lazy = document.getElementsByClassName('lazy');
    lazy.one($lazy,function(){
        "use strict";
        let srcValue = this.getAttribute('data-src');
        this.setAttribute('src',srcValue);
        this.className = this.className + ' la';
    });

    const carousel = require('../../component/carousel');
    carousel('.carousel');

    const tabContent = require('../../component/tab_content');
    tabContent('.tab_box');

    const select = require('../../component/select');
    select('.select_box');

    const scrollText = require('../../component/scroll_text');
    scrollText('.scroll_text');

})