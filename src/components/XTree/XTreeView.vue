<template>
  <div class="tree-view">
    <!-- <div v-if="treeData">{{treeData.name}}</div>
    <template v-if="treeData.children && treeData.children.length>0">
      <XTreeItem
      v-for="(item, i) in treeData.children" 
      :key="i" :item="item" />
    </template> -->
    <template v-if="treeArray && treeArray.length>0">
      <XTreeItem ref="treeItem"
        v-for="(item, i) in treeArray" 
        :key="i" :item="item" :isOpenAll="isOpenAll" 
        :icon="item.icon"
        @select="select"/>
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
    treeArray: Array,
    isOpenAll: false,
    treeViewStyle: Object,
    // selected: Object
    // selected: {
    //   type: Object,
    //   default: function () {
    //     return {}
    //   }
    // }
  },
  data: function () {
    return {
      
    }
  },
  computed: {
  },
  methods: {
    select (item) {
      // console.log('XTreeView:', item)
      this.$emit('select', item)
    },
    resetChecked () {
      if (this.$refs.treeItem.length > 0) {
        this.$refs.treeItem.forEach(treeItem => {
          treeItem.resetChecked()
        })
      } else {
        this.$refs.treeItem.resetChecked()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  // .tree-view{
  //   font-size: 25px;
  //   color: red;
  // }
</style>


