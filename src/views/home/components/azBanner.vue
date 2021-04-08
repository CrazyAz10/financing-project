<template>
  <section id="azBanner">
    <!-- <div class="content--canvas"></div> -->
    <canvas class="content--canvas"></canvas>
    <div class="wrap">
      <div class="logo">
        <img src="@/assets/images/DGZ-log.png" alt="">
      </div>
      <div class="tip">
        A leader in the digital economy era
      </div>
      <div class="slide" @click="toSmoooth('agencyPresentation')">
        <span></span>
        <span class="test-1"></span>
        <img src="@/assets/images/slide.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
// import '@/utils/swirl.js'
// import '@/utils/galaxy.js'
// import '@/utils/galaxy2.js'
import '@/utils/galaxy3.js'
export default {
  data(){
    return {}
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

<style lang="scss">

#azBanner{
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 64px;
  height: 100vh;
  text-align: center;
  .wrap{
    width: 100%;
  }
  .content--canvas{
    background: transparent;
    opacity: .3;
    position: absolute;
    left: -20px;
    top: 0;
    right: -20px;
    bottom: 0;
  }
  .logo{
    img{
      width: 250px;
    }
    margin-bottom: 56px;
  }
  .tip{
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
    padding: 16px;
    line-height: 33px;
    font-size: 24px;
    border-top: 1px solid #FFC23A;
    border-bottom: 1px solid #FFC23A;
  }
  .slide{
    margin-top: 123px;
    cursor: pointer;
    animation: test 1s linear infinite;
    span{
      display: block;
      width: 7px;
      height: 7px;
      margin: 17px auto 0;
      border-radius: 3.5px;
      background: #fff;
      opacity: .8;
      &:first-child{
        opacity: .5;
      }
    }
    img{
      display: block;
      width: 30px;
      margin: 14px auto 0;
      // animation: test-3 1s linear infinite;
    }
  }
}
@keyframes test {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(15px);
  }
  100% {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>