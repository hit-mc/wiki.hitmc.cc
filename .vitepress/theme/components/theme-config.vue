<script setup lang="ts">
import type { Post, TeekConfig } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { ref } from "vue";
import { TkSegmented, TkSwitch, TkMessage, useClipboard } from "vitepress-theme-teek";

export type ChangeType =
  | "postCoverImgMode"
  | "pageStyle"
  | "loading"
  | "ribbon";

const namespace = "theme-setting";
const teekConfig = ref<TeekConfig>({});
const { theme } = useData();
const emit = defineEmits<{ change: [config: TeekConfig, type: ChangeType] }>();

const change = (type: ChangeType, value?: any) => {
  emit("change", value ?? teekConfig.value, type);
};

// 首页文章封面图模式
const postCoverImgMode = {
  modelValue: theme.value.post?.coverImgMode ?? "full",
  title: "首页文章封面图模式",
  options: [
    { value: "small", label: "缩略图" },
    { value: "full", label: "填充图" },
  ],
  change(value: Post["coverImgMode"]) {
    teekConfig.value.post = { ...teekConfig.value.post };
    teekConfig.value.post.coverImgMode = value;
    change("postCoverImgMode");
  },
};

// 文章页背景风格
const pageStyle = {
  modelValue: theme.value.pageStyle ?? "default",
  title: "文章页背景风格",
  options: [
    { value: "default", label: "默认" },
    { value: "card", label: "书本" },
    { value: "card-nav", label: "书本翻阅" },
    { value: "segment", label: "书页" },
    { value: "segment-nav", label: "书页翻阅" },
  ],
  change(value: TeekConfig["pageStyle"]) {
    teekConfig.value.pageStyle = value;
    teekConfig.value.themeEnhance = { ...teekConfig.value.themeEnhance, layoutSwitch: { defaultMode: "original" } };
    change("pageStyle");
  },
};

// 路由加载动画
const loading = {
  modelValue: Boolean(theme.value.loading ?? false),
  title: "路由加载动画",
  options: [
    { value: true, label: "ON" },
    { value: false, label: "OFF" },
  ],
  change(value: TeekConfig["loading"]) {
    teekConfig.value.loading = value;
    change("loading");
  },
};

// 彩带背景
const ribbon = {
  modelValue: true,
  title: "彩带背景",
  options: [
    { value: true, label: "ON" },
    { value: false, label: "OFF" },
  ],
  change(value: boolean) {
    change("ribbon", value);
  },
};

const { copy, copied } = useClipboard();
const handleCopy = async () => {
  await copy(JSON.stringify({ ...teekConfig.value }, null, 2));
  copied.value ? TkMessage.success({ message: "复制成功！", plain: true }) : TkMessage.error({ message: "复制失败！", plain: true });
};
</script>

<template>
  <div class="theme-setting">
    <div class="divider">
      <div class="divider-text is-center"><span>主题配置</span><button @click="handleCopy">COPY</button></div>
    </div>

    <div class="wrapper mw-70">
      <span class="tk-theme-enhance__title">{{ pageStyle.title }}</span>
      <TkSegmented v-bind="pageStyle" @change="pageStyle.change" />
    </div>
    <div class="wrapper">
      <span class="tk-theme-enhance__title">{{ postCoverImgMode.title }}</span>
      <TkSegmented v-bind="postCoverImgMode" @change="postCoverImgMode.change" />
    </div>
    <div class="wrapper flx-justify-between">
      <span>{{ loading.title }}</span>
      <TkSwitch :model-value="loading.modelValue" @change="loading.change" />
    </div>
    <div class="wrapper flx-justify-between">
      <span>{{ ribbon.title }}</span>
      <TkSwitch :model-value="ribbon.modelValue" @change="ribbon.change" />
    </div>
  </div>
</template>

<style lang="scss">
.theme-setting {
  .divider {
    position: relative; height: 1px; width: 100%; margin: 24px 0;
    border-top: 1px var(--vp-c-border) solid;
    &-text {
      position: absolute; background-color: var(--tk-popover-bg-color); padding: 0 15px;
      font-weight: 500; color: var(--vp-c-text-1); font-size: 14px;
      &.is-center { left: 50%; transform: translate(-50%) translateY(-50%); }
    }
  }
  button {
    font-size: 14px; font-weight: 500; outline: none; transition: 0.1s;
    color: var(--vp-c-brand-3); margin-left: 10px;
    &:hover { color: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); }
  }
  .wrapper {
    margin-bottom: 10px;
    > span { font-size: 14px; }
    .tk-segmented { margin-top: 8px; }
  }
  .mw-70 .tk-segmented-item { min-width: 70px; }
}
</style>
