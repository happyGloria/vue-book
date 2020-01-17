<template>
  <div class="ebook-menu">
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
    <!-- 字体&字体大小 -->
    <ebook-setting-font />
  </div>
</template>
<script>
import { EbookMixin } from './mixin.js'
import EbookSettingFont from './EbookSettingFont'
export default {
  mixins: [EbookMixin],
  components: {
    EbookSettingFont
  },
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
      this.setSettingVisible(name)
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
