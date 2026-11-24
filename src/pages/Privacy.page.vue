<script setup lang="ts">
import { useHead } from '@vueuse/head';
import PolicyPage from '@/components/PolicyPage.vue';

useHead({
  title: 'Privacy Policy - WowToolbar',
  meta: [{ name: 'description', content: 'How WowToolbar handles tool input, technical data, analytics, and third-party services.' }],
  link: [{ rel: 'canonical', href: 'https://wowtoolbar.com/privacy' }],
});

const content = `Last updated: November 24, 2026

## Overview

WowToolbar is designed to minimize data collection. Most tools process information locally in your browser. Unless a tool clearly says otherwise, text, files, keys, and other values entered into a tool are not intentionally transmitted to or stored by WowToolbar.

## Information processed on your device

The site may store interface preferences, language, theme, and favorite tools in browser storage. This information remains on your device unless you clear it through your browser.

## Technical and usage data

Hosting and security providers may process limited technical information such as IP address, browser type, requested URL, timestamp, and error information to deliver the site, prevent abuse, and diagnose reliability problems.

When privacy-friendly analytics are enabled, WowToolbar may collect aggregated page-view and interaction statistics. These analytics are used to understand which tools are useful and do not intentionally include the content entered into tools.

## External links and payments

Support, sponsorship, and affiliate links may open third-party services such as payment providers. Those services process information under their own privacy policies. WowToolbar does not receive your payment card or bank account details from those providers.

## Advertising

If advertising is introduced, this policy and the cookie controls will be updated before personalized advertising is enabled. Where required, visitors will be asked for consent through an approved consent-management platform.

## Data retention and security

WowToolbar does not intentionally retain tool input. Infrastructure logs, when created, are retained only as reasonably necessary for security, troubleshooting, and legal obligations. No internet service can guarantee absolute security, so avoid entering information you do not need to process.

## Your choices

You can clear local preferences through your browser, block optional analytics, decline non-essential cookies where offered, and avoid external payment or affiliate links.

## Contact

Questions about this policy can be sent through the [contact page](/contact).`;
</script>

<template>
  <PolicyPage eyebrow="PRIVACY" title="Privacy policy" :markdown="content" />
</template>
