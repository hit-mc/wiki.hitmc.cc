<script setup lang="ts">
// 背景朦胧色块：缓慢出现 -> 随机漂移 -> 缩小淡出，循环
const blobs = [
  { left: '8%',  top: '18%', size: '42vmax', delay: '0s',  dur: '30s',  color: 'var(--vp-c-brand-1)' },
  { left: '68%', top: '55%', size: '36vmax', delay: '6s',  dur: '34s',  color: 'var(--vp-c-brand-2)' },
  { left: '35%', top: '70%', size: '32vmax', delay: '12s', dur: '38s',  color: 'var(--vp-c-brand-3)' },
]
</script>

<template>
  <div class="hm-blobs" aria-hidden="true">
    <span
      v-for="(b, i) in blobs"
      :key="i"
      class="hm-blob"
      :style="{ left: b.left, top: b.top, '--size': b.size, '--bd': b.delay, '--dur': b.dur, '--color': b.color }"
    />
  </div>
</template>

<style scoped>
.hm-blobs {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}
.hm-blob {
  position: absolute;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  /* 径向渐变淡出 + 大模糊 = 朦胧、非纯色、与背景过渡柔和 */
  background: radial-gradient(circle, var(--color) 0%, transparent 68%);
  filter: blur(70px);
  opacity: 0;
  animation: hm-blob-life var(--dur) ease-in-out infinite;
  animation-delay: var(--bd);
}
@keyframes hm-blob-life {
  0%   { opacity: 0;    transform: translate(0, 0) scale(0.35); }
  12%  { opacity: .5;   transform: translate(2vw, -3vh) scale(1); }
  38%  { opacity: .45;  transform: translate(-6vw, 5vh) scale(1.15); }
  62%  { opacity: .4;   transform: translate(5vw, 2vh) scale(0.9); }
  82%  { opacity: .25;  transform: translate(-3vw, -2vh) scale(0.6); }
  100% { opacity: 0;    transform: translate(0, 0) scale(0.25); }
}
</style>
