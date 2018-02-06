require('../../../css/page/raiders_page/complete.less');

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

    const carousel = require('../../component/carousel');
    carousel('.carousel');

    let pageBtmFixed = $('.page_btm_fixed');
    let btmCloseBtn = pageBtmFixed.find('.close_btn');
    btmCloseBtn.on('click',function(){
        pageBtmFixed.hide();
    });

    const carousel3d = {
        init:function(dom){
            this.dom = $(dom);
            this.li = this.dom.find('.flip_item');
            this.classArr = ['flip_you1','flip_you2','flip_you3','flip_zuo3','flip_zuo2','flip_zuo1'];
            let that = this;
            this.current = 0;
            // this.li.each(function(){
            //    let $this = $(this);
            //    that.classArr.push($this.attr('class').substring(10));
            // });
            console.log(this.classArr);
            this.bind();
        },
        bind:function(){
            let that = this;
            this.li.on('click',function(){
                let i = that.li.index($(this));
                let k = that.li.length - 1;
                let chaNum = k - i;
                let jianIndex = 0;
                let addIndex = 0;
                that.li.each(function(index){
                    if(i === index){
                        that.li.eq(index).attr('class','flip_item flip_current');
                    }
                    if(index < i){
                        that.li.eq(index).attr('class','flip_item '+ that.classArr[chaNum]);
                        chaNum ++;
                    }
                    if(index > i){
                        that.li.eq(index).attr('class','flip_item '+ that.classArr[addIndex]);
                        addIndex ++;
                    }
                })
            });

            this.li.on('mouseover',function(){
                let index = that.li.index($(this));
                if($(this).hasClass('flip_current')){
                    $(this).find('.flip_text_box').show();
                }
            });
            this.li.on('mouseleave',function(){
                let index = that.li.index($(this));
                if($(this).hasClass('flip_current')){
                    $(this).find('.flip_text_box').hide();
                }
            })

        }
    };

    carousel3d.init('.flip_items');

});