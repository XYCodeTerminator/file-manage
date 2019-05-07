<template>
  <div class="home">
    <div class="left">
      <div class="left-title">
        <button class="btn-add" @click="addUser"></button>
        <span>用户列表</span>
        <button class="btn-delete" @click="deleteUser"></button>
      </div>
      <div class="user-list">
        <div v-for="(user, i) in users" :key="i" 
          class="user-item" @click="handleOnUserSelect(user, $event)">
          {{user.name}}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <div class="current-user">用户1</div>
        <button :disabled="!(selectedTreeItem&&selectedUser)" class="upload" :class="{active: selectedTreeItem&&selectedUser}" @click="upload"></button>
      </div>
      <div class="body">
        <div class="toolbar"></div>
        <div class="files-container">
          <div class="files-left">
            <div class="left-title">文件夹树</div>
            <div class="left-content">
              <x-tree-view :treeArray="directoryArray" 
                :isOpenAll="true" @select="handleOnTreeSelect" />
            </div>
          </div>
          <div class="files-right">
            <div class="right-title">
              <span>文件列表</span>
            </div>
            <div class="right-content">
              <div class="files-list">
                <div class="list-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XTreeView from '@/components/XTree'
import {directoryArray, fileArray, users} from './testData.js'
export default {
  name: 'home',
  components: {
    XTreeView
  },
  data () {
    return {
      directoryArray,
      users,
      selectedUser: null,
      selectedTreeItem: null
    }
  },
  mounted () {
    this.userItemsDOM = document.getElementsByClassName('user-item')
  },
  methods: {
    addUser () {
      alert('添加用户')
    },
    deleteUser () {
      alert('删除用户')
    },
    handleOnTreeSelect (item) {
      console.log('item: ', item)
      this.selectedTreeItem = item
    },
    upload () {
      alert('上传')
    },
    handleOnUserSelect (user, event) {
      this.selectedUser = user
      var currentUserItemDOM = event.target
      for (const userItem of this.userItemsDOM) {
        if (userItem == currentUserItemDOM) {
          // debugger
          userItem.classList.add('selected')
        } else {
          userItem.classList.remove('selected', true)
        }
      }
    }
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
      flex: 0 0 300px;
      background-color: #fff;
      .left-title {
        // background: #87d068;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        padding: 15px;
        height: 100px;
        width: 100%;
        text-align: center;
        font: 28px/1 simhei serif;
        font-weight: 500;
        color: #0288D1;
        button {
          outline: none;
          border: none;
          cursor: pointer;
        }
        .btn-add {
          width: 2.6em;
          height: 2.6em;
          background: url(../assets/images/add_user.svg) no-repeat;
          background-size: cover;
        }
        .btn-delete {
          width: 2.6em;
          height: 2.6em;
          background: url(../assets/images/delete_user.svg) no-repeat;
          background-size: cover;
        }
      }
      .user-list { 
        overflow-y: auto;
        height: calc(100% - 100px);
        .user-item {
          width: 80%;
          height: 80px;
          margin: 0 auto;
          text-align: center;
          font: 30px/80px serif;
          font-weight: bold;
          border-radius: 5px;
          color: #fff;
          background-color: #ccc;
          margin: 20px auto;
          cursor: pointer;
          box-shadow: -2px 2px 4px 0 rgba(0,0,0,0.2);
          transition: transform .3s;
          &:hover {
            box-shadow: -6px 6px 8px 0 rgba(0,0,0,0.2);
            transform: scale(1.1) translate3d(10px, 0px, 20px);
          }
          &.selected {
            background-color: #87d068;
            box-shadow: -6px 6px 8px 0 rgba(0,0,0,0.2);
            transform: scale(1.1) translate3d(10px, 0px, 20px);
          }
        } 
      }
    }
    .container {
      flex: 1 1 auto;
      height: 100%;
      .header {
        height: 100px;
        background: #fff;
        position: relative;
        .current-user {
          width: 200px;
          height: 100%;
          font: 36px/100px simhei serif;
          text-align: center;
          margin: 0 auto;
          font-weight: 700;
          color: #03A9F4;
          // float: left;
          // background: #bfa;
        }
        .upload {
          width: 40px;
          height: 40px;
          background: url(../assets/images/upload_disable.svg) no-repeat;
          background-size: contain;
          border: none;
          outline: none;
          cursor: pointer;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 50px;
          margin: auto 0;
          &.active {
            background: url(../assets/images/upload.svg) no-repeat;
            background-size: contain;
          }
        }
      }
      .body {
        height: calc(100% - 100px);
        .files-container {
          box-sizing: border-box;
          padding: 10px;
          height: 100%;
          display: flex;
          flex-flow: row nowrap;
          .files-left {
            height: 100%;
            box-sizing: border-box;
            border-right: 1px dashed #03A9F4;
            width: 50%;
            display: flex;
            flex-flow: column nowrap;
            .left-title {
              flex: 0 0 auto;
              width: 100%;
              padding: 5px;
              margin: 0 auto;
              text-align: center;
              color: #03A9F4;
              font: 24px/1 simhei serif;
            }
            .left-content {
              flex: 1 1 auto;
              overflow: auto;
              font: 23px/1.5 sans-serif;
              color: #707070;
            }
          }
          .files-right {
            box-sizing: border-box;
            width: 50%;
            .right-title {
              position: relative;
              padding: 5px;
              color: #03A9F4;
              margin: 0 auto;
              text-align: center;
              font: 24px/1 simhei serif;
            }
            .right-content {
              overflow: auto;
            }
          }
        }
      }
    }
  }
</style>

