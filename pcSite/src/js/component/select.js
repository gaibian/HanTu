

const select = (()=>{
    const _queue = [];
    class selectFun{
        constructor(dom){
            this.dom = dom;
            this.clickDom = this.dom.find('.val');
            this.menuPopup = this.dom.find('.select_menu_box');
            this.init();
        }
        init(){
            this.bind();
        }
        bind(){
            this.clickDom.on('click',()=>{
                if(this.dom.hasClass('active')){
                    this.menuPopup.hide();
                    this.dom.removeClass('active');
                }else{
                    this.menuPopup.show();
                    this.dom.addClass('active');
                }
            })
        }
    }
    return (el)=>{
        let wrapper = typeof el === 'string' ? $(el) : el;
        wrapper.each((index)=>{
            let $this = wrapper.eq(index);
            if($this.hasClass('init')) return false;
            _queue.push(new selectFun($this));
            $this.addClass('init');
        });
    }
})();

module.exports = select;