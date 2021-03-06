require('../../../css/page/team/team_details.less')


$(()=>{
    "use strict";
    const lazy = require('../../component/lazy');
    let $lazy = document.getElementsByClassName('lazy');
    lazy.one($lazy, function() {
    	"use strict";
    	let srcValue = this.getAttribute('data-src');
    	this.setAttribute('src', srcValue);
    	this.className = this.className + ' la';
    });

    const scrollText = require('../../component/scroll_text');
    scrollText('.scroll_text');

    const select = require('../../component/select');
    select('.select_box');
});