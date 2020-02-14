const merge = require('webpack-merge');
const baseConfig = require('./base');

module.exports = merge(baseConfig, {
  globals: {
    __site__: 'FPP',
    __isPrime__: true
  }
});
