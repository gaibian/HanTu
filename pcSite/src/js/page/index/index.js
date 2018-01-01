require('../../../css/page/index/index.less');

$(function(){
    const carousel = require('../../component/carousel');
    carousel('.carousel');

    const tabContent = require('../../component/tab_content');
    tabContent('.tab_box');
})