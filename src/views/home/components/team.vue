<template>
<div id="team">
  <el-row :gutter="10">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="map">
        <img class="left-map" src="@/assets/images/map-left.png" alt="">
        <img class="right-map" src="@/assets/images/map-right.png" alt="">
        <div class="punctuation usa"><span>USA</span></div>
        <div class="punctuation china"><span>CHINA</span></div>
        <div class="punctuation singapore"><span>SIGAPORE</span></div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="content">
        <div>
          <div class="main-title">
            <span>
            TEAM
            </span>
          </div>
          <div class="main-content">
            The founding team of DGZ Capital is composed of top overseas investment experts and financial institutions. <br/>
            The team members are mainly distributed in Singapore, China, the United States and other countries. <br/>
            There are more than 50 global members, who have been engaged in the Internet, finance,<br/>
            IT and other industries, and have many years of investment experience in traditional finance and blockchain fields.
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: '',
  props: {},
  mixins: [],
  components: {
    
  },
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
    
  }
}
</script>

<style lang="scss">
  #team{
    padding: 140px 0 0;
    .map{
      display: flex;
      padding: 50px;
      position: relative;
      height: 100%;
      img{
        height: 100%;
      }
      .left-map{
        width: 60%;
      }
      .right-map{
        margin-left: 5%;
        width: 35%;
      }
      .punctuation{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
        min-height: 24px;
        padding: 0 20px;
        font-size: 20px;
        color: #333333;
        font-weight: bold;
        span{
          position: relative;
          z-index: 10;
        }
        &::before{
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          // z-index: -1;
          transform: skew(-20deg);
          background: #FFC23A;
          box-shadow: 0px 2px 8px 2px rgba(255, 194, 58, 0.5);
          animation: flashing 2s linear infinite;
        }
        &.usa{
          right: 15%;
          top: 30%;
        }
        &.china{
          left: 40%;
          top: 40%;
        }
        &.singapore{
          left: 35%;
          bottom: 35%;
        }
      }
    }
    .content{
      height: 100%;
      display: flex;
      justify-items: center;
      justify-content: center;
      align-items: center;
      &>div{
        width: 100%;
      }
    }
  }
  
  @keyframes flashing {
    0% {
      box-shadow: 0px 2px 8px 2px rgba(255, 194, 58, 0.5);
    }
    50% {
      box-shadow: 0px 3px 10px 3px rgba(255, 194, 58, 0.8);
    }
    100% {
      box-shadow: 0px 2px 8px 2px rgba(255, 194, 58, 0.5);
    }
  }
</style>