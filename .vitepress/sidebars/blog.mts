import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/blog/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '页面',
        items: [
            { text: '关于我们', link: root`/` },
            { text: '周目考古', link: root`/servers` },
        ]
    },
    {
        text: '文章',
        items: [
            { text: '文档编辑指南（草稿）', link: root`/maintain-docs` }, // 放在第一项。其他按照日期降序
        ],
    },
];

export default sidebars;
