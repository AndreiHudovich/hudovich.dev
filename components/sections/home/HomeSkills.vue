<template>
  <section class="section">
    <BaseContainer>
      <header class="section__header">
        <h2 class="section__heading">Skills</h2>

        <p class="section__intro">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quasi
          labore cum nesciunt mollitia exercitationem odio, fuga explicabo totam
          id corrupti ducimus magnam minima rerum eum alias modi error obcaecati
          natus, <a href="#">repudiandae</a> unde ad vel
          <a href="#">cupiditate</a> soluta.
        </p>
      </header>

      <div class="section__body">
        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoJavascript
              class="section-card__icon section-card__icon--js"
            />
          </div>

          <h3 class="section-card__heading">Javascript / Typescript</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoVue class="section-card__icon section-card__icon--vue" />
            <IconLogoNuxt class="section-card__icon section-card__icon--nuxt" />
          </div>

          <h3 class="section-card__heading">Vue / Nuxt</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoHTML class="section-card__icon section-card__icon--html" />
            <IconLogoCSS class="section-card__icon section-card__icon--css" />
          </div>

          <h3 class="section-card__heading">HTML & CSS</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoSass class="section-card__icon section-card__icon--sass" />
          </div>

          <h3 class="section-card__heading">Sass</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoTailwind
              class="section-card__icon section-card__icon--tailwind"
            />
          </div>

          <h3 class="section-card__heading">Tailwind</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoVite class="section-card__icon section-card__icon--vite" />
            <IconLogoNpm class="section-card__icon section-card__icon--npm" />
          </div>

          <h3 class="section-card__heading">Vite / npm</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoVitest
              class="section-card__icon section-card__icon--vitest"
            />
            <IconLogoPlaywright
              class="section-card__icon section-card__icon--playwright"
            />
          </div>

          <h3 class="section-card__heading">Vitest & Playwright</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoGit class="section-card__icon section-card__icon--git" />
            <IconLogoGithub
              class="section-card__icon section-card__icon--github"
            />
          </div>

          <h3 class="section-card__heading">Git & GitHub</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoFigma
              class="section-card__icon section-card__icon--figma"
            />
            <IconLogoSketch
              class="section-card__icon section-card__icon--sketch"
            />
          </div>

          <h3 class="section-card__heading">Figma / Sketch</h3>

          <p class="section-card__description">
            Lorem ipsum dolor sit amet coecte adiing elit. Quia asenda posmus
            pariur voltem.
          </p>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped lang="scss">
.section {
  margin-bottom: var(--section-padding-y-md);

  &__header {
    margin-bottom: toRem(38px);

    @include mq($from: md) {
      margin-bottom: toRem(48px);
    }
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

    @include mq($from: lg) {
      font-size: toRem(22px);
    }
  }

  &__body {
    display: grid;
    gap: toRem(40px);

    @include mq($from: sm) {
      grid-template-columns: repeat(2, 1fr);
      gap: toRem(48px) toRem(24px);
    }

    @include mq($from: md) {
      gap: toRem(48px);
    }

    @include mq($from: container) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.section-card {
  &__logos {
    display: flex;
    align-items: center;
    gap: toRem(12px);
    margin-bottom: toRem(8px);
    height: toRem(34px);
  }

  &__icon {
    &--js {
      width: toRem(34px);
      height: toRem(34px);
    }

    &--vue {
      width: toRem(32px);
      height: toRem(28px);
    }

    &--nuxt {
      width: toRem(34px);
      height: toRem(28px);
    }

    &--html {
      width: toRem(30px);
      height: toRem(34px);
    }

    &--css {
      width: toRem(30px);
      height: toRem(34px);
    }

    &--sass {
      width: toRem(46px);
      height: toRem(34px);
    }

    &--tailwind {
      width: toRem(44px);
      height: toRem(27px);
    }

    &--vite {
      width: toRem(33px);
      height: toRem(33px);
    }

    &--npm {
      transform: translateY(toRem(2px));
      width: toRem(50px);
      height: toRem(20px);
    }

    &--vitest {
      width: toRem(35px);
      height: toRem(32px);
    }

    &--playwright {
      width: toRem(37px);
      height: toRem(28px);
    }

    &--git {
      width: toRem(33px);
      height: toRem(33px);
    }

    &--github {
      width: toRem(32px);
      height: toRem(32px);
    }

    &--figma {
      width: toRem(20px);
      height: toRem(29px);
    }

    &--sketch {
      width: toRem(32px);
      height: toRem(30px);
    }
  }

  &__heading {
    margin-top: 0;
    margin-bottom: toRem(4px);
    font-size: toRem(20px);
    font-weight: 700;
  }

  &__description {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.7;
  }
}
</style>
