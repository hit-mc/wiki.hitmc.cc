<script setup lang="ts">
import type { TeekConfig } from "vitepress-theme-teek";
import Teek, { teekConfigContext } from "vitepress-theme-teek";
import { provide, ref, onMounted } from "vue";
import { useRibbon } from "./components/use-ribbon";
import ThemeConfig, { type ChangeType } from "./components/theme-config.vue";
import AmbientBlobs from "./components/AmbientBlobs.vue";

// 运行时响应式配置：切换即时生效（useTeekConfig 会合并 inject 的配置）
const teekConfig = ref<TeekConfig>({});
provide(teekConfigContext, teekConfig);

// 彩带背景（默认开启：客户端挂载后启动，避免 SSR 报错）
const { start: startRibbon, stop: stopRibbon } = useRibbon({ immediate: false });
onMounted(() => startRibbon());

const handleThemeConfigChange = (config: TeekConfig, type: ChangeType) => {
  switch (type) {
    case "postCoverImgMode":
      teekConfig.value.post = { ...teekConfig.value.post, ...config.post };
      break;
    case "pageStyle":
      teekConfig.value.pageStyle = config.pageStyle;
      teekConfig.value.themeEnhance = { ...teekConfig.value.themeEnhance, ...config.themeEnhance };
      break;
    case "loading":
      teekConfig.value.loading = config.loading;
      break;
    case "ribbon":
      if (config) startRibbon();
      else stopRibbon();
      break;
  }
};
</script>

<template>
  <AmbientBlobs />
  <Teek.Layout>
    <template #teek-theme-enhance-bottom>
      <ThemeConfig @change="handleThemeConfigChange" />
    </template>
    <template #nav-screen-content-after>
      <ThemeConfig @change="handleThemeConfigChange" />
    </template>
  </Teek.Layout>
</template>
