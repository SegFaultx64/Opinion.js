var webpack = require('webpack')

var webpackConfig = require("./webpack.prod.config.js");

// run webpack
webpack(webpackConfig, function(err, stats) {
  console.log("[webpack:build]", stats.toString({
    colors: true
  }));
});
