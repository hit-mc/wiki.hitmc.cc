import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/servers/Kit_servers/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '介绍',
        items: [
            { text: '服务器介绍', link: root`/` },
            { text: '子服相关', link: root`/servers` },
            { text: '网络相关', link: root`/links` },
        ]
    },
]

export default sidebars;
