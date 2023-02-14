<template>
  <header class="section-header">
    <h2 class="section-header__heading">
      <slot name="heading"></slot>
    </h2>

    <div class="section-header__intro">
      <slot name="intro"></slot>
    </div>
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
    margin-bottom: toRem(12px);
  }

  &__intro {
    @include margin-trim;
    font-size: toRem(19px);
    line-height: 1.7;

    &:deep(a) {
      @include link;
    }

    @include mq($from: lg) {
      font-size: toRem(22px);
    }
  }
}
</style>
