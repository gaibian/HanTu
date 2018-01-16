
const scrollText = (()=>{
  const _queue = [];
  class scrollFun{
    constructor(dom){
      this.dom = dom;
      this.ul = this.dom.find('ul');
      this.li = this.ul.find('li');
      this.scrollHeight = this.li.height();
      this.timer = null;
      this.init();
    }
    init(){
      this.bind();
    }
    bind(){
      this.timer = setInterval(()=>{
        this.ul.animate({
          top:-this.li.height() + 'px'
        },300,"linear",()=>{
          let i = this.ul.find('li');
          i.last().after(i.first());
          this.ul.css("top",0);
        })
      },2000)
    }
  }

  return (el)=>{
    let wrapper = typeof el === 'string' ? $(el) : el;
    wrapper.each((index)=>{
      let $this = wrapper.eq(index);
      if($this.hasClass('init')) return false;
      _queue.push(new scrollFun($this));
      $this.addClass('init');
    });
  }
})();

module.exports = scrollText;