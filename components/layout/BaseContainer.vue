<template>
  <div class="container" :class="fluid && 'container--fluid'">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    fluid?: boolean
  }>(),
  {
    fluid: false
  }
)
</script>

<style scoped lang="scss">
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: toRem(24px);
  padding-right: toRem(24px);
  width: 100%;
  max-width: toRem(1120px);

  @include mq($from: md) {
    padding-left: toRem(48px);
    padding-right: toRem(48px);
  }

  &--fluid {
    max-width: none;
  }
}
</style>
