
/*cdn服务器和本地虚拟服务器转换*/
let serverFlag = false;  //true 打包启动cdn地址  false启动本地虚拟地址
let site = 'pc';
let csCdn = '';


module.exports = {
    site:site + 'Site',  //打包配置启动根目录
    siteStatic:site + 'Static',  //静态服务器地址文件根目录
    scCdn:'http://cdn.msphcn.com',  //正式服务器cdn地址
    csCdn:csCdn,  //测试服务器cdn地址
};