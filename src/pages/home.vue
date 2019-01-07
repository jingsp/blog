<template>
  <div class="home-container">
    <div class="header">1111</div>
    <div class="sidebar">3333333</div>
    <div class="content">222222</div>
    <div class="footer">1111111111</div>
  </div>
</template>
<script>

export default {
  data () {
   return {}
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  // display: grid;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 60px 40px;
  .header {
    background-color: greenyellow;
  }
  .sidebar {
    grid-row-start: 2;
    grid-column-start: 2;
    background-color: goldenrod;
  } 
  .content {
    background-color: plum;
  }
  .footer {
    background-color: burlywood;
  }
}
</style>

