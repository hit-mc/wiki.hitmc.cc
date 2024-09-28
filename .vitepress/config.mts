import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "HITMC Wiki",
    description: "A wiki site for hitmc",
    themeConfig: {
        outline: {
            level: [2, 4],
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '原版生存', link: '/servers/van121/' },
            { text: '海上机械师', link: '/servers/haishangjiexieshi/' },
            { text: '我的哈工大', link: '/servers/myhit/' },
            { text: '关于', link: '/about' },
        ],

        sidebar: {
            "/servers/van121/": [
                {
                    text: '介绍',
                    items: [
                        { text: '介绍', link: '/servers/van121/index' },
                        { text: '商店', link: '/servers/van121/store' },
                    ]
                },
                {
                    text: '工程', // 实用性 > 美观性
                    items: [
                        // { text: '介绍', link: '/markdown-examples' },
                    ]
                },
                {
                    text: '奇观', // 美观性 > 实用性
                    items: [
                        // { text: '介绍', link: '/markdown-examples' },
                    ]
                },
            ],
            "/servers/old/": [
                {
                    text: 'Examples',
                    items: [
                        { text: 'Markdown Examples', link: '/markdown-examples' },
                        { text: 'Runtime API Examples', link: '/api-examples' }
                    ]
                }
            ],
            "/about": [
                {
                    items: [
                        { text: '关于', link: '/about/index' },
                        { text: '历史周目', link: '/about/servers' }
                    ]
                }
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
