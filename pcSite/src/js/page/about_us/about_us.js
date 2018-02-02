require('../../../css/page/about_us/about_us.less');

$(()=>{
    "use strict";
    const lazy = require('../../component/lazy');
    let $lazy = document.getElementsByClassName('lazy');
    lazy.one($lazy, function() {
    	"use strict";
    	let srcValue = this.getAttribute('data-src');
    	this.setAttribute('src', srcValue);
    	this.className = this.className + ' la';
    });

    const tabContent = require('../../component/tab_content');
    tabContent('.tab_box');

    // let pageBottomCalc = $('.page_bottom_calculation');
    // let calcCloseBtn = pageBottomCalc.find('.bottom_close');
    //
    // calcCloseBtn.on('click',()=>{
    //     pageBottomCalc.hide();
    // })

    let pageBtmFixed = $('.page_btm_fixed');
    let btmCloseBtn = pageBtmFixed.find('.close_btn');
    btmCloseBtn.on('click',function(){
        pageBtmFixed.hide();
    })
    
});


