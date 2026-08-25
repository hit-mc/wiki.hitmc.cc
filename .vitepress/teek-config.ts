import { defineTeekConfig } from 'vitepress-theme-teek/config'

export const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: false,          // 首页=文档模式（VitePress 文档首页）
  vpHome: true,
  anchorScroll: true,
  loading: 'Thinking......',            // 路由加载文字
  viewTransition: { enabled: true, mode: 'out-in', duration: 1000 },  // 明暗/主题切换动画 1 秒
  windowTransition: { post: true, card: true, archives: true, feature: true },
  themeEnhance: {
    enabled: true,
    position: 'top',
    layoutSwitch: { defaultMode: 'bothWidthAdjustable' },
    themeColor: {
      defaultColorName: 'vp-primary',
      append: [
        {
          label: '扩展主题色板',
          options: [
            { value: 'violet', color: '#7166f0' },
            { value: 'coral-pink', color: '#ff6b6b' },
            { value: 'sky-blue', color: '#00bbf9' },
            { value: 'tech-blue', color: '#0056b3' },
            { value: 'mint', color: '#3eb489' },
            { value: 'neon-purple', color: '#bc13fe' },
            { value: 'sunset-orange', color: '#ff7f50' },
          ],
        },
      ],
    },
  },

  // —— 首页相关 ——
  wallpaper: { enabled: true, hideBanner: false },   // 首页壁纸模式（开启后可在面板切换 文档/网格/纯色/小图/大图/全屏）
  post: { postStyle: 'card', coverImgMode: 'full' }, // 首页文章布局=卡片；封面=填充图
  homeCardListPosition: 'right',                      // 首页卡片栏位置=右侧（可 left / false 隐藏）
  themeSize: 'default',                               // 首页尺寸：small/default/large/wide
  banner: {
    name: 'HITMC Wiki',
    bgStyle: 'pure',
    pureBgColor: '#1a1a2e',
    descStyle: 'types',        // 首页描述切换模式：show / types(打印机) / switch
    description: '哈尔滨工业大学 Minecraft 服务器 · 文档 / 攻略 / 博客',
  },

  // —— 文章页 ——
  pageStyle: 'segment',         // 文章页样式：default / card / segment / card-nav / segment-nav
  articleBanner: { enabled: true },
  articleAnalyze: {},          // 字数/时间等信息栏
  articleUpdate: { enabled: false },   // 关闭文章页的「最近更新」
  toComment: false,                    // 关闭「前往评论」按钮
  codeBlock: { copiedDone: '已复制' },

  author: { name: 'HITMC', link: 'https://github.com/hit-mc' },
  blogger: {
    name: 'HITMC Wiki',
    slogan: '哈尔滨工业大学 Minecraft 服务器 · 文档 / 攻略 / 博客',
  },
  footerInfo: {
    theme: { name: 'Theme By Teek' },
    copyright: { createYear: 2024, suffix: 'HITMC' },
  },
  social: [
    { icon: 'icon-github', name: 'GitHub', link: 'https://github.com/hit-mc/wiki.hitmc.cc' },
  ],
})
