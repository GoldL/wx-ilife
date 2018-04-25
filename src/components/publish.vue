<template>
  <div class="publish-box">
    <div class="top">
      产品名称：<input type="text" v-model="name">
    </div>
    <textarea class="text" v-model="content" placeholder="说点什么..." cols="30" rows="10"></textarea>
    <div class="middle">
      <img src="../assets/add-img.png" v-show="isadd" @click="isadd = false">
      <img src="../assets/over-img.png" v-show="!isadd" @click="isadd = true">
    </div>
    <div class="bottom">
      <span @click="toSuccess">确定发布</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      content: '',
      isadd: true
    }
  },
  methods: {
    toSuccess () {
      this.$router.push({ path: '/success' })
    }
  }
}
</script>

<style lang="less">
.publish-box {
  font-size: 14px;
  .top {
    padding: 15px;
    color: white;
    background: #a5c73d;
    input {
      padding: 10px;
      width: 70%;
      color: white;
      background: #a5c73d;
    }
  }
  .text {
    width: 100%;
    padding: 20px;
  }
  .middle {
    padding: 20px;
  }
  .bottom {
    border-top: 1px solid #e8e8e8;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    span {
      font-size: 16px;
      display: inline-block;
      width: 30%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: white;
      background: #a5c73d;
      border-radius: 4px;
    }
  }
}
</style>
