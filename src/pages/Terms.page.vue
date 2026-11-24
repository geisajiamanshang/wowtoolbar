<script setup lang="ts">
import { useHead } from '@vueuse/head';
import PolicyPage from '@/components/PolicyPage.vue';

useHead({
  title: 'Terms of Service - WowToolbar',
  meta: [{ name: 'description', content: 'Terms governing access to and use of WowToolbar online utilities.' }],
  link: [{ rel: 'canonical', href: 'https://wowtoolbar.com/terms' }],
});

const content = `Last updated: November 24, 2026

## Acceptance of these terms

By accessing or using WowToolbar, you agree to these terms. If you do not agree, do not use the service.

## What WowToolbar provides

WowToolbar provides browser-based utilities for development, conversion, text processing, networking, and general productivity. Features may be improved, replaced, limited, or discontinued without notice.

## Permitted use

You may use the tools for lawful personal or commercial purposes. You must not use the service to violate applicable law, infringe the rights of others, distribute malicious content, interfere with the service, or attempt unauthorized access to systems or data.

## Your data and responsibility

You remain responsible for the information you enter and the results you use. Review generated output before relying on it. Do not enter confidential information unless you understand how the selected tool processes it.

## No professional advice

Results are provided for general informational and technical convenience. WowToolbar does not provide legal, financial, medical, security-audit, or other professional advice.

## Availability and warranties

The service is provided "as is" and "as available" without warranties of uninterrupted operation, accuracy, fitness for a particular purpose, or freedom from errors. To the extent permitted by law, WowToolbar is not liable for indirect, incidental, special, or consequential losses arising from use of the service.

## Third-party services

The site may link to payment providers, sponsors, affiliates, or other third parties. Their products, terms, privacy practices, and availability are their responsibility. Affiliate relationships are identified where applicable.

## Changes

These terms may be updated when the service or legal requirements change. The revision date at the top indicates the latest version.

## Contact

Questions about these terms can be sent through the [contact page](/contact).`;
</script>

<template>
  <PolicyPage eyebrow="TERMS" title="Terms of service" :markdown="content" />
</template>
