<template>
  <transition name="slide-up">
    <div v-show="menuVisible && settingVisible === 0"
         class="setting-wrapper">
      <div class="setting-font-size">
        <div ref="left"
             class="preview">
          <span ref="leftText"
                :style="styleLeft">A</span>
        </div>
        <div class="select">
          <div v-for="(item, index) in fontSizeList"
               :key="index"
               class="select-wrapper">
            <div class="line"></div>
            <div class="pointer-wrapper">
              <div v-show="defaultFontSize === item.fontSize"
                   class="point">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div ref="right"
             class="preview">
          <span ref="rightText"
                :style="styleRight">A</span>
        </div>
      </div>
      <div class="setting-font-family"
           @click="showFontFamilySetting">
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">{{ defaultFontFamily }}</span>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="icon icon-forward"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { EbookMixin } from './mixin.js'
export default {
  mixins: [EbookMixin],
  data () {
    return {
      styleLeft: {},
      styleRight: {}
    }
  },
  watch: {
    settingVisible (v) {
      debugger
      if (v === 0) {
        this.$nextTick(() => {
          this.genStyle()
        })
      }
    }
  },
  methods: {
    genStyle () {
      let rect = this.$refs.left.getBoundingClientRect(),
        rectText = this.$refs.leftText.getBoundingClientRect()
      const left = rect.width,
        right = rect.width,
        leftText = rectText.width,
        rightText = rectText.width,
        item = this.$refs.items[0].getBoundingClientRect().width
      this.styleLeft = {
        marginLeft: (left + item - leftText) / 2 + 'px',
        fontSize: this.fontSizeList[0].fontSize + 'px'
      }
      this.styleRight = {
        marginRight: (right + item - rightText) / 2 + 'px',
        fontSize: this.fontSizeList[this.fontSizeList.length - 1].fontSize + 'px'
      }
    },
    showFontFamilySetting () {
      this.setFontFamilyVisible(true)
    }
  }
}
</script>

<style lang="scss">
@import '~@/scss/global.scss';
.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  z-index: 190;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: px2rem(90);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
  .setting-font-size {
    flex: 2;
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 px2rem(40);
      @include center;
    }
    .select {
      display: flex;
      flex: 1;
      .select-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        .line {
          flex: 1;
          height: 0;
          border-top: none;
        }
      }
    }
  }
  .setting-font-family {
    flex: 1;
    font-size: px2rem(14);
    @include center;
    .setting-font-family-text-wrapper, .setting-font-family-icon-wrapper {
      @include center;
    }
  }
}
</style>
