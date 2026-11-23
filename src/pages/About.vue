<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({ title: 'About - WowToolbar' });

const aboutContent = `# About WowToolbar

WowToolbar is a privacy-friendly collection of fast, focused online utilities for development, data conversion, text processing, networking, and everyday tasks.

## Private by default

Tools run in your browser whenever possible. Content entered into a tool is not intentionally stored by WowToolbar.

## Simple and reliable

The interface is designed to stay quick, distraction-free, and useful across desktop and mobile devices.`;
</script>

<template>
  <div class="about-page">
    <c-markdown :markdown="aboutContent" />
    <RouterLink class="support-cta" to="/support">
      <span>Support WowToolbar</span>
      <small>Help fund maintenance and new utilities →</small>
    </RouterLink>
  </div>
</template>

<style scoped lang="less">
.about-page {
  width: min(600px, calc(100% - 32px));
  margin: 50px auto 80px;
}

.support-cta {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 36px;
  padding: 20px 22px;
  border: 1px solid #294139;
  background: linear-gradient(135deg, rgb(70 240 180 / 8%), rgb(15 24 29 / 90%));
  color: #46f0b4;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  text-decoration: none;

  &:hover {
    border-color: #46f0b4;
  }

  small {
    color: #789097;
  }
}
</style>
