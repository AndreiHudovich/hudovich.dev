<template>
  <nav ref="navRef" class="nav" :class="isOpen && 'js-open'">
    <div class="nav__container">
      <ul class="nav__list">
        <li v-for="item in navLinks.header" :key="item.label" class="nav__item">
          <NuxtLink
            class="nav__link"
            :to="item.href"
            @click="$emit('linkClicked')"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <ul class="nav-meta">
        <li class="nav-meta__item">
          <a
            class="nav-meta__link"
            :href="metadata.social.twitter"
            target="_blank"
            @click="$emit('linkClicked')"
          >
            <IconBrandsTwitter class="nav-meta__icon nav-meta__icon--twitter" />
          </a>
        </li>

        <li class="nav-meta__item">
          <a
            class="nav-meta__link"
            :href="metadata.social.github"
            target="_blank"
            @click="$emit('linkClicked')"
          >
            <IconBrandsGithub class="nav-meta__icon nav-meta__icon--github" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import navLinks from '@/data/navLinks'
import metadata from '@/data/metadata'

const props = defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'linkClicked'): void
}>()

const navRef = ref<HTMLElement | null>(null)

watch(
  () => props.isOpen,
  (newIsOpen) => {
    if (navRef.value) {
      newIsOpen
        ? disableBodyScroll(navRef.value)
        : enableBodyScroll(navRef.value)
    }
  }
)
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  inset: 0;
  z-index: var(--mobile-nav-z-index);
  visibility: hidden;
  display: grid;
  overflow: auto;
  padding-top: toRem(64px);
  padding-bottom: toRem(64px);
  background-color: var(--orange-color);

  &.js-open {
    visibility: visible;
  }

  @include mq($from: md) {
    position: static;
    visibility: visible;
    display: block;
    overflow: visible;
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
  }

  &__container {
    margin-top: auto;
    margin-bottom: auto;

    @include mq($from: md) {
      display: flex;
      align-items: center;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: toRem(32px);
    margin-top: 0;
    margin-bottom: toRem(48px);
    padding-left: 0;
    list-style-type: none;

    @include mq($from: md) {
      flex-direction: row;
      gap: toRem(48px);
      margin-bottom: 0;
      margin-right: toRem(48px);
    }
  }

  &__link {
    display: block;
    padding-bottom: 1px;
    color: var(--blue-color);
    border-bottom: toRem(3px) solid transparent;
    font-size: toRem(24px);
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    text-transform: uppercase;
    transition: border-bottom-color 150ms ease;

    &:is(:hover, .router-link-active) {
      border-bottom-color: var(--orange-color);
    }

    @include mq($from: md) {
      font-size: toRem(16px);
    }
  }
}

.nav-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: toRem(24px);
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;

  @include mq($from: md) {
    gap: toRem(20px);
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: toRem(36px);
    height: toRem(36px);

    @include mq($from: md) {
      width: auto;
      height: auto;
    }
  }

  &__icon {
    display: block;
    fill: var(--blue-color);

    &--twitter {
      width: toRem(33px);
      height: toRem(27px);

      @include mq($from: md) {
        width: toRem(28px);
        height: toRem(23px);
      }
    }

    &--github {
      width: toRem(27px);
      height: toRem(27px);
    }

    &--github {
      @include mq($from: md) {
        width: toRem(22px);
        height: toRem(22px);
      }
    }
  }
}
</style>
