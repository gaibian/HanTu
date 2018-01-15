require('../../../css/page/special_page/second_hand_house.less');

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

    const select = require('../../component/select');
    select('.select_box');
});