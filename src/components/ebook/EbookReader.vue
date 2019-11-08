<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'
global.Epub = Epub
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['filename'])
  },
  mounted () {
    const filename = this.$route.params.filename.split('|').join('/')
    this.$store.dispatch('setFilename', filename)
      .then(() => this.initEpub())
  },
  methods: {
    initEpub () {
      // 获取链接
      const baseUrl = 'http://192.168.12.45:8081/epub/'
      const url = `${baseUrl}${this.filename}.epub`
      let innerWidth = (document.documentElement || document.body).clientWidth,
        innerHeight = (document.documentElement || document.body).clientHeight
      this.book = new Epub(url)
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
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const timeDiff = event.timeStamp - this.touchStartTime
        console.log(offsetX, timeDiff)
        if (timeDiff < 500 && offsetX > 40) {
          this.pageNext()
        } else if (timeDiff < 500 && offsetX < -40) {
          this.pagePrev()
        } else {
          this.showTitleAndMenu()
        }
        /* event.preventDefault()
        event.stopPropagation() */
      })
    },
    pagePrev () {
      if (this.rendition) {
        this.rendition.prev()
        this.$store.dispatch('setMenuVisible', false)
      }
    },
    pageNext () {
      if (this.rendition) {
        this.rendition.next()
        this.$store.dispatch('setMenuVisible', false)
      }
    },
    showTitleAndMenu () {
      this.$store.dispatch('setMenuVisible', true)
    }
  }
}
</script>

<style lang="scss">
</style>
