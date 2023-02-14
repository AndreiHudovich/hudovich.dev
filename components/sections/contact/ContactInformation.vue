<template>
  <section class="contact">
    <BaseContainer>
      <BaseSectionHeader>
        <template #heading>Get in touch</template>
        <template #intro>
          <p class="intro">Do you have an exciting project?</p>
          <p>
            You can reach me anytime at
            <a href="mailto:andrei.hudovich@gmail.com">
              andrei.hudovich@gmail.com
            </a>
          </p>
          <p>I usually respond in 1-2 business days.</p>
        </template>
      </BaseSectionHeader>
    </BaseContainer>
  </section>
</template>

<style scoped lang="scss">
.contact {
  margin-bottom: var(--section-padding-y-sm);

  &__heading {
    @include heading-level-2;
    margin-top: 0;
    margin-bottom: toRem(12px);

    @include mq($from: lg) {
      font-size: toRem(50px);
    }
  }

  &__text {
    & > .intro {
      margin-top: 0;
      margin-bottom: 0;
      font-size: toRem(19px);
      line-height: 1.7;

      @include mq($from: md) {
        font-size: toRem(22px);
      }
    }

    a {
      color: currentColor;
      font-weight: 500;
    }
  }
}
</style>
