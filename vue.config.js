'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
const name = defaultSettings.title || 'vue app' // page title
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
/**
 * You will need to set publicPath if you plan to deploy your site under a sub path,
 * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
 * then publicPath should be set to "/bar/".
 * In most cases please use '/' !!!
 * Detail: https://cli.vuejs.org/config/#publicpath
 */
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
