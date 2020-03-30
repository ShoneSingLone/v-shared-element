<template>
  <div v-shared-element:usage class="home">
    <div class="container">
      <h1>Usage</h1>

      <p>
        To create a shared-element transition tag an element with <span class="code">v-shared-element:id</span>. <br/>
        For example, lets say you have these element somewhere on the following pages:
      </p>
      <span class="code">Page 1:</span>
      <pre class="hljs-pre" v-highlightjs><code class="html">
        &lt;a href="/create"&gt;
          &lt;button v-shared-element:foo&gt;Create&lt;/button&gt;
        &lt;/a&gt;
      </code></pre>
      
      <span class="code">Page 2:</span>
      <pre class="hljs-pre" v-highlightjs><code class="html">
        &lt;input type="text" v-shared-element:foo /&gt;
      </code></pre>
      <p>
        When the "Create" link is clicked (or tapped) the button will appear to turn into the text input on the next page. <br>
        Note that <span class="code">v-shared-element</span> can be used on any element, not just buttons.
      </p>

      <h2>Set global options</h2>
      <pre class="hljs-pre" v-highlightjs><code class="js">
      Vue.use(SharedElementDirective, {
        type: 'auto',
        easing: 'ease',
        duration: '300ms',
        endDuration: '100ms',
        compositeOnly: false,
        zIndex: 1000
      })
      </code></pre>

      <h2>Set per-element options</h2>
      <p>Per-element options are dirived from the element on the current page. That means when user navigates to another page, the options on this img tag apply. However, when returning to this page, these options do <strong>not</strong> apply.</p>
      <pre class="hljs-pre" v-highlightjs><code class="html">
        &lt;img src=&quot;/user/profile.jpg&quot; v-shared-element:profile=&quot;{
          type: &#39;auto&#39;,
          easing: &#39;ease&#39;,
          duration: &#39;300ms&#39;,
          endDuration: &#39;100ms&#39;,
          compositeOnly: false,
          zIndex: 1000
        }&quot;&gt;
      </code></pre>

      <h2>Options</h2>
      <ul>
        <li><h3>type: <span class="code">'cross-fade' | 'reveal' | 'auto'</span></h3>
      
      <p>
        Controls how the elements will be swapped.
        
        <ul>
          <li><span class="code">cross-fade</span> will fade out the old element and at the same time will fade the new one in underneath.</li>
          <li><span class="code">reveal</span> starts with <strong>both</strong> elements at <strong>full opacity</strong> then fades out the old element to reveal the new one underneath.</li>
        
          <li><span class="code">auto</span> will use <span class="code">"cross-fade"</span> when <span class="code">compositeOnly = true || the old element's opacity !== 1</span> and <span class="code">"reveal"</span> otherwise.</li></ul>
      </p>

     </li>
     <li> <h3>easing: <span class="code">string</span></h3>
      <p>
        Sets the easing fuction of the transition. This can be any value that is accepted by the CSS <span class="code">transition-timing-function</span> property.
      </p></li>

     <li> <h3>duration: <span class="code">string</span></h3>
      <p>
        Sets the duration of the transition. This can be any value that is accepted by the CSS <span class="code">transition-duration</span> property.
      </p></li>

     <li> <h3>endDuration: <span class="code">string</span></h3>
      <p>
        When the transition is finished, the contents of the shared-element will take this long to fade in. This can be any value that is accepted by the CSS <span class="code">transition-duration</span> property. Set this to <span class="code">"0s"</span> to disable it (the contents of the shared element will render as soon as the transition finishes).
      </p></li>

       <li> <h3>compositeOnly: <span class="code">boolean</span></h3>
      <p>
        By default, a shared-element transition consists of <span class="code">transform</span> <span class="code">opacity</span> and <span class="code">border-radius</span>. Setting this to <span class="code">true</span> will limit the transition to <span class="code">transform</span> and <span class="code">opacity</span> only.
      </p></li>
       <li> <h3>zIndex: <span class="code">number</span></h3>
      <p>
        The z-index used for the shared-elements during the transition.
      </p></li>
      </ul>
    <nuxt-link to="/" class="button">Close</nuxt-link>
    </div>

    
  </div>
</template>

<script lang="ts">
import Hljs from '../components/hljs.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { Hljs },
  name: 'home'
})
</script>

<style lang="scss" scoped>
.home {
  padding: var(--sizing--5x) 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #9f6062;
}

.container {
  margin: 0 15%;
}

.button {
  width: 100%;
  height: 70px;
  display: flex;
  color: #fff;
  text-decoration: none;
  background: #2e586b;
  font-family: inherit;
  font-size: 1.25rem;
  justify-content: center;
  align-items: center;
  margin: var(--sizing--3x) 0;
  border-radius: 24px;
  &:hover {
    background: hsl(199, 30%, 35%);
  }
}
</style>
