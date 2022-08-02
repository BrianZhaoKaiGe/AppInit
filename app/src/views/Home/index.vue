<template>
  <div>
    <!-- 这是state  {{count}} <button @click="add">jia1</button> -->
    <!-- 三级联动组件 -->
    <TypeNav></TypeNav>
    <!-- 快报组件 -->
    <ListContainer></ListContainer>
    <!-- 今日推荐 -->
    <Recommend></Recommend>
    <!-- 商品排行 -->
    <Rank></Rank>
    <!-- 猜你喜欢 -->
    <Like></Like>
    <!-- 家用电器 -->
    <Floor v-for="(floor) in floorList" :key="floor.id" :list='floor'></Floor>
    <!-- 商标 -->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
import {reqCategoryList} from '../../api'
import {mapState} from 'vuex'
export default {
data() {
  return {
    
  }
},
created() {
// this.aa()
},
mounted() {
  this.$store.dispatch('getFloorList')
 
},
computed:{
  ...mapState({
    floorList:(state)=> state.home.floorList
  })
},
methods: {
  async aa(){
        const res = await reqCategoryList()
  console.log(res);
  },
  // add(){
  //   this.$store.commit('add')
  // }
},
components:{
  ListContainer,
  Recommend,
  Rank,
  Like,
  Floor,
  Brand
}
}
</script>

<style>
</style>