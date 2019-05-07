<template>
  <div class="tree-item">
    <!-- <XTreeView v-if="isFolder" :treeData="item" />
    <div v-else>{{item.name}}</div> -->
    <div class="item-content" 
      :class="{
          arrow: isFolder&&hasChildren, 
          'arrow-down': isOpen&&hasChildren,
          selected: isSelected
      }"
    >
      <img 
        v-if="cIcon" 
        class="icon" :src="cIcon" 
        alt="tree-icon"
        @click="toggle" >
      <span class="txt" @click="itemClick(item, $event)">{{item.name}}</span>
    </div>
    <XTreeView 
      v-if="isFolder" v-show="isOpen" 
      :isOpenAll="isOpenAll"
      :treeArray="item.children"
      @select="select" />
  </div>
</template>

<script>
// import XTreeView from  './XTreeView.vue'
export default {
  name: 'XTreeItem',
  components: {
    XTreeView: () => import('./XTreeView')
    // XTreeView
  },
  data () {
    return {
      isOpen: this.item.isOpen || this.isOpenAll,
      isSelected: this.item.isSelected
    }
  },
  mounted () {
    this.treeItemContentDOMS = document.getElementsByClassName('item-content')
  },
  beforeDestroy () {
    this.treeItemContentDOMS = null
  },
  props: {
    item: Object,
    isOpenAll: false,
    icon: String
  },
  computed: {
    isFolder () {
      // return this.item.children && this.item.children.length > 0
      return this.item.children || this.item.isFolder
    },
    hasChildren () {
      return this.item.children && this.item.children.length > 0
    },
    cIcon () {
      return this.isFolder 
        ? (this.isOpen && this.hasChildren ? require('./assets/images/folder_open.svg') : require('./assets/images/folder_close.svg'))
        : this.icon
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    itemClick (item, event) {
      // console.log('XTreeItem:', item)
      this.isOpen = !this.isOpen
      this.$emit('select', item)
      var currentItemContent = event.target.parentElement
      for (let itemContentDOM of this.treeItemContentDOMS) {
        if (itemContentDOM == currentItemContent) {
          // debugger
          itemContentDOM.style.backgroundColor = '#e0e0e0'
        } else {
          itemContentDOM.style.backgroundColor = 'transparent'
        }
      }
    },
    select (item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="less" scoped>
  .tree-item {
    cursor: pointer;
    box-sizing: border-box;
    padding-left: 1em;
    .item-content {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      // font: 20px/1.5 sans-serif;
      user-select: none;
      &.arrow::before {
        content: "\25B6";
        display: inline-block;
        margin-right: 0.3em;
        font-size: 0.7em;
        // color: #707070;
        cursor: pointer;
      }
      &.arrow-down::before {
        transform: rotate(90deg);
      }
      .icon {
        flex: 0 0 auto;
        width: 1.3em;
        height: 1.3em;
        cursor: pointer;
      }
      .txt {
        flex: 1 1 auto;
      }
    }
  }
</style>


