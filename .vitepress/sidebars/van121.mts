import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/servers/van121/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '介绍',
        items: [
            { text: '介绍', link: root`/` },
            { text: '商店', link: root`/store` },
        ]
    },
    {
        text: '工程', // 实用性 > 美观性
        items: [
        ]
    },
    {
        text: '奇观', // 美观性 > 实用性
        items: [
        ]
    },
]

export default sidebars;
