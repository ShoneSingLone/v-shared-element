<template>
  <div v-shared-element:caveats class="home">
    <h1>Caveats</h1>
    <ul>
      <li>
        <p>
          Any transform applied to a shared-element <strong>other than</strong>
          <span class="code">translate</span> (e.g.
          <span class="code">rotate</span>) will break the transition.
        </p>
      </li>
    </ul>
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
  background: hsl(148, 24%, 49%);
  color: #212121;
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

  background: #2e586b;
  &:hover {
    background: hsl(199, 30%, 35%);
  }
}
</style>
