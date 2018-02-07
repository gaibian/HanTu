const carousel3d = (function(){
	"use strict";
	const _queue = [];

	function carousel3dFun(dom){
		this.dom      = dom;
		this.li       = this.dom.find('.flip_item');
		this.classArr = ['flip_you1','flip_you2','flip_you3','flip_zuo3','flip_zuo2','flip_zuo1'];
		this.text     = this.li.find('.flip_text_box');
		this.current  = 0;
		this.bind();
		this.show();
	};

	// carousel3dFun.prototype.init = function(){

	// };

	carousel3dFun.prototype.bind = function(){
		let that = this;
		this.li.on('click',function(){
			let i = that.li.index($(this));
			let k = that.li.length - 1;
			let chaNum = k - i;
			let jianIndex = 0;
			let addIndex = 0;
			that.li.each(function(index){
			    if(i === index){
			        that.li.eq(index).attr('class','flip_item flip_current');
			    }
			    if(index < i){
			        that.li.eq(index).attr('class','flip_item '+ that.classArr[chaNum]);
			        chaNum ++;
			    }
			    if(index > i){
			        that.li.eq(index).attr('class','flip_item '+ that.classArr[addIndex]);
			        addIndex ++;
			    }
			})
		})
	};

	carousel3dFun.prototype.show = function(){
		let that = this;
		this.li.on('mouseover',function(){
		    let index = that.li.index($(this));
		    if($(this).hasClass('flip_current')){
		        $(this).find('.flip_text_box').show();
		    }
		});
		this.li.on('mouseleave',function(){
		    let index = that.li.index($(this));
		    if($(this).hasClass('flip_current')){
		        $(this).find('.flip_text_box').hide();
		    }
		})
	}



	return (el)=>{
		let wrapper = typeof el === 'string' ? $(el) : el;
		wrapper.each(function(index){
			let $this = $(this);
			if($this.hasClass('init')) return false;
			_queue.push(new carousel3dFun($this));
			$this.addClass('init');
		})
	}

})()
module.exports = carousel3d;






