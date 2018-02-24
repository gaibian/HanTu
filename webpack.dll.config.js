
/*cdn服务器和本地虚拟服务器转换*/
let serverFlag = false;  //false 本地调试   true  打包上线
let site = 'm';
let siteStatic = site + 'Static';

//serverFlag ? siteStatic = './' + siteStatic : siteStatic = '/'+siteStatic;

let option = {
  flag:serverFlag,
  site:site + 'Site',  //打包配置启动根目录
  siteStatic:site + 'Static',  //静态服务器地址文件根目录
};
module.exports = option;