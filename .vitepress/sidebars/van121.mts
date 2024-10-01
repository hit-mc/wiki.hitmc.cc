import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/servers/van121/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '介绍',
        items: [
            { text: '服务器介绍', link: root`/` },
            { text: '村民交易所', link: root`/store` },
            { text: '服务器端 mod', link: root`/server-mods` },
            { text: 'carpet 模组选项', link: root`/server-mods-carpet` },
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
