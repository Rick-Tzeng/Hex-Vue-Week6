const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Hex-Vue-Week6/'
    : '/',
  transpileDependencies: true,
});
