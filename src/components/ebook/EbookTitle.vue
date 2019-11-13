<template>
  <transition name="slide-down">
    <div class="title-wrapper"
         v-show="menuVisible">
      <div class="left">
        <i class="icon icon-back"
           @click="backFn" />
      </div>
      <ul class="right">
        <li v-for="item in rightIcons"
            :key="item.name"
            class="icon-wrapper"
            @click="iconClickFn(item.name)">
          <i :class="['icon', `icon-${item.name}`]" />
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import { EbookMixin } from './mixin.js'
export default {
  mixins: [ EbookMixin ],
  data () {
    return {
      rightIcons: [
        { name: 'shelf' },
        { name: 'cart' },
        { name: 'more' }
      ]
    }
  },
  methods: {
    backFn () {
      // TODO:
    },
    iconClickFn (name) {
      switch (name) {
        case 'shelf':
          break
        case 'cart':
          break
        case 'more':
          break
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/scss/global.scss';
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(6) px2rem(6) rgba(0, 0, 0, .15);
  .left {
    flex: 0 0 px2rem(60);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(40);
      @include center;
    }
  }
}
</style>
