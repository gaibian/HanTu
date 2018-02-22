import BScroll from 'better-scroll';  //导入移动端滚动框架

const scrollTo = (function(){
    let _queue = [];
    class scrollFun{
        constructor(dom){
            this.dom = dom;
            this.ul = this.dom.children[0]; //获取到第一个子元素ul
            this.li = this.ul.querySelectorAll('li');
            this.liLength = this.li.length;
            this.opts = {
                startX:0,
                scrollX:true,
                scrollY:true,
                eventPassthrough:'vertical',
                momentum:true,  //根据速度 产生的惯性挂动
                click:true,
            };
            this.init();
        }
        init(){  //进行初始化操作
            if (!this.dom) {
                console.warn('can not resolve the wrapper dom');
            }
            if(typeof this.li != 'undefined' && this.li.length > 0){
              this.liWidth = Math.ceil(this.getStyle(this.li[0],'width').replace('px',''));
              this.liMarginRight = this.getStyle(this.li[0],'marginRight');
            }else{
              console.warn('can not resolve the wrapper dom');
            }
            this.scroller = this.dom.children[0];

            if (!this.ul) {
                console.warn('the wrapper need at least one child element to be scroller');
            }
            this.ul.style.width = ((parseInt(this.liWidth) + parseInt(this.liMarginRight)) * this.liLength) + 'px';
            setTimeout(()=>{
                this.scroll = new BScroll(this.dom,this.opts);
                this.bind();
            },200)
        }
        bind(){
            window.addEventListener('resize',()=>{
                this.rem();
                if(!this.scroll){
                    return;
                }
                this.liWidth = Math.ceil(this.getStyle(this.li[0],'width').replace('px',''));
                this.liMarginRight = this.getStyle(this.li[0],'marginRight');
                this.liLength = this.li.length;
                this.ul.style.width = ((parseInt(this.liWidth) + parseInt(this.liMarginRight)) * this.liLength) + 'px';
                console.log(this.liWidth);
                console.log(this.liMarginRight);
                console.log(this.liLength);
                this.scroll.refresh();
            });
        }
        rem(){
            var win = window;
            win.resize = {};
            var timer = null;
            var rem = 12;
            var doc = win.document;
            var docEl = doc.documentElement;
            /**
             * 刷新页面REM值
             */
            function refreshRem() {
                var width = docEl.getBoundingClientRect().width;
                width = width > 768 ? 640 : width;
                rem = width / 7.5;
                docEl.style.fontSize = rem + 'px';
            }
            win.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                    clearTimeout(timer);
                    timer = setTimeout(refreshRem, 300);
                }
            }, false);
            refreshRem();
        }

        getStyle(obj,attr){
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }
            else{
                return document.defaultView.getComputedStyle(obj,null)[attr];
            }
        }
    }
    return (el)=>{
        //判断传进来的el是dom对象还是字符串
        let wrapper = typeof el === 'string' ? document.querySelectorAll(el) : el;
        for(let i=0;i<wrapper.length;i++){
            let $this = wrapper[i];
            if($this.className.indexOf('init') === -1){
                _queue.push(new scrollFun($this));
                $this.className += ' init';
            }else{
                return false;
            }
        }
    }
})();

module.exports = scrollTo;
