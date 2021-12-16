module.exports={
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
    autoCreateIssue: true
  },
  '@vuepress/back-to-top':{}
}