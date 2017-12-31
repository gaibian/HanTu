/*
* tab切换组件
* 一.需求
* 点击切换内容
* <div class="tab_box">
*     <div class="tab_btn"></div>
*     <div class="tab_content"></div>
* </div>
* */

var tabContent = (function(){
    var _queue = [];

    class tabContentFun{
        constructor(dom){
            this.dom = dom;
            this.btn = this.dom.find('.tab_btn');
            this.contentBox = this.dom.find('.tab_content');
            this.newIndex = 0;
            this.init();
        }
        init(){
            this.btn.each((index)=>{
                let $this = this.btn.eq(index);
                if($this.hasClass('active')){
                    this.newIndex = index;
                }
            });
            this.contentBox.siblings().hide().eq(this.newIndex).show();
            this.bind();
        }
        bind(){
            this.btn.each((index)=>{
                let $this = this.btn.eq(index);
                $this.on('click',()=>{
                    this.btn.siblings().removeClass('active').eq(index).addClass('active');
                    this.contentBox.siblings().hide().eq(index).show();
                })
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

module.exports = tabContent;