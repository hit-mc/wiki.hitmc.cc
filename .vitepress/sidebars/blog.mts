import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/blog/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '介绍',
        items: [
            { text: '介绍', link: root`/` },
            { text: '文档维护', link: root`/maintain-docs` },
        ]
    }
];

export default sidebars;
