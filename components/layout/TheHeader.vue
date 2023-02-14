<template>
  <header class="header">
    <BaseContainer class="header__container" fluid>
      <NuxtLink class="header__logo" to="/">
        <BaseLogo />
      </NuxtLink>

      <TheNavigation :is-open="state.isOpen" />

      <button
        class="header__hamburger-btn"
        type="button"
        @click="toggleNavigation"
      >
        <IconSolidBars />
      </button>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import type TheHeaderState from '@/types/components/TheHeaderState.interface'

const state: TheHeaderState = reactive({
  isOpen: false
})

function toggleNavigation() {
  state.isOpen = !state.isOpen
}
</script>

<style scoped lang="scss">
.header {
  margin-bottom: var(--section-padding-y-sm);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: toRem(80px);

    @include mq($from: md) {
      height: toRem(100px);
    }
  }

  &__logo {
    flex-shrink: 0;
  }

  &__hamburger-btn {
    position: relative;
    z-index: calc(var(--mobile-nav-z-index) + 1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc((toRem(36px) - toRem(26px)) / 2 * -1);
    padding: 0;
    width: toRem(36px);
    height: toRem(36px);
    border: 0;
    background-color: transparent;
    cursor: pointer;

    @include mq($from: md) {
      display: none;
    }

    & > svg {
      display: block;
      width: toRem(33px);
      height: toRem(29px);
      fill: var(--blue-color);
    }
  }
}
</style>
