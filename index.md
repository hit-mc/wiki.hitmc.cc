---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HITMC Wiki"
  text: "A wiki site for hitmc"
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: 皮肤站
      link: https://hitmc.cc
    - theme: alt
      text: 关于我们
      link: /about

features:
  - title: 【皮肤站】外置登录
    details:
        <a href="https://hitmc.cc">https://hitmc.cc</a><br>
  - title: 【原版】1.21
    details:
        <div class="index-tags">
          <code class="index-tag">1.21</code>
          <code class="index-tag">carpet</code>
          <code class="index-tag">fabric</code>
        </div>
        # <a href="https://www.minecraft.net/zh-hans">Minecraft 官网</a><br>
  - title: 【MOD】海上机械师
    details:
        # <a href="https://www.minecraft.net/zh-hans">Minecraft 官网</a><br>
        <div class="index-tags">
          <code class="index-tag">海岛生存</code>
          <code class="index-tag">机械动力</code>
          <code class="index-tag">瓦尔基里</code>
        </div>
  - title: 【建筑】我的哈工大
    details:
        <a href="/servers/myhit/index">介绍</a><br>

---

<style>
  .index-tags {
      margin: 0;
      margin-bottom: 0.5em;
      font-size: 0;
  }
  .index-tag {
    background-color: white;
    padding: 4px 8px;
    margin-right: 4px;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    font-size: 12px!important;
  }
</style>