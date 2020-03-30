import Vue from 'vue'
import {
  NuxtSharedElementRouteGuard,
  SharedElementDirective
} from 'v-shared-element'

Vue.use(SharedElementDirective, {
  zIndex: 1
})

export default NuxtSharedElementRouteGuard
