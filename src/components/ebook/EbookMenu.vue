<template>
  <transition name="slide-up">
    <div class="menu-wrapper"
         v-show="menuVisible">
      <div v-for="item in icons"
           :key="item.name"
           class="icon-wrapper"
           @click="menuClickFn(item.name)">
        <i :class="['icon', `icon-${item.name}`]" />
      </div>
    </div>
  </transition>
</template>
<script>
import { EbookMixin } from './mixin.js'
export default {
  mixins: [ EbookMixin ],
  data () {
    return {
      icons: [
        { name: 'menu' },
        { name: 'progress' },
        { name: 'bright' },
        { name: 'A' }
      ]
    }
  },
  methods: {
    menuClickFn (name) {
      switch (name) {
        case 'menu':
          break
        case 'progress':
          break
        case 'bright':
          break
        case 'A':
          break
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/scss/global.scss';
.menu-wrapper {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(-6) px2rem(6) rgba(0, 0, 0, .15);
  .icon-wrapper {
    flex: 1;
    @include center;
  }
}
</style>
