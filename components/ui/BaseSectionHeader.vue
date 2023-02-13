<template>
  <header class="section-header">
    <h2 class="section-header__heading">
      <slot name="heading"></slot>
    </h2>

    <p class="section-header__intro">
      <slot name="intro"></slot>
    </p>
  </header>
</template>

<style scoped lang="scss">
.section-header {
  margin-bottom: toRem(38px);

  @include mq($from: md) {
    margin-bottom: toRem(48px);
  }

  &__heading {
    @include heading-level-2;
    margin-top: 0;
    margin-bottom: toRem(18px);
  }

  &__intro {
    margin-top: 0;
    margin-bottom: 0;
    max-width: toRem(1024px);
    font-size: toRem(19px);
    line-height: 1.7;

    &:deep(a) {
      color: currentColor;
      text-decoration: underline var(--orange-color) 2px;
      text-underline-offset: toRem(1px);
      text-underline-position: under;
    }

    @include mq($from: lg) {
      font-size: toRem(22px);
    }
  }
}
</style>
