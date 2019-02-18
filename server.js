var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var chalk = require('chalk'); // 控制台输出别样风格
var ip = require('ip');
var clientConfig = require('./configuration.js');

const config = require('./webpack.config.js');

var app = express();

const compiler = webpack(config);

// 编译中间件
app.use(webpackDevMiddleware(compiler,{
  publicPath: config.output.publicPath,
  hot:true,
  quiet: false,
  lazy: false,
  logLevel: 'silent',
  stats: "errors-only" // 保证控制台不输入任何编译信息
}))

// 更新中间件
app.use(webpackHotMiddleware(compiler))

// 静态资源目录
app.use('/static/imgs', express.static('statics/images'))

app.listen(clientConfig.port, clientConfig.host, () => {
  console.log(`启动服务成功 ! ${chalk.green('✓')}`);

  var divider = chalk.blueBright('-------------------------');
  var Localhost = chalk.greenBright(`http://${clientConfig.host}:${clientConfig.port}`);
  var Lan = chalk.yellowBright(`http://${ip.address()}:${clientConfig.port}`);
  console.log(
    `${divider}
    Localhost: ${Localhost}
          Lan: ${Lan}
${divider}`
  );
});