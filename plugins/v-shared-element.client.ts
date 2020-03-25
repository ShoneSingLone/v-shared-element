import Vue from 'vue'
import {
  NuxtSharedElementRouteGuard,
  SharedElementDirective
} from 'v-shared-element'

Vue.use(SharedElementDirective)

export default NuxtSharedElementRouteGuard
