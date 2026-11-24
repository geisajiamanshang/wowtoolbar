<script setup lang="ts">
import { IconHeart, IconInfoCircle } from '@tabler/icons-vue';
</script>

<template>
  <c-tooltip tooltip="Support WowToolbar" position="bottom">
    <c-button circle variant="text" to="/support" aria-label="Support WowToolbar">
      <n-icon size="23" :component="IconHeart" />
    </c-button>
  </c-tooltip>
  <c-tooltip :tooltip="$t('home.nav.about')" position="bottom">
    <c-button circle variant="text" to="/about" :aria-label="$t('home.nav.aboutLabel')">
      <n-icon size="25" :component="IconInfoCircle" />
    </c-button>
  </c-tooltip>
</template>

<style lang="less" scoped>
.n-button {
  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
