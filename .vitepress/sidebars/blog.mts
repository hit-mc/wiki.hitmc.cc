import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/blog/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '页面',
        items: [
            { text: '关于我们', link: root`/` },
            { text: '周目考古', link: root`/servers` },
            { text: '文档编辑指南（草稿）', link: root`/maintain-docs` },
        ]
    },
    {
        text: '玩家',
        items: [
            { text: 'Ledger 操作指南', link: root`/player-ledger` },
        ],
    },
    {
        text: 'OP 与运维',
        items: [
            { text: 'Ledger 操作指南', link: root`/op-ledger` },
            { text: 'LuckPerms 操作指南', link: root`/op-ledger` },
        ],
    },
];

export default sidebars;
