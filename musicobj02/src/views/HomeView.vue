<template>
  <div class="home">
    <!-- 头部导航 -->
    <top-Nav></top-Nav>
    <!-- 轮播图 -->
    <swiper-Com></swiper-Com>
    <!-- icon列表 -->
    <icon-List></icon-List>
    <!-- 音乐列表 -->
    <music-List></music-List>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import topNav from '@/components/TopNav.vue'
import swiperCom from '@/components/SwiperCom.vue'
import iconList from '@/components/IconList.vue'
import musicList from '@/components/MusicList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    topNav,
    swiperCom,
    iconList,
    musicList
  }
}
</script>

<style>
#d1 {
  width: 3rem;
  height: 3rem;
  background: skyblue;
  font-size: 0.3rem;
}
</style>
