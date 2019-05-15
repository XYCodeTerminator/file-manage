<template>
  <div class="message" :class="`message-${type}`" v-if="isVisible">
    <img class="icon" :src="require(`./assets/images/msg_${type}.svg`)" alt="msg-icon">
    <div class="content">{{content}}</div>
    <div v-if="hasClose" class="close-btn" @click="isVisible = false">&times;</div>
  </div>
</template>

<script>
export default {
  name: "XMessage",
  data () {
    return {
      type: 'error', // info success warning error 
      content: '错误提示！！！',
      hasClose: true,
      isVisible: true
    }
  }
}
</script>

<style lang="less" scoped>
  .message {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    // justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    max-width: 30vw;
    max-height: 10vh;
    border-radius: 6px;
    padding: 0 20px;
    font: 18px/1 'SimSun' sans-serif;
    overflow: hidden;
    &.message-success {
      background-color: #F2F8EC;
      color: #7EBE50;
    }
    &.message-info {
      background-color: #EEF2FB;
      color: #919398;
    }
    &.message-warning {
      background-color: #FCF0ED;
      color: #DCA450;
    }
    &.message-error {
      background-color: #FCF0F0;
      color: #E47570;
    }
    .icon {
      display: block;
      flex: 0 0 auto;
      width: 1.2em;
    }
    .content {
      flex: 0 1 auto;
      margin-left: 0.5em;
    }
    .close-btn {
      position: absolute;
      right: 15px;
      text-align: center;
      font-size: 1.5em;
      &:hover {
        cursor: pointer;
        color: #ccc;
      }
    }
  }
</style>

