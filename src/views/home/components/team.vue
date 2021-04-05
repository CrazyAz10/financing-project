<template>
<div id="team">
  <el-row :gutter="10">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="map">
        <img class="left-map" src="@/assets/images/map-left.png" alt="">
        <img class="right-map" src="@/assets/images/map-right.png" alt="">
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="content">
        <div>
          <div class="main-title">
            TEAM
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

<style lang="scss" scoped>
  #team{
    padding: 140px 0 0;
    .map{
      display: flex;
      padding: 50px;
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
</style>