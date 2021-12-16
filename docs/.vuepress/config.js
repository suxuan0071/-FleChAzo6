const headConfig = require('./config/head.js')
const navConfig = require('./config/navConfig.js')
const pluginsConfig = require('./config/pluginsConfig.js')
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated Time',
    logo: '/assets/img/hero.png',
    nav: navConfig
  },
  head:headConfig,
  title: 'FleChAzo',
  description: '61',
  base: "/-FleChAzo6/",
  plugins: pluginsConfig

}