<template>
  <div class="home">
    <div class="left">
      <div class="left-title">
        <button class="btn-add"></button>
        <span>用户列表</span>
        <button class="btn-delete"></button>
      </div>
      <div class="user-list">
        <div class="user-item">用户1</div>
        <div class="user-item">用户2</div>
        <div class="user-item">用户3</div>
      </div>
    </div>
    <div class="container">
      <div class="header clearfix">
        <div class="current-user">用户1</div>
        <button class="sign-out"></button>
      </div>
      <div class="body"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="less" scoped>
  .home {
    background-color: #f0f2f5;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    .left {
      flex: 0 0 200px;
      background-color: #fff;
      .left-title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        padding: 15px;
        width: 100%;
        text-align: center;
        font: 20px/1 simhei serif;
        color: #0288D1;
        button {
          outline: none;
          border: none;
          cursor: pointer;
        }
        .btn-add {
          width: 25px;
          height: 25px;
          background: url(../assets/images/add.svg) no-repeat;
          background-size: cover;
        }
        .btn-delete {
          width: 30px;
          height: 30px;
          background: url(../assets/images/delete.svg) no-repeat;
          background-size: cover;
        }
      }
      .user-list { 
        margin-top: 10px;
        overflow-y: auto;
        .user-item {
          width: 130px;
          height: 60px;
          margin: 0 auto;
          text-align: center;
          font: 24px/60px serif;
          font-weight: bold;
          border-radius: 5px;
          color: #fff;
          background-color: #ccc;
          margin: 15px auto;
          cursor: pointer;
          box-shadow: -2px 2px 4px 0 rgba(0,0,0,0.2);
          transform: .3s;
          &:hover {
            box-shadow: -6px 6px 8px 0 rgba(0,0,0,0.2);
            transform: scale(1.1) translate3d(6px, -6px, 20px);
          }
          &:nth-of-type(1) {
            background-color: #87d068;
          }
        } 
      }
    }
    .container {
      flex: 1 1 auto;
      height: 100%;
      .header {
        height: 64px;
        background: #fff;
        .current-user {
          width: 200px;
          height: 100%;
          font: 30px/64px simhei serif;
          text-align: center;
          margin: 0 auto;
          font-weight: 700;
          color: #03A9F4;
          float: left;
          // background: #bfa;
        }
        .sign-out {
          width: 30px;
          height: 30px;
          background: url(../assets/images/sign_out.svg) no-repeat;
          background-size: cover;
          border: none;
          outline: none;
          float: right;
        }
      }
      .body {
        height: calc(100% - 64px);

      }
    }
  }
</style>

