<template>
  <div class="home-container">
    <!-- aaaaaa -->
    <v-touch
        v-on:swipeleft="onSwipeLeft()"
        v-on:swiperight="onSwipeRight()"
        class="book-content">
        <transition name="fade-transverse">
          <div class="test-container">{{text}}</div>
        </transition>
    </v-touch>
  </div>    
</template>
<script>

export default {
  data () {
    return {
      text: '测试内容'
    }
  },
  methods: {
    onSwipeLeft () {
      this.text = '左滑'
    },
    onSwipeRight () {
      this.text = '右滑'
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-transverse-leave-active,
.fade-transverse-enter-active {
  transition: all .5s;
}
.fade-transverse-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transverse-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.home-container {
  height: 100vh;
  width: 100%;
  overflow: auto;
  // background-color: #a70918;
  .test-container {
    width: 200px;
    height: 200px;
    background-color: pink;
  }
  .btn-wrapper {
    position: absolute;
    top: 227px;
    border-radius: 25px;
    .btn {   
      padding: 8px 30px;
      width: 172px;
      height: 40px;
      border: 0 none;
      border-radius: 25px;
      outline: none;    
      font-weight: 600;
      font-size: 28px;
      background-color: #015239;
      color: #e7c69c;
    }
  }
}
</style>

