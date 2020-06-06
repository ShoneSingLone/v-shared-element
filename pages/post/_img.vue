<template>
  <div class="content">
    <div class="img" v-shared-element:[$route.params.img]>
      <img :src="src" :alt="title" />
      <div class="overlay"></div>
    </div>
    <div class="post">
      <h1 v-shared-element:[getId($route.params.img)]>
        {{ title }}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        eum alias, sapiente obcaecati, doloribus velit aut quam vitae voluptas
        iste quidem fugiat laudantium, et ipsa tempora quo similique debitis!
        Voluptatibus illo magnam esse minima. Suscipit odio, aliquam mollitia,
        repudiandae qui provident illum possimus maxime dolorum doloribus
        temporibus nihil! Beatae voluptates eveniet quasi animi ullam deserunt
        facere quisquam eos aliquam excepturi, aperiam consequuntur maxime optio
        inventore eum quos magni commodi laudantium quo. Enim odio quae debitis
        porro nesciunt facere, earum praesentium quam dolores nam aut?
        Voluptates eius consequatur architecto ratione odio dolor blanditiis
        vero, similique libero, esse praesentium modi deserunt debitis ullam,
        quod adipisci! Modi iusto quas aliquid itaque commodi dolor nisi.
        Consequatur voluptates placeat fugit quaerat provident et, excepturi
        quibusdam facere. Sed aliquam fuga impedit. Fugiat, porro voluptatibus
        cum in quaerat deleniti iure ipsum qui eveniet at eaque maxime suscipit
        aperiam esse? Id possimus omnis, nulla est, vel eos voluptatibus rem
        quasi architecto qui placeat quaerat velit ducimus ullam aperiam itaque
        tempora corporis expedita a quidem. Numquam quod maiores quae omnis
        error architecto ut quisquam necessitatibus excepturi nihil tenetur vero
        ipsum cum illum quas tempore, corporis dolor, unde porro vel corrupti
        quam? Numquam quas soluta quibusdam fuga odit. Sed, nesciunt?
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img {
  height: 75vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  z-index: -1;
  background: #f7f2ef;
  .overlay {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 300px;
    background: linear-gradient(to bottom, rgba(246, 241, 238, 0), #f7f2ef);
    z-index: 1;
  }
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    position: absolute;
    top: 0;
  }
}
.post {
  margin-top: calc(75vh - 400px);
  position: relative;
  z-index: 5;
  padding: 200px 25px;

  @media screen and (min-width: 1080px) {
    padding: 200px 20%;
  }

  h1 {
    display: inline;
  }

  p {
    animation: fade 0.4s ease 250ms 1 both;
    opacity: 0;

    @keyframes fade {
      from {
        opacity: 0;
        transform: translate(0, 20px);
      }
      75% {
        transform: none;
      }
      to {
        opacity: 1;
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'post',
  computed: {
    title(): string {
      const img = this.imgs.find((img) => img.name === this.$route.params.img)
      return img?.title || 'Unknown image'
    },
    src(): string {
      return `${(this.$router as any).options.base}images/${
        this.$route.params.img
      }.jpg`
    }
  },
  methods: {
    getId(name: string) {
      return `${name}_title`
    }
  },
  data() {
    return {
      pVisible: true,
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
