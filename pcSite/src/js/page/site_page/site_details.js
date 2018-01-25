require('../../../css/page/site_page/site_details.less');

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

<<<<<<< HEAD
=======
    const scrollText = require('../../component/scroll_text');
    scrollText('.scroll_text');

>>>>>>> 6768bd0a31254c81784349d1ed637a3bcfbc70f0
    let pageBtmFixed = $('.page_btm_fixed');
    let btmCloseBtn = pageBtmFixed.find('.close_btn');
    btmCloseBtn.on('click',function(){
        pageBtmFixed.hide();
    })

});