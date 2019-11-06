<template>
  <div id="app">
    <p class="text">ABCDEFG</p>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['test'])
  },
  mounted () {
    this.$store.dispatch('setTest', 12).then(() => {
      console.log('test: ', this.test)
    })
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>
<style lang="scss">
@import './scss/global.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: hsl(210, 29%, 24%);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.text {
  font-family: 'Days One';
  font-size: px2rem(20);
  color: orange;
}
</style>
