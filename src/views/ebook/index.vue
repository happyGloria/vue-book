<template>
  <div class="ebook">
    <ebook-title />
    <ebook-reader />
  </div>
</template>

<script>
import EbookTitle from '@/components/ebook/EbookTitle'
import EbookReader from '@/components/ebook/EbookReader'
export default {
  components: {
    EbookReader,
    EbookTitle
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
