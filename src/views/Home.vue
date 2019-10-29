<template>
  <div class="home">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.Epub = Epub
export default {
  name: 'home',
  components: {
  },
  mounted () {
    this.book = new Epub('/2014_Book_UnderstandingSocietyAndNatural.epub')
    // 渲染 生成rendition对象
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight,
      method: 'default'
    }).display()
  }
}
</script>
