<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  markdown: string
}>();
</script>

<template>
  <main class="policy-page">
    <header>
      <div class="eyebrow">{{ eyebrow }}</div>
      <h1>{{ title }}</h1>
    </header>
    <c-markdown :markdown="markdown" />
  </main>
</template>

<style scoped lang="less">
.policy-page {
  width: min(760px, calc(100% - 36px));
  margin: 0 auto;
  padding: 64px 0 24px;

  header {
    margin-bottom: 30px;
    padding-bottom: 24px;
    border-bottom: 1px solid #203036;
  }

  .eyebrow {
    color: #46f0b4;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 13px;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 10px 0 0;
    color: #eafff8;
    font-size: clamp(34px, 6vw, 54px);
    line-height: 1.05;
  }

  :deep(.markdown) {
    font-size: 16px;
    line-height: 1.75;
  }
}
</style>
