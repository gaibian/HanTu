const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const glob = require('glob');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const configAddress = require('./webpack.dll.config.js');
const getEntry1 = configAddress.site + '/src/js/page/**/*.js';
const getEntry2 = configAddress.site + '/src/js/page/';
const debug = !configAddress.flag;
let entries = getEntry(getEntry1,getEntry2);
const publicPath = '/' + configAddress.siteStatic + '/';
let chunks = Object.keys(entries);

const config = {
  entry: entries,
  output: {
    path: path.join(__dirname, configAddress.site + '/' + configAddress.siteStatic),
    publicPath:publicPath,  //注意
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[chunkhash:8].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        })
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }, {
        test: /\.html$/,
        loader: 'html-loader?attrs=img:src img:data-src'
      }, {
        // 文件加载器，处理文件静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
      },
      {
        test: /\.art$/,
        use: ['art-template-loader']
      }
    ]
  },

  plugins: [
    //拷贝第三方不需要打包的文件
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, configAddress.site + '/src/bin/'),
        to: path.join(__dirname, configAddress.site + '/' + configAddress.siteStatic + '/bin')
      },
    ], {
      ignore: [],
      copyUnmodified: true,
      debug: "debug"
    }),
    new webpack.ProvidePlugin({ // 加载jq
      $: 'jquery',
      jQuery: 'jquery',
    }),
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors', 
      chunks: chunks, 
      minChunks: chunks.length // 提取所有entry共同依赖的模块
    }),*/

    //压缩js代码
    debug ? function () {
    } : new UglifyJsPlugin({ // 压缩代码
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require'] // 排除关键字
    }),

    new ExtractTextPlugin('css/[name].css', {
      allChunks: true
    }), // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    }),
    //合成雪碧图
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, configAddress.site + '/src/img/icons'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, configAddress.site + '/' + configAddress.siteStatic + '/sprites/sprite.png'),
        css: path.resolve(__dirname, configAddress.site + '/' + configAddress.siteStatic + '/sprites/sprite.css')
      },
      apiOptions: {
        cssImageRef: '../sprite/sprite.png'
      },
      spritesmithOptions: {
        algorithm: 'top-down'
      }
    })
  ],
};

//编写所有的html模板
const page1 = configAddress.site + '/src/dist/**/*.html';
const page2 = configAddress.site + '/src/dist/';
let pages = Object.keys(getEntry(page1,page2));


pages.forEach(function(pathname){
	let conf = {
		filename: './view/' + pathname + '.html',
		template: configAddress.site + '/src/dist/' + pathname + '.html',
		inject:false
	};
	if(pathname in config.entry){
		conf.favicon = path.resolve(__dirname, configAddress.site + '/src/img/user_ico.ico');
		conf.inject = 'body';
		conf.chunks = ['vendors',pathname];
		conf.hash = true;
    /*conf.minify = {
      removeComments:true, //移除HTML中的注释
      collapseWhitespace:true //
    }*/
	}

	config.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = config;

//编写所有的js入口模板循环
function getEntry (globPath, pathDir) {
  let files = glob.sync(globPath);
  let entries = {}, entry, dirname, basename, pathname, extname;
  for (let i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    pathname = path.normalize(path.join(dirname, basename));
    pathDir = path.normalize(pathDir);
    if (pathname.startsWith(pathDir)) {
      pathname = pathname.substring(pathDir.length)
    }
    entries[pathname] = ['./' + entry]

  }
  return entries;
}









