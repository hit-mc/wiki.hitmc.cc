---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HITMC Wiki"
  text: "A wiki site for HITMC"
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: 皮肤站
      link: https://hitmc.cc
    - theme: alt
      text: 关于我们
      link: /blog

features:
  - title: 【皮肤站】外置登录
    link: https://hitmc.cc
    details:
        <a href="https://hitmc.cc">https://hitmc.cc</a><br>
  - title: 【原版】1.21.11
    link: /servers/van/
    details:
        <span class="index-tags">
          <span class="index-tag">1.21.11</span>
          <span class="index-tag">Carpet</span>
          <span class="index-tag">Fabric</span>
          <span class="index-tag">生电</span>
        </span>
  - title: 【MOD】周目 mod 服
    link: /servers/mod_rotation/
    details:
        <span class="index-tags">
          <span class="index-tag">周目轮换</span>
          <span class="index-tag">喜欢你来</span>
        </span>
  - title: 【MOD】常驻 mod 服
    link: /servers/mod_permanent/
    details:
        <span class="index-tags">
          <span class="index-tag">1.21.1</span>
          <span class="index-tag">机械动力</span>
          <span class="index-tag">农夫乐事</span>
        </span>
  - title: 【Kit】插件服
    link: /servers/Kit_servers/
    details:
        <span class="index-tags">
          <span class="index-tag">Velocity</span>
          <span class="index-tag">玩法多样</span>
          <span class="index-tag">小游戏派对</span>
        </span>
  - title: 【建筑】我的哈工大
    link: /servers/HIT-IN-MC/
    details:
        <a href="/servers/HIT-IN-MC/index">介绍</a><br>

---

<style>
  .index-tags {
      margin: 0;
      margin-bottom: 0.5em;
      font-size: 0;
  }
  .index-tag {
    /* background-color: white; */
    padding: 4px 8px;
    margin-right: 4px;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    font-size: 12px;
    line-height: 12px;
    /* width: fit-content; */
    display: inline-block;
  }
</style>
