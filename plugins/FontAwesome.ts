import { library, config } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faBars, faHeart, faTwitter, faGithub)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
