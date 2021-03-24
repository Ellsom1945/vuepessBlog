module.exports = {
    title: 'EllsomBlog',
    author: 'ellsom',
    description: 'SURVIVE！',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/images/logo.jpg'}],
        ['link', {rel: 'manifest', href: '/images/logo.jpg'}],
        ['link', {rel: 'apple-touch-icon', href: '/images/logo.jpg'}],
        ['meta', {'http-quiv': 'pragma', cotent: 'no-cache'}],
        ['meta', {'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
        ['meta', {'http-quiv': 'expires', cotent: '0'}]
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块是否显示行号
    },
    theme: 'reco',
    themeConfig: {
        authorAvatar: '/images/logo.jpg',
        type: 'blog',
        noFoundPageByTencent: false,
        blogConfig: {
            socialLinks: [
                {icon: 'reco-github', link: 'https://github.com/Ellsom1945'},
                {icon: 'reco-csdn', link: 'https://blog.csdn.net/qq_42776944'}
            ]
        },
        nav: [
            {
                text: 'blog', items: [
                    {text: '技术', link: '/categories/tech/'},
                    {text: '文学', link: '/categories/literature/'},
                    {text: '哲学', link: '/categories/philo/'},
                    {text: '杂谈', link: '/categories/whatever/'}
                ],icon:'reco-document'
            },
            {text: 'leetcode笔记', link: '/categories/leetcode/'},
            {text: 'markdown', link: '/blog/mdref.md'},
            {text: 'github', link: 'https://github.com/Ellsom1945',icon:'reco-github'},
            {text: 'timeline', link: '/timeline/', icon: 'reco-date'},
        ]
}
}