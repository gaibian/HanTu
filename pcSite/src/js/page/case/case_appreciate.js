require('../../../css/page/case/case_appreciate.less');

$(()=>{
    "use strict";
    const lazy = require('../../component/lazy');
    let $lazy = document.getElementsByClassName('lazy');
    lazy.one($lazy,function(){
        "use strict";
        let srcValue = this.getAttribute('data-src');
        this.setAttribute('src',srcValue);
        this.className = this.className + ' la';
    });

    const navList = require('../../component/list_drop_down');
    navList('.js_nav_list');

    const scrollText = require('../../component/scroll_text');
    scrollText('.scroll_text');

    let pageBtmFixed = $('.page_btm_fixed');
    let btmCloseBtn = pageBtmFixed.find('.close_btn');
    btmCloseBtn.on('click',function(){
        pageBtmFixed.hide();
    })

});