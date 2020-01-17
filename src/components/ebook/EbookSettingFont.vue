<template>
  <transition name="slide-up">
    <div v-show="menuVisible && settingVisible == 'A'"
         class="setting-wrapper">
      <div class="setting-font-size">
        <div class="preview">
          <span :style="{fontSize: `${fontSizeList[0].fontSize}px`}">A</span>
        </div>
        <div class="select">
          <div v-for="(item, index) in fontSizeList"
               :key="index"
               class="select-wrapper"
               @click="setFontSize(item.fontSize)">
            <div class="line" />
            <div class="point-wrapper">
              <div v-show="defaultFontSize === item.fontSize"
                   class="point">
                <div class="small-point" />
              </div>
            </div>
            <div class="line" />
          </div>
        </div>
        <div class="preview">
          <span :style="{fontSize: `${fontSizeList[fontSizeList.length - 1].fontSize}px`}">A</span>
        </div>
      </div>
      <div class="setting-font-family"
           @click.stop="showFontFamilySetting">
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">{{ defaultFontFamily }}</span>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="icon icon-forward" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { EbookMixin } from './mixin.js'
import { FONT_SIZE_LIST } from './book.js'
import { saveFontSize } from '@/utils/localStorage'
export default {
  mixins: [EbookMixin],
  data () {
    return {
      fontSizeList: FONT_SIZE_LIST
    }
  },
  methods: {
    showFontFamilySetting () {
      this.setFontFamilyVisible(true)
    },
    setFontSize (fontSize) {
      this.setDefaultFontSize(fontSize)
      saveFontSize(this.filename, fontSize)
      this.currentBook.rendition.themes.fontSize(fontSize)
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
        display: flex;
        flex: 1;
        align-items: center;
        &:first-child {
          .line:first-child {
            border-top: none;
          }
        }
        &:last-child{
          .line:last-child {
            border-top: none;
          }
        }
        .line {
          flex: 1;
          height: 0;
          border-top: px2rem(1) solid #ccc;
        }
        .point-wrapper {
          position: relative;
          flex: 0 0 0;
          width: 0;
          height: px2rem(7);
          border-left: px2rem(1) solid #ccc;
          .point {
            position: absolute;
            top: px2rem(-8);
            left: px2rem(-10);
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            background: white;
            border: px2rem(1) solid #ccc;
            box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);
            @include center;
            .small-point {
              width: px2rem(5);
              height: px2rem(5);
              background: black;
              border-radius: 50%;
            }
          }
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
