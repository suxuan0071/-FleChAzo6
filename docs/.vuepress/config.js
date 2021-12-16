module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated Time',
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about/' },
      // { text: 'github', link: 'https://github.com/suxuan0071'},
      {
        text: 'Repositories',
        ariaLabel: 'Repositories Menu',
        items: [
          { text: 'github', link: 'https://github.com/suxuan0071' },
          { text: 'gitee', link: 'https://gitee.com/zc0071' },
          // { text: 'csdn', link: 'https://blog.csdn.net/qq_42546585?spm=1000.2115.3001.5343' }
        ]
      },
      {
        text: 'Blog',
        ariaLabel: 'Blog Menu',
        items: [
          { text: 'csdn', link: 'https://blog.csdn.net/qq_42546585?spm=1000.2115.3001.5343' }
        ]
      }
    ],
  },
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  title: 'FleChAzo',
  description: '61',
  base: "/-FleChAzo6/",
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      owner: 'suxuan0071',
      repo: '-FleChAzo6',
      clientId: '1550245b11af2012a48c',
      clientSecret: 'b1d2ee6fbbfad422a7e2f339ef2708c913f00faa',
    }
  },

}