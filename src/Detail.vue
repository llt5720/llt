<template>
  <div>
    <detail-banner :sightName='sightName' 
    :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'>1</detail-banner>
    <detail-header>1</detail-header> 
    <div class="content">
      <detail-list :list='list'>1</detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/detailHeader'
import DetailList from './components/detailList'
import axios from 'axios'
export default {
  name: 'Detail',
  components:{
      DetailBanner,
      DetailHeader,
      DetailList
  },
  data(){
    return{
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list: []
    }
  },
  methods:{
     getDetailInfo(){
       axios.get('/api/detail.json',{
         params:{
           id: this.$route.params.id
         }
       })
       .then(this.hendleGetDataSucc)
     },
     hendleGetDataSucc(res){
       res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
     }
  },
  mounted(){
    this.getDetailInfo()
  }
}
</script>

<style lang='stylus' scooped>
.content
   height:50rem
</style>