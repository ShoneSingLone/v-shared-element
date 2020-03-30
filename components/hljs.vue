<template>
  <pre class="hljs-pre" v-highlightjs><code :class="lang"><slot/></code></pre>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'hljs',
  props: {
    lang: {
      default: 'javascript'
    }
  }
})
</script>

<style scoped>
</style>
