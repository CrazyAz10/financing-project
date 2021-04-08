<template>
<div id='contactInformation'>
  <div class="main-title">
    <span>
    CONTACT INFORMATION
    </span>
  </div>
  <div class="content">
    <div class="email">
      <img src="@/assets/images/Email.png" alt="">
      <span>contact@dgzcap.com</span>
    </div>
    <div class="other">
      <div class="item twitter" @click="linkTo()">
        <div class="img"></div>
        <p>TWITTER</p>
      </div>
      <div class="item medium" @click="linkTo()">
        <div class="img"></div>
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
    linkTo(link){
      window.open(link)
    }
  },
  filters: {

  },
}
</script>

<style lang='scss' scoped>
@import "~@/styles/them.scss";
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
      cursor: pointer;
      &:hover{
        color: $--color-primary;
        &.twitter{
          .img{
            background: url('~@/assets/images/twitter-l.png') no-repeat center center /cover;
          }
        }
        &.medium{
          .img{
            background: url('~@/assets/images/medium-l.png') no-repeat center center /cover;
          }
        }
      }
      .img{
        margin: 0 auto;
        width: 35px;
        height: 35px;
        
      }
      &.twitter{
        .img{
          background: url('~@/assets/images/twitter.png') no-repeat center center /cover;
        }
      }
      &.medium{
        .img{
          background: url('~@/assets/images/medium.png') no-repeat center center /cover;
        }
      }
      p{
        margin-top: 5px;
      }
    }
  }
}
</style>