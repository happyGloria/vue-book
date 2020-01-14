<template>
  <div class="ebook-popup-list">
    <div class="ebook-popup-title">
      <div class="ebook-popup-title-icon" @click="hideFontFamilySetting">
        <span class="icon icon-down2"></span>
      </div>
      <span class="ebook-popup-title-text"></span>
    </div>
  </div>
</template>
<script>
import { EbookMixin } from './mixin.js'
export default {
  mixins: [EbookMixin],
  methods: {
    hideFontFamilySetting () {

    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped></style>
