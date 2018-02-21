require('../../../css/page/case/case.less');
const FastClick = require('fastclick');
$(()=>{
    "use strict";
    FastClick.attach(document.body);
    const lazy = require('../../component/lazy');
    let $lazy = document.getElementsByClassName('lazy');
    lazy.one($lazy,function(){
        "use strict";
        let srcValue = this.getAttribute('data-src');
        this.setAttribute('src',srcValue);
        this.className = this.className + ' la';
    });

    const tabContent = (function(){
        let _queue = [];
        class tabContentFun{
            constructor(dom){
                this.dom = dom;
                this.btn = this.dom.find('.tab_btn');
                this.contentBox = this.dom.find('.tab_content');
                this.maskBox = this.dom.find('.mask_box');
                this.newIndex = 0;
                this.init();
            }
            init(){
                this.btn.each((index)=>{
                    let $this = this.btn.eq(index);
                    if($this.hasClass('active')){
                        this.newIndex = index;
                        this.contentBox.siblings().hide().eq(this.newIndex).show();
                        this.maskBox.show();
                    }
                });
                this.bind();
            }
            bind(){
                this.btn.each((index)=>{
                    let $this = this.btn.eq(index);
                    $this.on('click',()=>{
                        this.btn.siblings().removeClass('active').eq(index).addClass('active');
                        this.contentBox.siblings().hide().eq(index).show();
                        this.maskBox.show();
                    })
                });
                this.maskBox.on('click',(e)=>{
                    this.btn.removeClass('active');
                    this.contentBox.hide();
                    this.maskBox.hide();
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
    tabContent('.tab_box');
});