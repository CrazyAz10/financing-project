<template>
  <div class="header">
    <div class="logo">
      <img src="" alt="">
    </div>
    <div class="menu">
      <ul class="clearfix">
        <li>
          <a data-href="#banner">banner</a>
        </li>
        <li>
          menu2
        </li>
        <li>
          menu3
        </li>
        <li>
          menu4
        </li>
        <li>
          menu5
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'azHeader',
  components: {
  },
  data() {
    return {}
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 60px;
  background: var(--theme-header-color);
  box-shadow: 0px 2px 4px rgba(0,0,0,.2);
  .logo{
    float: left;
  }
  .menu{
    float: right;
    li{
      float: left;
      padding: 19px 15px;
      color: var(--text-white-a6) !important;
    }
  }
}
</style>
