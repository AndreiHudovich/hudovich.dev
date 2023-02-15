<template>
  <HomeHero />
  <HomeSkills />
  <HomeWorkHistory />
</template>

<script setup lang="ts">
import Metadata from '@/enums/Metadata.enums'

// prettier-ignore
useSeoMeta({
  title: 'Andrei Hudovich - Senior Front-end Engineer',
  description: 'The personal website of Andrei Hudovich, front-end engineer and web enthusiast.',
  ogType: 'website',
  ogTitle: 'The personal website of Andrei Hudovich, front-end engineer and web enthusiast.',
  ogDescription: '',
  ogUrl: Metadata.BASE_URL,
  ogImage: Metadata.SOCIAL_WEBSITE_LOGO,
  twitterCard: 'summary',
  twitterSite: Metadata.TWITTER_USERNAME
})
</script>
