<template>
  <div class="home-box">
    <ul>
      <li class="home-item" v-for="(item, index) in list" :key="index" @click="toDetail">
      </li>
    </ul>
    <tabbar class="tabbar-box">
      <tabbar-item selected link="/home">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      list: [1, 2, 34, 45, 5, 66, 13, 12]
    }
  },
  methods: {
    toDetail () {
      this.$router.push('./detail')
    }
  }
}
</script>

<style lang="less">
.home-box {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  overflow: hidden;
  .home-item {
    width: 50%;
    height: 236px;
    border: 1px solid #fff;
    background-image: url("../assets/home-item.png");
    background-repeat: no-repeat;
    background-size: contain;
    float: left;
  }
  .tabbar-box {
    position: fixed !important;
    left: 0;
    bottom: 0;
  }
}
</style>
