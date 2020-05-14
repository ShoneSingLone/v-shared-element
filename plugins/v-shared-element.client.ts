import Vue from 'vue'
import {
  NuxtSharedElementRouteGuard,
  SharedElementDirective
} from 'v-shared-element'
import { IOptions } from 'illusory/types/options'

Vue.use(SharedElementDirective, {
  includeChildren: true
} as IOptions)

export default NuxtSharedElementRouteGuard
