import { defineConfig } from 'vitepress';
import sidebarVan from './sidebars/van.mts';
import sidebarBlog from './sidebars/blog.mts';
import sidebarPermod from './sidebars/mod_permanent.mts';
import sidebarMod from './sidebars/mod_rotation.mts';
import sidebarKit from './sidebars/Kit_servers.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "HITMC Wiki",
    description: "A wiki site for HITMC",
    themeConfig: {
        outline: {
            level: [2, 4],
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '原版生存', link: '/servers/van/' },
            { text: '周目 mod 服', link: '/servers/mod_rotation/' },
            { text: '常驻 mod 服', link: '/servers/mod_permanent/' },
            { text: '插件服', link: '/servers/Kit_servers/' },
            { text: '我的哈工大', link: '/servers/HIT-IN-MC/' },
            //{ text: '历史周目', link: '/servers/old/' },
            { text: '博客', link: '/blog/' },
            //{ text: '关于', link: '/blog/' },
        ],

        sidebar: {
            "/servers/van/": sidebarVan,
            '/blog/': sidebarBlog,
            "/servers/mod_permanent/": sidebarPermod,
            "/servers/mod_rotation/": sidebarMod,
            "/servers/Kit_servers/": sidebarKit,
            //"/servers/old/": [],
            // "/about": [
            //     {
            //         items: [
            //             { text: '关于', link: '/about/index' },
            //             { text: '历史周目', link: '/about/servers' }
            //         ]
            //     }
            // ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/hit-mc/wiki.hitmc.cc' }
        ]
    }
})
