<template>
<div id="partner">
  <div class="main-title">
    <span>
    PARTNER
    </span>
  </div>
  <div class="content">
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="3" v-for="(item,index) in partnerList" :key="index">
        <div class="item">
          <img :src="item.logo" alt="" @click="linkTo(item.home)">
        </div>
      </el-col>
    </el-row>
  </div>
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
      partnerList: [
        {
          logo: require('@/assets/images/binance.png'),
          home: 'https://www.binance.com/',
        },
        {
          logo: require('@/assets/images/okex.png'),
          home: 'https://www.okexcn.com/',
        },
        {
          logo: require('@/assets/images/huobi.png'),
          home: 'https://www.huobi.li/',
        },
        {
          logo: require('@/assets/images/bitmnin.png'),
          home: 'https://www.bitmain.com/',
        },
        {
          logo: require('@/assets/images/cointelegreph.png'),
          home: 'https://cointelegraph.com/',
        },
        {
          logo: require('@/assets/images/coindesk.png'),
          home: 'https://www.coindesk.com/',
        },
      ]
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
    linkTo(link) {
      window.open(link);
    }
  },
  filters: {
    
  }
}
</script>

<style lang="scss" scoped>
  #partner{
    padding-top: 340px;
    .content{
      padding: 100px 0 ;
      .item{
        display: flex;
        height: 120px;
        justify-items: center;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 20px;
        img{
          width: 100%;
          opacity: .8;
          cursor: pointer;
          &:hover{
            opacity: 1;
          }
        }
      }
    }
  }
</style>