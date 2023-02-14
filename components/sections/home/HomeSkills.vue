<template>
  <section class="section">
    <BaseContainer>
      <BaseSectionHeader class="section__header">
        <template #heading>Skills</template>
        <template #intro>
          <p>
            I'm a great enthusiast of latest technologies and tools. Being on
            the cutting edge of modern development trends is extremely important
            to me. I&nbsp;constantly gain new skills by reading books, watching
            courses, attending conferences and following top developers.
          </p>
        </template>
      </BaseSectionHeader>

      <div class="section__body">
        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoJavascript
              class="section-card__icon section-card__icon--js"
            />
          </div>

          <h3 class="section-card__heading">Javascript / Typescript</h3>

          <p class="section-card__description">
            By default, I start all new projects with TS. Having a fully typed
            app helps keep it less error-prone.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoVue class="section-card__icon section-card__icon--vue" />
            <IconLogoNuxt class="section-card__icon section-card__icon--nuxt" />
            <IconLogoAstro
              class="section-card__icon section-card__icon--astro"
            />
          </div>

          <h3 class="section-card__heading">Vue + Nuxt / Astro</h3>

          <p class="section-card__description">
            SPA, SSR, SSG or Universal Rendering? I'll get you covered with the
            best option available.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoHTML class="section-card__icon section-card__icon--html" />
            <IconLogoCSS class="section-card__icon section-card__icon--css" />
          </div>

          <h3 class="section-card__heading">HTML & CSS</h3>

          <p class="section-card__description">
            Those two are my old friends, I started my career by converting
            designs to HTML & CSS.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoSass class="section-card__icon section-card__icon--sass" />
          </div>

          <h3 class="section-card__heading">Sass & PostCSS</h3>

          <p class="section-card__description">
            When working on stylesheets, using pre- and post-processor allows me
            to be as productive as possible.
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
            The rise of utility frameworks has made me stick to the trends, but
            I'm not a big fan of them in general.
          </p>
        </article>

        <article class="section-card">
          <div class="section-card__logos">
            <IconLogoVite class="section-card__icon section-card__icon--vite" />
            <IconLogoNpm class="section-card__icon section-card__icon--npm" />
          </div>

          <h3 class="section-card__heading">Vite / npm</h3>

          <p class="section-card__description">
            Since the early days when Vite was released, it has been my go-to
            tool for every project.
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
            Testing is the most crucial part of any development process. I
            prefer to use the best-in-class tools.
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
            Git workflows and tools like husky, lint-staged, and conventional
            commits are what I have mastered.
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
            During my career path, I worked with numerous design files, so I am
            comfortable with any environment.
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
    max-width: toRem(850px);
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
    margin-bottom: toRem(4px);
    height: toRem(48px);
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
      margin-left: toRem(-4px);
      width: toRem(34px);
      height: toRem(28px);
    }

    &--astro {
      transform: translateY(toRem(3px));
      margin-left: toRem(-4px);
      width: toRem(34px);
      height: toRem(48px);
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
