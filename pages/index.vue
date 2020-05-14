<template>
  <div class="content">
    <h1>Demo blog</h1>
    <p>
      The place to see v-shared-element in action.
      <br />
      See the
      <a
        class="external"
        href="https://github.com/justintaddei/v-shared-element"
        target="_blank"
        >GitHub page</a
      >
      for documentation.
    </p>
    <div class="imgs">
      <nuxt-link v-for="img in imgs" :to="`post/${img.name}`" :key="img.name">
        <img
          v-shared-element:[img.name]
          :src="getSrc(img.name)"
          :alt="img.name"
        />
        <!-- <div class="test" v-shared-element:[img.name]></div> -->
        <div>
          <h3 v-shared-element:[getId(img.name)]>
            {{ img.title }}
          </h3>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 128px 32px;
  @media screen and (min-width: 900px) {
    padding: 128px 128px;
  }
}

.imgs {
  display: grid;
  grid-gap: 1em;
  justify-content: center;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  .test {
    margin: 0;
    width: 100%;
    border-radius: 50px;
  }

  div {
    padding: 24px;
    margin: 8px 0 0 0;
    border-radius: 20px;
    background: rgb(255, 255, 255);
    position: relative;
    box-shadow: 0 30px 60px rgba(20, 20, 40, 0.1);
    h3 {
      margin: 0;
      padding: 0;
      display: inline;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'home',
  methods: {
    getSrc(name: string) {
      return `./images/${name}.jpg`
    },
    getId(name: string) {
      return `${name}_title`
    }
  },
  data() {
    return {
      imgs: [
        {
          name: 'road',
          title: 'Iconic road'
        },
        {
          name: 'elk',
          title: 'Beautiful animal'
        },
        {
          name: 'flower',
          title: 'Pretty flower'
        },
        {
          name: 'car',
          title: 'Classic car'
        },
        {
          name: 'mtns',
          title: 'Foggy mountains'
        },
        {
          name: 'overhead',
          title: 'Mountain road'
        },
        {
          name: 'books',
          title: 'Old books'
        },
        {
          name: 'guitar',
          title: 'Electric guitar'
        }
      ]
    }
  }
})
</script>
