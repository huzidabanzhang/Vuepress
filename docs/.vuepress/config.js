module.exports = {
    title: '章胖胖的笔记',
    description: 'Hello',
    head: [
        ['link', { rel: 'icon', href: '/icon.ico' }]
    ],
    themeConfig: {
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        // repo: 'https://github.com/huzidabanzhang/huzidabanzhang.github.io',
        // 自定义项目仓库链接文字
        // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
        // repoLabel: '贡献代码！',
        // 以下为可选的 "Edit this page" 链接选项
        // 如果你的文档和项目位于不同仓库：
        docsRepo: 'https://github.com/huzidabanzhang/Vuepress', 
        // 如果你的文档不在仓库的根目录下：
        docsDir: 'docs',
        // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
        docsBranch: 'other',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮我看看有啥写的不对的',

        lastUpdated: '最后更新时间',
        serviceWorker: {
            updatePopup: {
                message: '有新的内容出现了！！！',
                buttonText: '更新更新'
            } 
            // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        },
        nav: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/huzidabanzhang' }
        ],
        sidebar: [
            {
                title: '笔记',
                collapsable: false,
                children: [ 
                    '/notes/2019-11-13',
                    '/notes/2019-11-15',
                    '/notes/2019-11-19',
                    '/notes/2019-11-21',
                    '/notes/2019-12-05',
                    '/notes/2019-12-06',
                    '/notes/2019-12-12',
                    '/notes/2019-12-23'
                ]
            }
        ]
    }
}