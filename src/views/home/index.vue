<template>
  <div id="home">
    <div class="bg"></div>
    <div class="main">
      <azHeader></azHeader>
      <azBanner></azBanner>
      <agencyPresentation></agencyPresentation>
      <team></team>
      <partner></partner>
      <contactInformation></contactInformation>
    </div>
    <BackToTop />
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'
import azHeader from './components/azHeader'
import azBanner from './components/azBanner'
import agencyPresentation from './components/agencyPresentation'
import team from './components/team'
import partner from './components/partner'
import contactInformation from './components/contactInformation'
export default {
  name: 'home',
  components: {
    BackToTop,
    azHeader,
    azBanner,
    agencyPresentation,
    team,
    partner,
    contactInformation,
  },
  data() {
    return {}
  },
  mounted() {
    
  }
}
</script>


<style lang="scss" scoped>
#home{
  overflow-x: hidden;
  position: relative;
  padding: 60px 20px 0;
  background: url('~@/assets/images/bg-1.png') no-repeat center center/cover;
  h3{
    color: var(--text-white-a9);
  }
  .main{
    position: relative;
    z-index: 10;
  }
  .bg{
    position: absolute;    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url('~@/assets/images/bg-2.png') no-repeat center center/100% 100%;
  }
}
</style>