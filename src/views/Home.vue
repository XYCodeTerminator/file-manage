<template>
  <div class="home">
    <div class="left">
      
      <div class="left-title border-style">
        <button class="btn-add" @click="addUser"></button>
        <span>用户列表</span>
        <button class="btn-delete" :class="{active: selectedUser}" :disabled="!selectedUser" @click="deleteUser"></button>
      </div>
      <div class="user-list">
        <div v-for="(user, i) in users" :key="i" 
          class="user-item" @click="handleOnUserSelect(user, $event)">
          {{user.name}}
        </div>
      </div>
      <x-modal class="user-add-modal" :isVisible="isAddVisible" :position="userModalPosition">
        <div class="modal-content">
          <div class="btn-close" @click="addUserCancel">&times;</div>
          <div class="modal-title">添加用户</div>
          <input @keyup.enter="addUserOk" v-model="username" placeholder="请输入用户名" type="text">
          <div class="btn-ok" @click="addUserOk">确认</div>
          <div class="btn-cancel" @click="addUserCancel">取消</div>
        </div>
      </x-modal>

    </div>
    <div class="container">
      <div class="header">
        <div class="current-user"><div class="username">{{this.selectedUser && this.selectedUser.name || '未选择用户'}}</div></div>
        <button :disabled="!(selectedTreeItem&&selectedUser)" class="upload" :class="{active: (selectedTreeItem||selectedFile)&&selectedUser}" @click="upload"></button>
      </div>
      <div class="body">
        <div class="toolbar"></div>
        <div class="files-container">
          <div class="files-left">
            <div class="left-title">文件夹</div>
            <div class="left-content border-style">
              <x-tree-view :treeArray="directoryArray" 
                :isOpenAll="true" @select="handleOnTreeSelect" />
            </div>
          </div>
          <div class="files-right">
            <div class="right-title">文件列表</div>
            <div class="right-content border-style">
              <div class="files-list">
                <div class="list-item" v-for="(item, index) in cSelectedTreeItem" 
                  :key="index" @click="handleOnFileSelect(item, $event)">
                  <img class="file-icon" src="../assets/images/file.svg" alt="file-icon">
                  <div class="file-name">{{item.name}}</div>
                </div>
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
import XModal from '@/components/XModal'
import {directoryArray, fileArray, users} from './testData.js'
export default {
  name: 'home',
  components: {
    XTreeView,
    XModal
  },
  data () {
    return {
      directoryArray,
      users,
      selectedUser: null,
      selectedTreeItem: null,
      selectedFile: null,
      isAddVisible: false,
      username: '',
      userModalPosition: {}
    }
  },
  computed: {
    cSelectedTreeItem () {
      const children = this.selectedTreeItem && this.selectedTreeItem.children
      return this.selectedTreeItem 
        ? (children ? children : [this.selectedTreeItem])
        : []
    }
  },
  mounted () {
    this.userItemsDOM = document.getElementsByClassName('user-item')
    this.listItemsDOM = document.getElementsByClassName('list-item')
    this.fetchUserData ()
  },
  methods: {
    fetchUserData () {
      this.$http.get('users')
        .then(res => {

        })
        .catch(err => {
          console.error(err)
        })
    },
    fetchFolders () {
      this.$http.get('folders')
        .then(res => {

        })
        .catch(err => {
          console.error(err)
        })
    },
    fetchFilesByFolderId () {
      this.$http.get('files')
        .then(res => {

        })
        .catch(err => {
          console.error(err)
        })
    },
    addUser (event) {
      this.userModalPosition.left = event.clientX + 'px'
      this.userModalPosition.top = event.clientY + 'px'
      this.isAddVisible = true
      this.username = ''
    },
    addUserOk () {
      this.isAddVisible = false
      this.users.push({ name: this.username })
      this.http.post('addUser', {} )
        .then(res => {

        })
        .catch(err => {
          console.error(err)
        })
    },
    addUserCancel () {
      this.isAddVisible = false
      this.username = ''
    },
    deleteUser () {
      const delIndex = this.users.indexOf(this.selectedUser)
      this.users.splice(delIndex, 1)
      this.$http.post('deleteUser', {})
        .then(res => {

        })
    },
    handleOnTreeSelect (item) {
      console.log('item: ', item)
      this.selectedTreeItem = item
    },
    upload () {
      console.log("上传：", this.selectedFile || this.selectedTreeItem)
    },
    handleOnUserSelect (user, event) {
      this.selectedUser = user
      var currentUserItemDOM = event.target
      for (const userItem of this.userItemsDOM) {
        if (userItem == currentUserItemDOM) {
          // debugger
          userItem.classList.add('selected')
        } else {
          userItem.classList.remove('selected')
        }
      }
    },
    handleOnFileSelect (file, event) {
      var fileItemDOM = event.currentTarget
      // debugger
      this.selectedFile = file
      for (let itemDOM of this.listItemsDOM) {
        if (itemDOM == fileItemDOM) {
          if (itemDOM.classList.contains('selected')) {
            this.selectedFile = null
          }
          itemDOM.classList.toggle('selected')
        } else {
          itemDOM.classList.remove('selected')
        }
      }
      console.log('selectedFile:', this.selectedFile)
    }
  }
}
</script>

<style lang="less" scoped>
  @bg-color: #f0f2f5;
  @header-color: #fff;
  @left-color: #fff;
  @main-color: #03A9F4;
  .home {
    background-color: #f0f2f5;
    // background-color: #BBDEFB;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    .left {
      flex: 0 0 18%;
      max-width: 280px;
      background-color: @left-color;
      box-shadow: 4px 0 10px 0 rgba(0,0,0,0.1);
      .left-title {
        box-sizing: border-box;
        border: solid 1px #03A9F4;
        background-color: @header-color;
        // background-color: #1976D2;;
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        padding: 15px;
        height: 80px;
        width: 100%;
        text-align: center;
        font: 28px/1 simhei serif;
        font-weight: 500;
        color: #0288D1;
        // color: #FFF;
        // box-shadow: 4px 4px 10px 10px #0288D14d inset;
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
          background: url(../assets/images/delete_user_disable.svg) no-repeat;
          background-size: cover;
          &.active {
            background: url(../assets/images/delete_user.svg) no-repeat;
            background-size: cover;
          }
        }
      }
      .user-list { 
        overflow-y: auto;
        height: calc(100% - 80px);
        &::-webkit-scrollbar {
          width: 5px;
        }
        &::-webkit-scrollbar-track {
          width: 5px;
          background-color: #BBDEFB9D;
          border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #03A9F49D;
          border-radius: 3px;
        }
        .user-item {
          box-sizing: border-box;
          clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%); 
          // clip-path: polygon(0 0, 10% 50%, 0 100%, 100% 100%, 100% 0); 
          width: 70%;
          height: 2.4em;
          text-align: center;
          font: 30px/2.4 serif;
          font-weight: bold;
          // border-bottom-left-radius: 15px;
          // border-top-left-radius: 15px;
          // border-radius: 5px;
          border-left: solid transparent 5px;
          color: #fff;
          // background-color: #ccc;
          background-color: #BBDEFB;
          margin: 20px auto;
          user-select: none;
          cursor: pointer;
          box-shadow: -2px 2px 4px 0 rgba(0,0,0,0.2);
          transition: transform .3s;
          &:hover {
            box-shadow: -6px 6px 8px 0 rgba(0,0,0,0.2);
            transform: scale(1.1) translate3d(15px, 0px, 20px);
            border-left: solid #03A9F4 5px;
          }
          &.selected {
            background-color: #03A9F4;
            // box-shadow: -6px 6px 8px 0 rgba(0,0,0,0.2);
            transform: scale(1.1) translate3d(10px, 0px, 20px);
          }
        } 
      }
      .user-add-modal {
        .modal-content {
          width: 260px;
          padding: 20px;
          border-radius: 6px;
          background: #fff;
          overflow: hidden;
          font: 24px/1 sans-serif;
          position: relative;
          .btn-close {
            position: absolute;
            color: #03A9F4;
            right: 10px;
            top: 8px;
            &:hover {
              color: #0288D1;
              cursor: pointer;
            }
          }
          .modal-title {
            text-align: center;
            color: #03A9F4;
            font-weight: 600;
          }
          input {
            box-sizing: border-box;
            margin-top: 15px;
            width: 100%;
            font-size: 18px;
            height: 2.5em;
            border: none;
            outline: none;
            border: 2px solid #03A9F4;
            padding-left: 10px;
            color: #03A9F4;
            &::-webkit-input-placeholder {
              color: #7cc3e9;
            }
          }
          .btn-ok,.btn-cancel {
            margin-top: 10px;
            display: inline-block;
            font-size: 16px;
            padding: 8px 18px;
            border-radius: 3px;
            cursor: pointer;
          }
          .btn-ok {
            color: #87d068;
            &:hover {
              background: #87d0684d;
            }
          }
          .btn-cancel {
            margin-left: 10px;
            color: #F44336;
            &:hover {
              background: #F443364d;
            }
          }
        }
      }
    }
    .container {
      flex: 1 1 auto;
      height: 100%;
      .header {
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.1);
        height: 80px;
        background-color: @header-color;
        // background-color: #1976D2;
        position: relative;
        // border: solid 1px #03A9F4;
        border: none;
        border-left: none;
        box-sizing: border-box;
        .current-user {
          // box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2);
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          background-color: @header-color;
          // background-color: #1976D2;
          width: 400px;
          height: 140%;
          font: 45px sans-serif;
          text-align: center;
          font-weight: 600;
          color: #03A9F4;
          // color: #fff;
          clip-path: polygon(0 0, 10% 100%, 90% 100%, 100% 0, 0 0);
          display: flex;
          justify-content: center;
          align-items: center;
          // border-top: solid 3px #03A9F4;
          // border-bottom: solid 6px #03A9F4;
          box-sizing: border-box;
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
        height: calc(100% - 80px);
        .files-container {
          box-sizing: border-box;
          padding: 0 20px 20px 20px;
          height: 100%;
          display: flex;
          flex-flow: row nowrap;
          .files-left {
            height: 100%;
            box-sizing: border-box;
            // border-right: 1px dashed #03A9F4;
            padding: 10px;
            width: 50%;
            display: flex;
            flex-flow: column nowrap;
            .left-title {
              flex: 0 0 auto;
              align-self: flex-end;
              width: 70%;
              // box-sizing: border-box;
              padding: 5px;
              // margin: 0 auto;
              text-align: left;
              color: #03A9F4;
              // color: #51ebff;
              font: 26px/1 simhei serif;
              text-shadow: 0.1em 0.1em 0.2em #03A9F4AA;
            }
            .left-content {
              position: relative;
              flex: 1 1 auto;
              overflow: auto;
              font: 23px/1.5 sans-serif;
              color: #707070;
              // color: #51ebff;
              margin-top: 20px;
              box-sizing: border-box;
              padding: 20px 10px 10px 10px;
              background-color: #fff;
              // background-color: #BBDEFB;
              border: solid 1px #03A9F4;
              &::-webkit-scrollbar {
                width: 5px;
              }
              &::-webkit-scrollbar-track {
                width: 5px;
                background-color: #BBDEFB9D;
                border-radius: 3px;
              }
              &::-webkit-scrollbar-thumb {
                background-color: #03A9F49D;
                border-radius: 3px;
              }
            }
          }
          .files-right {
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
            padding: 10px;
            width: 50%;
            .right-title {
              position: relative;
              padding: 5px;
              color: #03A9F4;
              // color: #51ebff;
              // margin: 0 auto;
              width: 70%;
              text-align: right;
              font: 26px/1 simhei serif;
              text-shadow: 0.1em 0.1em 0.2em #03A9F4AA;
            }
            .right-content {
              overflow: auto;
              flex: 1 1 auto;
              margin-top: 20px;
              background-color: #fff;
              // background-color: #BBDEFB;
              border: solid 1px #03A9F4;
              box-sizing: border-box;
              padding: 20px 15px 10px 25px;
              font: 23px/1.5 sans-serif;
              color: #707070;
              &::-webkit-scrollbar {
                width: 5px;
              }
              &::-webkit-scrollbar-track {
                width: 5px;
                background-color: #BBDEFB9D;
                border-radius: 3px;
              }
              &::-webkit-scrollbar-thumb {
                background-color: #03A9F49D;
                border-radius: 3px;
              }
              .files-list {
                overflow: auto;
                .list-item {
                  display: flex;
                  flex-flow: row nowrap;
                  align-items: center;
                  padding: 3px;
                  box-sizing: border-box;
                  border-bottom: 1px dashed #03A9F4;
                  cursor: pointer;
                  &.selected {
                    background-color: #e0e0e0;
                  }
                  .file-icon {
                    flex: 0 0 auto;
                    display: block;
                    width: 1.1em;
                    height: 1.1em;
                    margin-right: 5px;
                  }
                  .file-name {
                    flex: 1 1 auto;
                  }
                }
              }
            }
          }
        }
      }
    }
    .border-style {
      background: linear-gradient(to left, #03A9F4, #03A9F4) top left no-repeat,
                  linear-gradient(to bottom, #03A9F4, #03A9F4) top left no-repeat,
                  linear-gradient(to left, #03A9F4, #03A9F4) bottom left no-repeat,
                  linear-gradient(to bottom, #03A9F4, #03A9F4) bottom left no-repeat,
                  linear-gradient(to left, #03A9F4, #03A9F4) top right no-repeat,
                  linear-gradient(to bottom, #03A9F4, #03A9F4) top right no-repeat,
                  linear-gradient(to left, #03A9F4, #03A9F4) bottom right no-repeat,
                  linear-gradient(to bottom, #03A9F4, #03A9F4) bottom right no-repeat;
      background-size: 10px 2px, 2px 10px;
    }
  }
</style>

