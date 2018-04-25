<template>
  <div class="my-box">
    <div class="top">
      <img src="../assets/avatar.png" alt="">
      <div>
        <div class="name">神厨小圣</div>
        <div class="button" @click="toPublish">发布视频</div>
      </div>
    </div>
    <div class="title">作品</div>
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
      list: [1, 2, 34, 45, 5, 66, 123, 234, 2342, 34, 234, 234]
    }
  },
  methods: {
    toDetail () {
      this.$router.push({ path: './detail' })
    },
    toPublish () {
      this.$router.push({ path: '/publish' })
    }
  }
}
</script>

<style lang="less">
.my-box {
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  overflow: hidden;
  .top {
    display: flex;
    align-items: center;
    padding: 20px 40px;
    img {
      margin-right: 30px;
    }
    .name {
      font-size: 20px;
      font-weight: 500;
      padding-bottom: 10px;
    }
    .button {
      color: white;
      font-size: 14px;
      padding: 5px 10px;
      background: #a5c73d;
      border-radius: 20px;
    }
  }
  .title {
    padding: 10px;
    text-align: center;
    color: white;
    background: #a5c73d;
  }
  .home-item {
    width: 33%;
    height: 153px;
    border: 1px solid #fff;
    background-image: url("../assets/my-img.png");
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
