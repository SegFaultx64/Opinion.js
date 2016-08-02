var devConfig = require('./webpack.config.js');

devConfig.entry = [
  "../src/index.js",
]

devConfig.output.libraryTarget = 'commonjs2';

module.exports = devConfig
