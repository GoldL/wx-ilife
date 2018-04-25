<template>
  <div>
    <div>
      <div class="progress" v-show="precent !== 100">
        <x-progress :percent='precent'></x-progress>
      </div>
      <div class="progress-text">
        <span>{{precent}}%</span>
      </div>
    </div>
    <div class="success-img" v-show="precent === 100">
      <img src="../assets/success-img.png" alt="">
    </div>
  </div>
</template>

<script>
import { XProgress } from 'vux'
export default {
  components: {
    XProgress
  },
  created () {
    setTimeout(() => {
      this.addTime()
    }, 200)
  },
  data () {
    return {
      precent: 0,
      time: ''
    }
  },
  methods: {
    addTime () {
      this.time = setInterval(() => {
        if (this.precent < 100) {
          this.precent++
        } else {
          clearInterval(this.time)
          setTimeout(() => {
            this.$router.push({ path: '/my' })
          }, 1000)
        }
      }, 50)
    }
  }
}
</script>

<style lang="less">
.progress {
  margin-top: 35vh;
}
.progress-text {
  position: fixed;
  top: 36vh;
  left: 20vw;
  color: white;
}
.success-img {
  display: flex;
  justify-content: center;
  margin-top: 25vh;
}
.weui-progress {
  width: 80%;
  padding-left: 15vw;
  .weui-progress__bar {
    height: 30px;
    border-radius: 20px;
    .weui-progress__inner-bar {
      border-radius: 20px;
      background: #a5c73d;
    }
  }
}
</style>
