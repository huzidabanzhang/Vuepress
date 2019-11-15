module.exports = {
    title: '章胖胖的笔记',
    description: 'Hello',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/huzidabanzhang' }
        ],
        sidebar: [
            {
                title: '笔记',
                collapsable: false,
                children: [
                    '/notes/2019-11-13'
                ]
            }
        ]
    }
}