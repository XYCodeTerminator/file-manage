<template>
  <div class="tree-view">
    <!-- <div v-if="treeData">{{treeData.name}}</div>
    <template v-if="treeData.children && treeData.children.length>0">
      <XTreeItem
      v-for="(item, i) in treeData.children" 
      :key="i" :item="item" />
    </template> -->
    <template v-if="treeArray && treeArray.length>0">
      <XTreeItem
        v-for="(item, i) in treeArray" 
        :key="i" :item="item" />
      </template>
  </div>
</template>

<script>
import XTreeItem from './XTreeItem'
export default {
  name: 'XTreeView',
  components: {
    XTreeItem
  },
  props: {
    // treeData: Object
    treeArray: Array
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>


