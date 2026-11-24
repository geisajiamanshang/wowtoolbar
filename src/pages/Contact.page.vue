<script setup lang="ts">
import { useHead } from '@vueuse/head';
import PolicyPage from '@/components/PolicyPage.vue';

useHead({
  title: 'Contact - WowToolbar',
  meta: [{ name: 'description', content: 'Contact WowToolbar about tool feedback, privacy, sponsorship, or business inquiries.' }],
  link: [{ rel: 'canonical', href: 'https://wowtoolbar.com/contact' }],
});

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'support@wowtoolbar.com';
const content = `## Get in touch

For tool feedback, bug reports, privacy questions, sponsorship, or business inquiries, email [${contactEmail}](mailto:${contactEmail}).

Please include the tool URL, what you expected to happen, and the browser or device you used. Do not send passwords, private keys, payment-card details, identity documents, or confidential tool input.

## Response expectations

WowToolbar is independently maintained. Messages are reviewed as capacity allows, and a response time is not guaranteed. Security and privacy reports are prioritized.

For funding options, visit [Support WowToolbar](/support).`;
</script>

<template>
  <PolicyPage eyebrow="CONTACT" title="Contact WowToolbar" :markdown="content" />
</template>
