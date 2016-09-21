var devConfig = require('./webpack.config.js');

var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

devConfig.entry = [
  "../src/index.js",
]

devConfig.output.libraryTarget = 'commonjs2';

devConfig.target = 'node';

devConfig.externals = nodeModules;

module.exports = devConfig
