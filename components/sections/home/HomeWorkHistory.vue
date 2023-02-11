<template>
  <section class="section">
    <BaseContainer>
      <header class="section__header">
        <h2 class="section__heading">Work History</h2>
      </header>

      <div class="section__body">
        <article class="section-card">
          <div class="section-card__info">
            <h3 class="section-card__heading">Senior Front-end Engineer</h3>

            <ul class="section-card__meta">
              <li>LolaDB</li>
              <li>United States</li>
              <li>Contract</li>
            </ul>

            <div class="section-card__period">
              <time datetime="2022-06">Jun 2022</time>
              &dash;
              <time :datetime="currentDate">Current</time>
            </div>
          </div>

          <p class="section-card__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            impedit officiis dolorem? Minima eveniet sint, incidunt culpa
            quisquam beatae architecto ullam vel earum quibusdam quia.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__info">
            <h3 class="section-card__heading">Senior Front-end Engineer</h3>

            <ul class="section-card__meta">
              <li>Casago</li>
              <li>United States</li>
              <li>Contract</li>
            </ul>

            <div class="section-card__period">
              <time datetime="2021-10">Oct 2021</time>
              &dash;
              <time datetime="2022-04">Apr 2022</time>
              (7 mos)
            </div>
          </div>

          <p class="section-card__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            impedit officiis dolorem? Minima eveniet sint, incidunt culpa
            quisquam beatae architecto ullam vel earum quibusdam quia.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__info">
            <h3 class="section-card__heading">Senior Front-end Engineer</h3>

            <ul class="section-card__meta">
              <li>Nokori</li>
              <li>United States</li>
              <li>Contract</li>
            </ul>

            <div class="section-card__period">
              <time datetime="2020-07">Jul 2020</time>
              &dash;
              <time datetime="2021-10">Oct 2021</time>
              (1 yr 4 mos)
            </div>
          </div>

          <p class="section-card__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            impedit officiis dolorem? Minima eveniet sint, incidunt culpa
            quisquam beatae architecto ullam vel earum quibusdam quia.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__info">
            <h3 class="section-card__heading">Front-end Developer</h3>

            <ul class="section-card__meta">
              <li>Upwork</li>
              <li>Worldwide</li>
              <li>Freelance</li>
            </ul>

            <div class="section-card__period">
              <time datetime="2016-01">Jan 2016</time>
              &dash;
              <time datetime="2020-07">Jul 2020</time>
              (4 yrs 7 mos)
            </div>
          </div>

          <p class="section-card__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            impedit officiis dolorem? Minima eveniet sint, incidunt culpa
            quisquam beatae architecto ullam vel earum quibusdam quia.
          </p>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
const currentDate = computed(() => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  return `${year}-${month}`
})
</script>

<style scoped lang="scss">
.section {
  margin-bottom: var(--section-padding-y-sm);

  &__header {
    margin-bottom: toRem(32px);

    @include mq($from: md) {
      margin-bottom: toRem(48px);
    }
  }

  &__heading {
    @include heading-level-2;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__body {
    position: relative;
    display: grid;
    gap: toRem(36px);
    padding-left: toRem(40px);

    @include mq($from: md) {
      gap: toRem(48px);
    }

    @include mq($from: lg) {
      padding-left: toRem(70px);
    }

    // Timeline
    &::before {
      content: '';
      position: absolute;
      top: toRem(12px);
      bottom: 0;
      left: toRem(7px);
      width: toRem(2px);
      background-color: var(--grey-color);
    }
  }
}

.section-card {
  position: relative;
  display: grid;
  gap: toRem(18px);

  &:first-child {
    &::before {
      box-shadow: 0 0 0 0 var(--orange-color);
      animation: ping 1.5s ease infinite;
    }
  }

  @include mq($from: md) {
    grid-template-columns: toRem(280px) auto;
    gap: toRem(48px);
  }

  @include mq($from: lg) {
    gap: toRem(64px);
  }

  // Marker
  &::before {
    content: '';
    position: absolute;
    top: toRem(7px);
    left: toRem(-40px);
    width: toRem(16px);
    height: toRem(16px);
    background-color: var(--orange-color);
    border-radius: 50%;

    @include mq($from: lg) {
      left: toRem(-70px);
    }
  }

  &__heading {
    margin-top: 0;
    margin-bottom: toRem(6px);
    font-size: toRem(20px);
    font-weight: 700;
  }

  &__meta,
  &__period {
    font-size: toRem(16px);
    font-weight: 500;
    line-height: 1.2;
    white-space: nowrap;
  }

  &__meta {
    display: flex;
    gap: toRem(22px);
    margin-top: 0;
    margin-bottom: toRem(8px);
    padding-left: 0;
    list-style-type: none;

    & > li:nth-child(-n + 2) {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: calc(100% + ((toRem(22px) - toRem(6px)) / 2));
        transform: translateY(-50%);
        width: toRem(6px);
        height: toRem(6px);
        background-color: var(--blue-color);
        border-radius: 50%;
        opacity: 0.25;
      }
    }
  }

  &__period {
    opacity: 0.75;
  }

  &__description {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.7;
  }
}
</style>
