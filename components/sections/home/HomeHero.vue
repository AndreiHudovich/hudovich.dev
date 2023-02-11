<template>
  <section class="section">
    <BaseContainer>
      <div class="section__container">
        <h1 class="section__heading">
          Hello!<br />
          I&apos;m
          <strong>Andrei Hudovich</strong>,<br />
          a front-end engineer
        </h1>

        <p class="section__intro">
          A highly-skilled professional with more than 8&nbsp;years of
          experience. Currently, I&nbsp;specialize in developing web
          applications with
          <IconLogoVue /><strong>Vue.js</strong> ecosystem.
        </p>

        <NuxtLink class="section__btn" to="/contact">Hire Me</NuxtLink>

        <div v-if="isMediaQueryMd" class="section__illustration">
          <img src="/images/home-hero.svg" alt="" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isMediaQueryMd = useMediaQuery('(min-width: 64em)')
</script>

<style scoped lang="scss">
.section {
  margin-bottom: var(--section-padding-y-md);

  &__container {
    @include mq($from: lg) {
      position: relative;
      padding-bottom: toRem(24px);
    }
  }

  &__heading {
    margin-top: 0;
    margin-bottom: toRem(12px);
    font-size: clamp(toRem(32px), 4vw + 1rem, toRem(60px));
    line-height: 1.33;

    @include mq($from: md) {
      margin-bottom: toRem(24px);
      line-height: 1.25;
    }

    @include mq($from: lg) {
      font-size: clamp(toRem(32px), 3.6vw + 1rem, toRem(60px));
    }

    @include mq($from: container) {
      font-size: toRem(56px);
    }

    @include mq($from: xl) {
      font-size: toRem(60px);
    }

    & > strong {
      color: var(--orange-color);
      font-weight: 800;
    }
  }

  &__intro {
    margin-top: 0;
    margin-bottom: toRem(24px);
    max-width: toRem(500px);
    font-size: toRem(20px);
    line-height: 1.7;

    @include mq($from: md) {
      margin-bottom: toRem(32px);
      max-width: toRem(600px);
      font-size: toRem(24px);
    }

    @include mq($from: lg) {
      max-width: toRem(520px);
      font-size: toRem(21px);
    }

    @include mq($from: container) {
      max-width: toRem(580px);
      font-size: toRem(23px);
    }

    @include mq($from: xl) {
      max-width: toRem(600px);
      font-size: toRem(24px);
    }

    & > svg {
      display: inline-block;
      margin-bottom: toRem(-1px);
      margin-right: toRem(6px);
      width: toRem(18px);
      height: toRem(16px);

      @include mq($from: md) {
        margin-bottom: toRem(-2px);
        width: toRem(23px);
        height: toRem(21px);
      }
    }

    & > strong {
      color: hsl(153 47% 49%);
    }
  }

  &__btn {
    display: block;
    width: toRem(220px);
    height: toRem(64px);
    color: var(--white-color);
    background-color: var(--orange-color);
    border-radius: var(--control-radius);
    font-size: toRem(24px);
    font-weight: 700;
    line-height: toRem(64px);
    text-align: center;
    text-decoration: none;
  }

  &__illustration {
    @include mq($from: lg) {
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      width: 100%;
      max-width: clamp(toRem(380px), 37.11vw, toRem(460px));

      & > img {
        display: block;
        max-width: 100%;
      }
    }

    @include mq($from: container) {
      max-width: toRem(420px);
    }

    @include mq($from: xl) {
      right: toRem(-64px);
      max-width: toRem(440px);
    }
  }
}
</style>
