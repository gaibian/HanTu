
const carousel = (function(){
    "use strict";
    var unique;
    function getInstance(){
        if( unique === undefined ){
            unique = new Construct();
        }
    }

    function Construct(){
        // ... 生成单例的构造函数的代码
    }


    return {
        getInstance : getInstance
    }
})();

carousel.getInstance();



const carousel1 = (function(){
    "use strict";
    const _queue = [];

    function carouselFun(dom){
        this.dom = dom;
        this.btn = this.dom.find('.prev_btn');
        this.init();
    }

    carouselFun.prototype.init = function(){
        this.bind();
    };

    carouselFun.prototype.bind = function(){
        var that = this;
        this.btn.on('click',function(){
            that.ishow();
        })
    };

    carouselFun.prototype.ishow = function(){

    };

    return (el)=>{
        let wrapper = typeof el === 'string' ? $(el) : el;
        wrapper.each(function(index){
            let $this = $(this);
            if($this.hasClass('init')) return false;
            _queue.push(new carouselFun($this));
            $this.addClass('init');
        });
    }
})();
module.exports = carousel1;

/*
* this 指针  =》 什么东西是会改变this指向

* 面向对象 prototype
* */





