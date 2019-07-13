<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg">
    <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-member"> 
            <span class="iconfont banner-icon">&#xe606;</span>
            {{this.gallaryImgs.length}}</div>
    </div>
  </div>
  <fade-animation>
  <common-gallary :imgs='imgs' v-show='showGallary'
   @close='handleGallaryClose'></common-gallary>
  </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/gallary'
import FadeAnimation from '@/common/fade/fadeAnimation'
export default {
  name: 'DetailBanner',
  components:{
    CommonGallary,
    FadeAnimation
  },
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  data(){
    return{
      showGallary:false,
      imgs:['http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20196/b1b69cada0488a03ba6791b5ba91c5b1.jpg',
        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20196/b1b69cada0488a03ba6791b5ba91c5b1.jpg']
  } 
  },
  methods:{
    handleBannerClick(){
       this.showGallary=true
    },
    handleGallaryClose(){
      this.showGallary=false
    }
  }
}
</script>

<style lang='stylus' scoped>
.banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
        width:100%
    .banner-info
        display:flex
        position:absolute
        left:0
        right:0
        bottom:0
        line-height:.6rem
        color:#fff
        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
        .banner-title
            flex:1
            font-size:.32rem
            padding:0 .2rem
        .banner-member    
            height:.32rem 
            margin-top:.14rem
            padding:0 .4rem
            line-height:.32rem
            border-radius:.2rem
            background:rgba(0,0,0,.8)
            font-size:.24rem
            .banner-icon
               font-size:.24rem
</style>