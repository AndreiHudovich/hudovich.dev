<template>
  <NuxtLayout>
    <section class="not-found">
      <BaseContainer>
        <figure v-if="is404Error" class="not-found__illustration">
          <img src="/images/404.svg" alt="404 Not Found" />
        </figure>

        <h1 class="not-found__heading">
          <template v-if="is404Error"> Ooops!<br />Page Not Found</template>
          <template v-else>Error!</template>
        </h1>

        <p class="not-found__text">
          <template v-if="is404Error">
            Sorry, the page you are looking for doesn&apos;t exist :(
          </template>

          <template v-else>
            {{ error?.message }}
          </template>
        </p>

        <button class="not-found__btn" @click="handleError">
          Back to Home
        </button>
      </BaseContainer>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError()

const is404Error = computed(() => {
  if (error?.value && !(error.value instanceof Error)) {
    return error.value.statusCode === '404'
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped lang="scss">
.not-found {
  margin-bottom: var(--section-padding-y-sm);

  &__illustration {
    display: block;
    margin: 0;
    margin-bottom: toRem(32px);
    width: 100%;
    max-width: toRem(280px);

    & > img {
      display: block;
      max-width: 100%;
    }

    @include mq($from: lg) {
      max-width: toRem(320px);
    }
  }

  &__heading {
    @include heading-level-2;
    margin-top: 0;
    margin-bottom: toRem(12px);

    @include mq($from: lg) {
      font-size: toRem(50px);
    }
  }

  &__text {
    margin-top: 0;
    margin-bottom: toRem(24px);
    font-size: toRem(19px);
    line-height: 1.7;

    @include mq($from: lg) {
      font-size: toRem(22px);
    }
  }

  &__btn {
    @include btn;
    width: toRem(220px);
    height: toRem(64px);
  }
}
</style>
