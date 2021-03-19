module.exports = {
	title: 'EllsomBlog',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/logo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/images/logo.jpg',
    type:'blog',
    nav: [
	 {text: 'blog', link: '/blog/' },
      {text: 'LeetCode笔记', link: '/leetcode/'},
      {text: 'markdown', link: '/others/'},
      {text: 'github', link: 'https://github.com/Ellsom1945'},      
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ]
  }
}