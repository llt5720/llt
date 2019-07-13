<template>
  <div class="header">
<div class="header-left">
  <div class="iconfont back-icon">&#xe60e;</div> 
</div>
<div class="header-input">
   <span class="iconfont">&#xe6a2;</span>
   输入城市/景点/游玩主题</div>
   <router-link to='/city'>
<div class="header-right">{{city}}
   <span class="iconfont arrow-icon">&#xe6aa;</span>
</div>
</router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
    ...mapState(['city']),
  }
}
</script>

<style lang="stylus" scoped>
.header
   display:flex
   height:.86rem 
   background: #00bcd4
   color:#fff  
  .header-left
     width:.64rem
     float:left
     line-height:.86rem
   //   margin-left:.2rem
     .back-icon
        text-align:center
        font-size:.4rem
   .header-input
     flex:1
     height:.64rem
     line-height:.64rem
     height:.64rem
     margin-top:.12rem
     margin-left:.2rem
     padding-left:.2rem
     background:#fff
     border-radius:.1rem
     color:#ccc
   .header-right
     min-width:1.04rem
     padding:.1rem
     float:right
     text-align:center
     line-height:.86rem
     color:#fff
     .arrow-icon
        margin-left:.04rem
        font-szie:.24rem
</style>

