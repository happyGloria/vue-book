<template>
  <div class="ebook-reader">
    <div id="read" />
  </div>
</template>

<script>
import { EbookMixin } from './mixin.js'
import Epub from 'epubjs'
global.Epub = Epub
export default {
  mixins: [EbookMixin],
  mounted () {
    let filename = this.$route.params.filename.split('|').join('/')
    this.setFilename(filename)
      .then(() => this.initEpub())
  },
  methods: {
    initRendition () {

    },
    initEpub () {
      // 获取链接
      const url = `${this.$baseUrl}${this.filename}.epub`
      let innerWidth = (document.documentElement || document.body).clientWidth,
        innerHeight = (document.documentElement || document.body).clientHeight
      this.book = new Epub(url)
      this.setCurrentBook(this.book)
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        methods: 'default' // 微信的兼容性设置，这样在微信中就能打开了
      })
      this.rendition.display()

      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX,
          timeDiff = event.timeStamp - this.touchStartTime
        if (timeDiff < 500 && offsetX > 40) {
          this.pageNext()
        } else if (timeDiff < 500 && offsetX < -40) {
          this.pagePrev()
        } else {
          this.toggleTitleAndMenu()
        }
        /* event.preventDefault()
        event.stopPropagation() */
      })
    },
    pagePrev () {
      if (this.rendition) {
        this.rendition.prev()
        this.hideTitleAndMenu()
      }
    },
    pageNext () {
      if (this.rendition) {
        this.rendition.next()
        this.hideTitleAndMenu()
      }
    },
    hideTitleAndMenu () {
      this.setMenuVisible(false)
      // this.$store.dispatch('setMenuVisible', false)
    },
    toggleTitleAndMenu () {
      // this.$store.dispatch('setMenuVisible', !this.menuVisible)
      this.setMenuVisible(!this.menuVisible)
    }
  }
}
</script>

<style lang="scss">
</style>
