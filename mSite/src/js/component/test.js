let li = $("#swiper2").find('li').length;
let flag = false;
if(li <= 1){
  flag = false;
}else{
  flag = true;
}
let swiper1 = new Swiper('#swiper2',{
  speed:1000,
  autoplayDisableOnInteraction : false,
  loop:flag,
  centeredSlides : true,
  slidesPerView:1.5,
  paginationClickable:true,
  onInit:function(swiper){
    //swiper.slides[1].className="swiper-slide swiper-slide-active";//第一次打开不要动画
  },
});