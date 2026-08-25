# HITMC Wiki 编辑指南

**以下内容请在了解 GitHub 使用方法之后阅读**

## 文档编辑指南

### 新开服务器

目前服务器按类别放到了 `/servers` 内。

#### 1. 创建新服务器文件夹

1. 选择一个用来代指该服务器的名称（如 `van`），新建目录 `/servers/van`，然后创建一个 `index.md` 并随便写点内容，如简单的介绍

#### 2. 创建目录信息并更新

2. 去 `.vitepress/sidebars` 内，参考其他文件，复制新建 `van.mts` 并修改目录，之后记得在 `.vitepress\config.mts` 导入你写的东西，具体可参考已有内容

#### 3. 创建其他页面（参考下一节）

### 新增页面文档

#### 1. 创建文档

在你前面新创建的目录下，新建一个 markdown 文件（`xx.md`），写你想写的东西

我个人建议文章标题使用**一级标题**（`#`），有且只有一个；后续的正文部分从**二级标题**（`##`）开始写

> [**Avoid using multiple `<h1>` elements on one page**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page)
>
> While using multiple `<h1>` elements on one page is allowed by the HTML standard (as long as they are not nested), this is not considered a best practice. A page should generally have a single `<h1>` element that describes the content of the page (similar to the document's `<title>` element).

#### 2. 更新目录

在 `.vitepress/sidebars` 内，找到你前面创建的 `xxx.mts` 目录文件。

（可以全局搜索文件路径的前缀（如 `/servers/van`）或 `getRootFunc` 函数）

结构类似于如下，参考新增即可

```ts
const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '介绍', // 一级目录，之间有分割线，不可点击
        items: [
            { text: '介绍', link: root`/` }, // 二级目录（一个对应一个页面）
            { text: '商店', link: root`/store` },
        ]
    },
    {
        text: '工程',
        items: [
        ]
    },
]
```

## 网站构建指南

在本地改完代码之后，总该 debug 一下

> cd wiki.hitmc.cc
> 
> pnpm install
> 
> pnpm run docs:dev
> 
> 然后在浏览器输入所给出的地址

## 主题配置

站点使用了 **vitepress-theme-teek** 主题，主题相关配置（博主、页脚、社交、主题色、首页/文章页样式等）统一放在 **`.vitepress/teek-config.ts`**（`.vitepress/config.mts` 里 `extends: teekConfig` 引入）。想改主题外观、色板、文章页样式等，改这个文件即可；导航与侧边栏仍按上面的方式在 `config.mts` / `.vitepress/sidebars` 里配置。