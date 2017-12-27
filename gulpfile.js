
let gulp = require('gulp');
let gutil = require('gulp-util');
let fileinclude = require('gulp-file-include');
let webpack = require('webpack');
let webpackConfig = require('./webpack.config.js');

const configAddress = require('./webpack.dll.config.js');



gulp.task('fileinclude',function(done){
	gulp.src([configAddress.site + '/src/view/**/*.html'])
	.pipe(fileinclude({
		prefix:'@@',
		basepath:'@file'
	}))
	.pipe(gulp.dest(configAddress.site + "/src/dist"))
	.on('end',done)
});

let myDevConfig = Object.create(webpackConfig);
let devCompiler = webpack(myDevConfig);

gulp.task('build-js',['fileinclude'],function(callback){
devCompiler.run(function(err,stats){
		if(err) throw new gutil.PluginError("webpack:build-js",err);
		gutil.log("[webpack:build-js]",stats.toString({
			colors:true
			}));
		callback();
	})
});

gulp.task('default',['build-js']);