<script setup lang="ts">
import { IconArrowUpRight, IconBuildingStore, IconHeart, IconSparkles } from '@tabler/icons-vue';
import { useHead } from '@vueuse/head';
import { affiliatePartners, enterpriseSponsorUrl, supportTiers } from '@/config/support';

useHead({
  title: 'Support WowToolbar',
  meta: [
    {
      name: 'description',
      content: 'Support the continued development and maintenance of WowToolbar.',
    },
  ],
});

const hasSupportLinks = supportTiers.some(tier => tier.url);
</script>

<template>
  <main class="support-page">
    <header class="support-hero">
      <div class="eyebrow">
        <IconHeart :size="15" /> SUPPORT THE STUDIO
      </div>
      <h1>Keep useful tools<br>free and focused.</h1>
      <p>
        WowToolbar is built to stay fast, private, and distraction-free. Your support funds maintenance,
        infrastructure, and the next sharp utility.
      </p>
    </header>

    <section aria-labelledby="one-time-support">
      <div class="section-label">
        <span>01</span>
        <h2 id="one-time-support">One-time support</h2>
      </div>

      <div class="tier-grid">
        <article v-for="tier in supportTiers" :key="tier.amount" class="support-card">
          <div class="amount">${{ tier.amount }}</div>
          <h3>{{ tier.label }}</h3>
          <p>{{ tier.description }}</p>
          <a
            v-if="tier.url"
            class="action-link"
            :href="tier.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support WowToolbar <IconArrowUpRight :size="16" />
          </a>
          <span v-else class="action-link is-disabled">Coming soon</span>
        </article>
      </div>

      <p v-if="!hasSupportLinks" class="configuration-note">
        Payment options are being prepared. No personal payment details are published here.
      </p>
    </section>

    <section v-if="enterpriseSponsorUrl" aria-labelledby="enterprise-support">
      <div class="section-label">
        <span>02</span>
        <h2 id="enterprise-support">Enterprise sponsorship</h2>
      </div>
      <div class="wide-card">
        <IconBuildingStore :size="28" />
        <div>
          <h3>Put your brand behind better developer tools.</h3>
          <p>Selected sponsors can receive a tasteful brand placement on WowToolbar.</p>
        </div>
        <a :href="enterpriseSponsorUrl" target="_blank" rel="noopener noreferrer">
          Discuss sponsorship <IconArrowUpRight :size="16" />
        </a>
      </div>
    </section>

    <section v-if="affiliatePartners.length" aria-labelledby="recommended-partners">
      <div class="section-label">
        <span>{{ enterpriseSponsorUrl ? '03' : '02' }}</span>
        <h2 id="recommended-partners">Recommended partners</h2>
      </div>
      <p class="disclosure">
        Some links may be affiliate links. WowToolbar may receive a commission at no additional cost to you.
      </p>
      <div class="partner-grid">
        <a
          v-for="partner in affiliatePartners"
          :key="partner.name"
          class="partner-card"
          :href="partner.url"
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          <IconSparkles :size="18" />
          <div>
            <h3>{{ partner.name }}</h3>
            <p>{{ partner.description }}</p>
          </div>
          <IconArrowUpRight class="partner-arrow" :size="17" />
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped lang="less">
.support-page {
  width: min(920px, calc(100% - 36px));
  margin: 0 auto;
  padding: 72px 0 80px;
}

.support-hero {
  max-width: 720px;
  margin-bottom: 64px;

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #46f0b4;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 12px;
    letter-spacing: 0.1em;
  }

  h1 {
    margin: 14px 0 18px;
    color: #eafff8;
    font-size: clamp(40px, 7vw, 72px);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  p {
    max-width: 660px;
    margin: 0;
    color: #91a6ab;
    font-size: 16px;
    line-height: 1.7;
  }
}

section + section {
  margin-top: 56px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  span {
    color: #46f0b4;
    font-size: 11px;
  }

  h2 {
    margin: 0;
    color: #91a6ab;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}

.tier-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.support-card,
.wide-card,
.partner-card {
  border: 1px solid #24363b;
  background: linear-gradient(145deg, rgb(20 31 36 / 92%), rgb(12 20 24 / 96%));
  box-shadow: inset 0 1px rgb(255 255 255 / 3%);
}

.support-card {
  min-height: 250px;
  padding: 24px;

  .amount {
    color: #46f0b4;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 34px;
    font-weight: 700;
  }

  h3 {
    margin: 28px 0 8px;
    color: #eafff8;
    font-size: 17px;
  }

  p {
    min-height: 48px;
    margin: 0 0 24px;
    color: #789097;
    line-height: 1.55;
  }
}

.action-link,
.wide-card a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #46f0b4;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  text-decoration: none;
}

.action-link:hover,
.wide-card a:hover {
  color: #9effdc;
}

.action-link.is-disabled {
  color: #53676d;
  cursor: default;
}

.configuration-note,
.disclosure {
  margin: 14px 0 0;
  color: #60767c;
  font-size: 12px;
}

.wide-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 22px;
  padding: 26px;
  color: #46f0b4;

  h3 {
    margin: 0 0 6px;
    color: #eafff8;
    font-size: 18px;
  }

  p {
    margin: 0;
    color: #789097;
  }
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 14px;
}

.partner-card {
  position: relative;
  display: flex;
  gap: 14px;
  padding: 22px;
  color: #46f0b4;
  text-decoration: none;
  transition: border-color 160ms ease, transform 160ms ease;

  &:hover {
    border-color: #46f0b4;
    transform: translateY(-2px);
  }

  h3 {
    margin: 0 0 5px;
    color: #eafff8;
    font-size: 15px;
  }

  p {
    margin: 0;
    padding-right: 22px;
    color: #789097;
    font-size: 13px;
    line-height: 1.5;
  }
}

.partner-arrow {
  position: absolute;
  top: 20px;
  right: 20px;
}

@media (max-width: 700px) {
  .support-page {
    width: min(100% - 24px, 920px);
    padding-top: 48px;
  }

  .support-hero {
    margin-bottom: 46px;
  }

  .tier-grid,
  .partner-grid {
    grid-template-columns: 1fr;
  }

  .support-card {
    min-height: auto;

    p {
      min-height: auto;
    }
  }

  .wide-card {
    grid-template-columns: auto 1fr;

    a {
      grid-column: 2;
    }
  }
}
</style>
