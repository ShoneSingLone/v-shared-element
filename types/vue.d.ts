import { illusory, IllusoryElement } from 'illusory/types'
import { IOptions } from 'illusory/types/options'

declare module 'vue/types/vue' {
  interface Vue {
    $illusory: typeof illusory
    $createIllusoryElement: (
      el: HTMLElement | SVGElement,
      opts?: Partial<IOptions>
    ) => IllusoryElement
  }
}
