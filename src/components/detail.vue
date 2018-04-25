<template>
  <div class="detail-box">
    <div class="title">家庭仔骨牛排</div>
    <video width="100%" height="100%" src="http://ugcws.video.gtimg.com/g05609n3y38.p712.1.mp4?sdtfrom=v1010&guid=4c488a4164128cb0fca01729a21a5620&vkey=F814D0B91EDDDE98883F327F2832F63A74906F8DC38CFB85BABA7C57B9ED94BDA4A31E3FC60936D25EF2CF3FCBEB554C8CAA4826E2433FB22EE0A3C1C4E7069DE39ACB7077E1F371353CFBE667B1223BABC69A9442351A1F7592627862F425CAEBBF67AEF14E964E643B712AFE62FAC47EDBBB4A2AF7D2B7" poster="../assets/detail-img.png" preload="none" controls="controls"></video>
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
      if (!this.value) {
        return
      }
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
    padding: 10px;
    display: flex;
    justify-content: center;
    background: white;
    border-top: 1px solid #e8e8e8;
    input {
      width: 90%;
      background: #dcdddd;
      padding: 10px;
      border-radius: 20px;
    }
  }
}
</style>
