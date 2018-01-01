/*
* 轮播组件开发
* <div class="carousel">
*     <ul class="carousel_ul" data-autoplay="true">
*         <li></li>
*     </ul>
*     <button class="prev_btn"></button>
*     <button class="next_btn"></button>
*     <div class="indicator"></div>
* </div>
* */
const carousel = (()=>{
    "use strict";
    const _queue = [];
    class carouselFun{
        constructor(dom){
            this.dom = dom;
            this.ul = this.dom.find('.carousel_ul');
            this.li = this.ul.find('>li');
            this.indicator = this.dom.find('.indicator');
            this.prevBtn = this.dom.find('.prev_btn');
            this.nextBtn = this.dom.find('.next_btn');
            this.autoPlay = this.dom.attr('data-autoplay');
            this.liLength = this.li.length;
            this.liWidth = this.li.outerWidth();
            this.marginRight = parseInt(this.li.css('marginRight'));
            this.moveWidth = this.liWidth + this.marginRight;
            this.currentIndex = 1;  //默然当前的index下标
            this.setInter = 2000;
            this.speed = 500;
            this.timer = null;
            this.flagPlay = false;
            this.minNum = Number(this.dom.attr('data-num'));
            this.init();
        }
        init(){
            let ulWidth = (this.liWidth + this.marginRight) * this.liLength;
            this.ul.css({
                width:ulWidth
            });

            if(this.minNum <=1){ //不执行轮播
                this.prevBtn.hide();
                this.nextBtn.hide();
            }else{
                this.autoPlay === 'true' ? this.setinterFun() : this.flagPlay = false;
            }

            for(let i=0;i<this.li.length;i++){
                let span = $('<span></span>');
                this.indicator.append(span);
            }
            this.span = this.indicator.find('>span');
            this.span.eq(this.currentIndex-1).addClass('active');
            this.bind();
        }
        bind(){
            this.prevBtn.on('click',()=>{
                this.prevGo();
            });
            this.nextBtn.on('click',()=>{
                this.nextGo();
            });
            this.dom.on('mouseover',()=>{
                clearInterval(this.timer);
            });
            if(this.flagPlay){
                this.dom.on('mouseleave',()=>{
                    this.setinterFun();
                });
            }else{
                return false;
            }


        }
        prevGo(){
            this.currentIndex --;
            if(this.currentIndex < 1){
                this.currentIndex = this.liLength;
            }
            let items = this.ul.find('li');
            items.first().before(items.last());
            this.ul.css('left',-this.moveWidth);
            this.ul.animate({'left':0},this.speed);
        }
        nextGo(){
            this.currentIndex ++;
            if(this.currentIndex > this.liLength){
                this.currentIndex = 1;
            }
            let items = this.ul.find('li');
            this.ul.animate({'left':-this.moveWidth},this.speed,()=>{
                items.last().after(items.first());
                this.ul.css('left',0)
            });
            this.span.siblings().removeClass('active').eq(this.currentIndex-1).addClass('active');
        }
        setinterFun(){
            this.timer = setInterval(()=>{
                this.nextGo();
            },this.setInter);
        }
    }

    return (el)=>{
        let wrapper = typeof el === 'string' ? $(el) : el;
        wrapper.each((index)=>{
            let $this = wrapper.eq(index);
            if($this.hasClass('init')) return false;
            _queue.push(new carouselFun($this));
            $this.addClass('init');
        });
    }

})();

module.exports = carousel;