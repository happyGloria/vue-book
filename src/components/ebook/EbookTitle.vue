<template>
  <transition name="slide-down">
    <div class="title-wrapper"
         v-show="menuVisible">
      <div class="left">
        <i class="icon icon-back" @click="backFn" />
      </div>
      <ul class="right">
        <li class="icon-wrapper">
          <i class="icon icon-shelf"></i>
        </li>
        <li class="icon-wrapper">
          <i class="icon icon-cart"></i>
        </li>
        <li class="icon-wrapper">
          <i class="icon icon-more"></i>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['menuVisible'])
  },
  methods: {
    backFn () {
    }
  }
}
</script>

<style lang="scss">
@import '~@/scss/global.scss';
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
  .left {
    flex: 0 0 px2rem(60);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(40);
      @include center;
    }
  }
}
</style>
