import { defineConfig } from 'vitepress';
import sidebarVan121 from './sidebars/van121.mts';
import sidebarBlog from './sidebars/blog.mts';

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
            { text: '海上机械师', link: '/servers/haishangjixieshi/' },
            { text: '我的哈工大', link: '/servers/myhit/' },
            { text: '历史周目', link: '/servers/old/' },
            { text: '博客&关于', link: '/blog/' },
            // { text: '关于', link: '/about' },
        ],

        sidebar: {
            "/servers/van121/": sidebarVan121,
            '/blog/': sidebarBlog,
            "/servers/old/": [],
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
