
const tabImg = (function(){
	"use strict";
	const _queue = [];

	function tabImgFun(dom){
		this.dom = dom;
		this.li  = this.dom.find('>li');
		this.img = this.li.find('.do_img');
		this.init();
		this.bind();
	}
	tabImgFun.prototype.init = function(){
		this.img.eq(0).show();
	};
	tabImgFun.prototype.bind = function(){
		var that = this;
	    this.li.on('mouseover',function(){
	    	that.img.hide();
	        $(this).find('.do_img').show();
	    })
	};

	return (el)=>{
		let wrapper = typeof el === 'string' ? $(el) : el;
		wrapper.each(function(index){
			let $this = $(this);
			if($this.hasClass('init')) return false;
			_queue.push(new tabImgFun($this));
			$this.addClass('init');
		})
	}

})();
module.exports = tabImg;
