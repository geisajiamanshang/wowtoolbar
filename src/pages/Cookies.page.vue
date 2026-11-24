<script setup lang="ts">
import { useHead } from '@vueuse/head';
import PolicyPage from '@/components/PolicyPage.vue';

useHead({
  title: 'Cookie Policy - WowToolbar',
  meta: [{ name: 'description', content: 'Learn how WowToolbar uses browser storage, analytics, and optional advertising technologies.' }],
  link: [{ rel: 'canonical', href: 'https://wowtoolbar.com/cookies' }],
});

const content = `Last updated: November 24, 2026

## Current use of cookies

WowToolbar does not require advertising cookies to operate. The site may use browser storage for essential preferences such as language, theme, menu state, and favorite tools.

## Essential storage

Essential storage keeps the interface working as expected and remembers choices made on your device. Disabling browser storage may reset preferences or reduce functionality.

## Analytics

WowToolbar may use privacy-friendly, aggregate analytics to measure page views and tool usage. When configured without cookies, these measurements do not create advertising profiles and do not include values entered into tools.

## Third-party services

External payment, sponsorship, or affiliate websites may set their own cookies after you follow a link. Their cookie policies apply on their websites.

## Future advertising

Before non-essential advertising or personalization technologies are enabled, WowToolbar will provide appropriate notice and consent controls. Visitors in regions that require consent will be shown a certified consent-management message before eligible personalized advertising is requested.

## Managing storage

You can remove stored preferences, block cookies, or limit tracking through your browser settings. Blocking all storage may affect favorite tools and other convenience features.

For questions, use the [contact page](/contact).`;
</script>

<template>
  <PolicyPage eyebrow="COOKIES" title="Cookie policy" :markdown="content" />
</template>
