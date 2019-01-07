<template>
  <div class="home-container">
    <div class="header">今天是1月7日jiashnag1cehsihh1hhg</div>
    <div class="sidebar">sidebar</div>
    <div class="content">content</div>
    <div class="footer">footer</div>
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

