<template>
  <div v-shared-element:install class="home">
    <img
      v-shared-element:vue-logo
      src="https://vuejs.org/images/logo.png"
      alt="Vue.js logo"
    />
    <h1>Installation</h1>
    <h2>npm</h2>
    <pre class="hljs-pre" v-highlightjs><code class="js">
    $ npm install v-shared-element
    </code></pre>
    <h2>Register plugin</h2>
    <h3>Vue.js + vue-router</h3>
    <p>In your <span class="code">main.js</span> file</p>
    <pre class="hljs-pre" v-highlightjs><code class="js">
    import Vue from 'vue'
    import {
        SharedElementRouteGuard,
        SharedElementDirective
    } from 'v-shared-element'

    Vue.use(SharedElementDirective)

    const router = new VueRouter({ ... })

    router.beforeEach(SharedElementRouteGuard)
    </code></pre>
    <h3>Nuxt.js</h3>
    <p>
      Create a file in <span class="code">~/plugins</span> named
      <span class="code">v-shared-element.js</span>
    </p>
    <pre class="hljs-pre" v-highlightjs><code class="js">
    import Vue from 'vue'
    import {
    NuxtSharedElementRouteGuard,
    SharedElementDirective
    } from 'v-shared-element'

    Vue.use(SharedElementDirective)

    export default NuxtSharedElementRouteGuard
    </code></pre>
    <p><span class="code">nuxt.config.js</span></p>
    <pre class="hljs-pre" v-highlightjs><code class="js">
    export default {
        plugins: ['~/plugins/v-shared-element.client.ts', '~/plugins/highlight.ts'],
    }
    </code></pre>

    <nuxt-link to="/" class="button">Close</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home'
})
</script>

<style lang="scss" scoped>
.home {
  padding: var(--sizing--5x) 15%;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: hsl(199, 40%, 30%);
}

.button {
  width: 75%;
  height: 70px;
  display: flex;
  color: #fff;
  text-decoration: none;
  font-family: inherit;
  font-size: 1.25rem;
  justify-content: center;
  align-items: center;
  margin: var(--sizing--4x) auto;
  border-radius: 24px;

  background: hsl(148, 24%, 49%);
  &:hover {
    background: hsl(148, 25%, 55%);
  }
}
</style>
