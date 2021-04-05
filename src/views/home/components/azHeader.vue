<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/DGZ-log.png" alt="">
    </div>
    <div class="menu">
      <ul class="clearfix">
        <li @click="toSmoooth('azBanner')">
          <a data-href="#azBanner">HOME</a>
        </li>
        <li @click="toSmoooth('agencyPresentation')">
          <a data-href="#agencyPresentation">Agency presentation</a>
        </li>
        <li @click="toSmoooth('team')">
          <a data-href="#team">team</a>
        </li>
        <li @click="toSmoooth('partner')">
          <a data-href="#partner">Partner</a>
        </li>
        <li>
          <a data-href="#contactInformation" @click="toSmoooth('contactInformation')">contact US</a>
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
    
  },
  methods: {
    toSmoooth(id) {
      document.querySelector(('#'+id)).scrollIntoView({
        behavior: "smooth"
      });
    }
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
  padding: 0 50px;
  background: var(--theme-header-color);
  box-shadow: 0px 2px 4px rgba(0,0,0,.2);
  .logo{
    float: left;
    padding: 10px 0;
    img{
      height: 40px;
    }
  }
  .menu{
    float: right;
    li{
      float: left;
      font-size: 16px;
      margin-left: 50px;
      padding: 19px 10px;
      cursor: pointer;
      color: var(--text-white-a6);
      &:hover{
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 980px){
  .menu{
    display: none!important;;
  }
}
</style>
