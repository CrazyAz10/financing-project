<template>
<div id='contactInformation'>
  <div class="main-title">
    PARTNER
  </div>
  <div class="content">
    <div class="email">
      <img src="@/assets/images/Email.png" alt="">
      <span>contact@dgzcap.com</span>
    </div>
    <div class="other">
      <div class="item">
        <img src="@/assets/images/twitter.png" alt="">
        <p>TWITTER</p>
      </div>
      <div class="item">
        <img src="@/assets/images/medium.png" alt="">
        <p>MEDIUM</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: '',
  props: {},
  mixins: [],
  components: {},
  data() {
  return {

  }
  },
  created() {

  },
  mounted() {

  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  filters: {

  },
}
</script>

<style lang='scss' scoped>
#contactInformation{
  text-align: center;
  margin-top: 200px;
  padding-bottom: 115px;
  .email{
    margin-top: 47px;
    font-size: 18px; 
    img{
      width: 40px;
      margin-right: 20px;
      vertical-align: middle;
    }
    span{
      line-height: 25px;
      position: relative;
      top: 5px;
    }
  }
  .other{
    width: 350px;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-around;
    .item{
      width: 62px;
      display: inline-block;
      img{
        width: 35px;
      }
      p{
        margin-top: 5px;
      }
    }
  }
}
</style>