module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated Time',
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about/' },
      // { text: 'github', link: 'https://github.com/suxuan0071'},
      {
        text: 'Repositories||Blog',
        ariaLabel: 'Repositories Menu',
        items: [
          { text: 'github', link: 'https://github.com/suxuan0071' },
          { text: 'gitee', link: 'https://gitee.com/zc0071' },
          { text: 'csdn', link: 'https://blog.csdn.net/qq_42546585?spm=1000.2115.3001.5343' }
        ]
      }
    ],
  },
  title: 'FleChAzo',
  description: '61',
  base:"/-FleChAzo6/",
}