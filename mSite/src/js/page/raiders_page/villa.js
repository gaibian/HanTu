require('../../../css/page/raiders_page/villa.less');

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

    const mySwiper = new Swiper ('#swiper1', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

    })

    let li = $("#swiper2").find('.swiper-slide').length;
    let flag = false;
    if(li <= 1){
        flag = false;
    }else{
        flag = true;
    }
    let swiper1 = new Swiper('#swiper2',{
        speed:700,
        autoplayDisableOnInteraction : false,
        loop:flag,
        spaceBetween:20,
        centeredSlides : true,
        slidesPerView:1,
        loopedSlides:8,
        paginationClickable:true,
        onInit:function(swiper){
            //swiper.slides[1].className="swiper-slide swiper-slide-active";//第一次打开不要动画
        },
    });
});