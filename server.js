/*var fs = require('fs');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var serverPort = 54999,
    devPort = 8080;

var exec = require('child_process').exec;
var cmdStr = 'PORT=' + serverPort + ' supervisor ./bin/www';
exec(cmdStr);


for (var i in config.entry) {
    config.entry[i].unshift('webpack-dev-server/client?http://localhost:' + devPort, "webpack/hot/dev-server")
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var proxy = {
    "*": "http://localhost:" + serverPort
};
*/
var fs = require('fs');
var webpack = require("webpack");
var path = require('path');
var config = require("./webpack.config.js");
var WebpackDevServer = require('webpack-dev-server');
var exec = require('child_process').exec;
//const site = 'msphSite';
for(var i in config.entry){
	config.entry[i].unshift("webpack-dev-server/client?http://localhost:9090/","webpack/hot/dev-server")
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
var compiler = webpack(config);
const configAddress = require('./webpack.dll.config.js');

//const publicPath ='/static/';
//const siteStatic = 'msphStatic';

var server = new WebpackDevServer(compiler,{
	contentBase:path.join(__dirname, configAddress.site + '/' + configAddress.siteStatic),
	publicPath:'/'+configAddress.siteStatic+'/',
	host:'localhost',
	inline:true,
	hot:true,
	compress:true
});

server.listen(9090,function(err){
	if(err){
		console.log(err)
	}

});

fs.watch( configAddress.site + '/src/view/',function(){  //监控到模板的变化 所有模块全部打包 存在性能上的不足
	exec('npm run build',function(err,stdout,stderr){
		if(err){

		}else{

		}
	})
});