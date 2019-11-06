<template>
  <div class="ebook">
    <ebook-reader />
  </div>
</template>

<script>
import EbookReader from '@/components/ebook/EbookReader'
export default {
  components: {
    EbookReader
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
