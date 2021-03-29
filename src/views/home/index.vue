<template>
  <div id="home">
    <azHeader></azHeader>
    <banner></banner>
    <BackToTop />
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'
import azHeader from './components/azHeader'
import banner from './components/banner'
export default {
  name: 'home',
  components: {
    BackToTop,
    azHeader,
    banner,
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
  height: 3000px;
  h3{
    color: var(--text-white-a9);
  }
}
</style>