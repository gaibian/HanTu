require('../../../css/page/raiders_page/personal.less');

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

    const mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView:1,
        spaceBetween:20,
        loopedSlides:8,
    })
});