<template>
  <component :is="href ? 'a' : 'button'" class="btn" :href="href">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<style scoped lang="scss">
.btn {
  display: block;
  padding: 0;
  color: var(--white-color);
  background-color: var(--orange-color);
  border: 0;
  border-radius: var(--control-radius);
  font-size: toRem(24px);
  font-weight: 700;
  line-height: toRem(64px);
  text-align: center;
  text-decoration: none;
  transition: background-color 200ms ease;
  cursor: pointer;

  &:hover {
    background-color: var(--blue-color);
  }
}
</style>
