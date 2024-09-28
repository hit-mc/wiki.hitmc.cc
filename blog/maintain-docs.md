# 文档编辑指南（草稿）

## 新开服务器周目

目前服务器按照周目放到了 `/servers` 内。

### 1. 创建周目文件夹

1. 选择一个用来代指该周目服务器的名称（如 `van121`），新建目录 `/servers/van121`，然后创建一个 `index.md` 并随便写点内容）

### 2. 创建目录信息并更新

2. 去 `.vitepress/sidebars` 内，参考其他文件，复制新建 `van121.mts` 并修改目录。

### 3. 创建其他页面（参考下一节）

## 新增页面文档

### 1. 创建文档

在你需要创建的分类目录下，新建一个 markdown 文件（`xx.md`），随便写点东西

我个人建议文章标题使用**一级标题**（`#`），有且只有一个；后续的正文部分从**二级标题**（`##`）开始写

> [**Avoid using multiple `<h1>` elements on one page**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page)
>
> While using multiple `<h1>` elements on one page is allowed by the HTML standard (as long as they are not nested), this is not considered a best practice. A page should generally have a single `<h1>` element that describes the content of the page (similar to the document's `<title>` element).

### 2. 更新目录

在 `.vitepress/sidebars` 内，找到对应的目录文件。（可以全局搜索文件路径的前缀（如 `/servers/van121`）或 `getRootFunc` 函数）

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
