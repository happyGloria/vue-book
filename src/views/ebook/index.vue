<template>
  <div class="ebook">
    <ebook-title />
    <ebook-reader />
    <ebook-menu />
  </div>
</template>

<script>
import EbookTitle from '@/components/ebook/EbookTitle'
import EbookMenu from '@/components/ebook/EbookMenu'
import EbookReader from '@/components/ebook/EbookReader'
export default {
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.ebook {
  font-size: 12px;
}
</style>
