require('../../../css/page/raiders_page/raiders_details.less');

$(()=>{
  /*页面轮播*/
  class carousel{  //这是父类
    constructor(dom){
      this.dom = $(dom);
      this.bigCarousel = this.dom.find('.big_carousel_box');
      this.smallCarousel = this.dom.find('.small_carousel_box');
      this.currentIndex = 0;  //当前li的下标
      this.num = 0;  //点击当前的下标
      this.newIndex = 1;
      this.speed = 500;  //滑动一张页面的速度
    }
    isDom(dom){  //用于判断dom是否存在
      if(typeof dom !== 'undefined' && dom.length > 0){
        return true;
      }else{
        return false;
      }
    }
    ulWidthFun(li){  //用于计算ul的宽度
      return (li.outerWidth(true) + parseInt(li.css('marginRight'))) * li.length;
    }
    prevGo(ul){
      let items = ul.find('li');  //执行上一页滑动的时候 先重置获取到li元素  相当于这地方需要更新li
      items.first().before(items.last());  //li元素的第一个的前面插入最后一个li  插入过来的时候最后一个li元素会自动删除掉
      let moveWidth = items.outerWidth(true);  //需要滑动一个li宽度的距离
      ul.css('left',-moveWidth);   //整个ul元素往左移动一个li宽度的距离之后再执行animate动画滑动 以防止出现白底看不到li元素
      ul.animate({'left':0},this.speed);  //滑动animate让ul元素的left 归0
    }
    nextGo(ul){
      let items = ul.find('li');
      let moveWidth = items.outerWidth(true);
      ul.animate({'left':-moveWidth},this.speed,()=>{
        items.last().after(items.first());
        ul.css('left',0)
      });
    }
  }

  class bigCarousel extends carousel{  //这是大轮播子类  继承父类carousel的属性和方法
    constructor(dom){
      super(dom);
      this.Ul = this.bigCarousel.find('.carousel_ul');  //大轮播的Ul元素
      this.li = this.Ul.find('>li');   //大轮播的li元素
      this.prevBtn = this.bigCarousel.find('.prev_btn');  //大轮播的上一页按钮
      this.nextBtn = this.bigCarousel.find('.next_btn');  //大轮播的下一页按钮
      this.init();  //执行初始化方法
    }
    init(){  //轮播初始化操作的方法
      //先判断轮播下面的li是不是存在，为防止后端没有渲染数据 而引起的报错行为
      if(super.isDom(this.li)){
        this.ulWidth = super.ulWidthFun(this.li);  //计算ul的宽度
        this.Ul.css({'width':this.ulWidth});   //给ul的宽度赋值
        //给每个li绑定初始化时候的下标data-index值
        this.li.each((index)=>{
          let $this = this.li.eq(index);
          $this.attr('data-index',index);
        })
      }else{
        //找不到li元素 没有渲染数据 前端做出提示
        console.warn('No DOM exists please render the data');
      }
      this.bind();
    }
    bind(){  //轮播事件操作的方法
      this.prevBtn.on('click',()=>{   //点击大轮播上一页的事件
        super.prevGo(this.Ul);  //从父类carousel上调用执行上一页的方法
      });
      this.nextBtn.on('click',()=>{   //点击大轮播下一页的事件
        super.nextGo(this.Ul);  //从父类carousel上调用执行下一页的方法
      })
    }
  }

  class smallCarousel extends  carousel{  //这是小轮播子类  继承父类carousel的属性和方法
    constructor(dom){
      super(dom);
      this.Ul = this.smallCarousel.find('.carousel_ul');
      this.li = this.Ul.find('>li');
      this.prevBtn = this.smallCarousel.find('.prev_btn');
      this.nextBtn = this.smallCarousel.find('.next_btn');
      this.init();
    }
    init(){  //轮播初始化操作的方法
      //先判断轮播下面的li是不是存在，为防止后端没有渲染数据 而引起的报错行为
      if(super.isDom(this.li)){
        this.ulWidth = super.ulWidthFun(this.li);  //计算ul的宽度
        this.Ul.css({'width':this.ulWidth});   //给ul的宽度赋值
        //给每个li绑定初始化时候的下标data-index值
        this.li.each((index)=>{
          let $this = this.li.eq(index);
          $this.attr('data-index',index);
        })
      }else{  //找不到li元素 没有渲染数据 前端做出提示
        console.warn('No DOM exists please render the data');
      }
      this.bind();
    }
    bind(){  //轮播事件操作的方法
      this.prevBtn.on('click',()=>{  //点击上一页的事件
        super.prevGo(this.Ul);  //从父类上调用执行上一页的方法
      });
      this.nextBtn.on('click',()=>{   //点击下一页的事件
        super.nextGo(this.Ul);  //从父类上调用执行下一页的方法
      });
      this.li.each((index,value)=>{  //点击小轮播的li元素  大轮播的图进行滑动切换
        let $this = this.li.eq(index);   //获取到当前的li元素  等价于 $(this)
        $this.on('click',()=>{  //点击小轮播li元素的事件
          let dataIndex = $this.attr('data-index');  //当前点击的li元素的data-index下标值
          this.go(dataIndex);  //大轮播图进行滑动切换的方法  go是点击小轮播才会执行的方法 所以不写到父类carousel上
        })
      })
    }
    go(num){  //大轮播图切换的方法
      this.num = num;  //当前这张图的data-index点击的下标
      let Ul = this.bigCarousel.find('.carousel_ul');  //获取到大轮播图的ul元素
      let Li = Ul.find('li');  //获取到大轮播图的li元素
      this.currentIndex = Li.eq(0).attr('data-index');  //获取到大轮播图的当前显示那张的data-index下标值
      this.newIndex = this.num - this.currentIndex;  //当前点击的下标和上一次点击的下标之间的差值  可以知道需要滚动多少张
      if(this.newIndex > 0){  //说明是向左滚动
          Ul.animate({'left':-(Li.outerWidth()) * this.newIndex},this.speed,()=>{
            let i = this.newIndex;
            while(i>0){  //循坏一次 最后一个li元素后面就插入一次第一个li元素  直到循坏结束
              i--;
              let items = Ul.find('li');
              items.last().after(items.first());
            }
            Ul.css('left',0);
          })
      }
      if(this.newIndex < 0){  //说明是向右滚动
        let i = Math.abs(this.newIndex);
        Ul.css('left',-(Li.outerWidth() * Math.abs(this.newIndex)));
        while(i>0){  //循坏一次 第一个li元素前面就插入一次最后一个li元素  直到循坏结束
          i--;
          let items = Ul.find('li');
          items.first().before(items.last());
        }
        Ul.animate({'left':0},this.speed);
      }
    }
  }
  new bigCarousel('.left_container');  //实例化大轮播图
  new smallCarousel('.left_container');  //实力小轮播图
});