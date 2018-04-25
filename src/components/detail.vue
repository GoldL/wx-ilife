<template>
  <div class="detail-box">
    <div class="title">家庭仔骨牛排</div>
    <img src="../assets/detail-img.png" width="100%" alt="">
    <div class="content">
      <img src="../assets/avatar.png"  @click="toMy" width="70px" height="70px" alt="">
      <div  @click="toMy">神厨小圣</div>
      <div class="button" @click="toMy">个人主页</div>
      <div class="button">购买视频食材</div>
    </div>
    <div class="introduce">《家庭仔骨牛排》#牛排季#新乡市财新鲜购，买牛排就来轻松爱生活！</div>
    <div class="title">评价</div>
    <ul>
      <li class="content-item" v-for="(item, index) in list" :key="index">
        <img src="../assets/avatar.png" width="30px" height="30px" alt="">
        <span>{{item.name}}: {{item.content}}</span>
      </li>
    </ul>
    <nav class="f-bar">
      <input type="text" v-model="value" placeholder="有爱评论，说点好听的 ~" @keyup.enter="addContent">
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { name: '菜鸟熊二', content: '做起来真的很简单！' },
        { name: '英雄传奇', content: '昨天买了这款肉，很好吃' },
        { name: '可爱的广告君', content: '顶上去！' },
        { name: '繁华落幕', content: '看起来好好吃啊！' },
        { name: '吃货玩家', content: '这牛排我能吃好几块！' },
        { name: '菜鸟熊二', content: '做起来真的很简单！' }
      ],
      value: ''
    }
  },
  methods: {
    addContent () {
      this.list.unshift({ name: '帅到掉渣', content: this.value })
      this.value = ''
    },
    toMy () {
      this.$router.push({ path: '/my' })
    }
  }
}
</script>

<style lang="less">
.detail-box {
  font-size: 16px;
  padding-bottom: 50px;
  .title {
    padding: 10px;
    text-align: center;
    color: white;
    background: #a5c73d;
  }
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .button {
      color: white;
      padding: 5px 10px;
      background: #a5c73d;
      border-radius: 20px;
    }
  }
  .introduce {
    font-size: 12px;
    padding: 15px 0;
  }
  .content-item {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 10px 15px;
    span {
      padding-left: 15px;
    }
  }
  .f-bar {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: white;
    input {
      width: 90%;
      background: #dcdddd;
      padding: 10px;
      border-radius: 20px;
    }
  }
}
</style>
