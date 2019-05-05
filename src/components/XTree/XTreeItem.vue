<template>
  <div class="tree-item">
    <!-- <XTreeView v-if="isFolder" :treeData="item" />
    <div v-else>{{item.name}}</div> -->
    <div>{{item.name}}</div>
    <XTreeView v-if="isFolder" :treeArray="item.children" />
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
  props: {
    item: Object
  },
  computed: {
    isFolder () {
      return this.item.children && this.item.children.length > 0
    }
  }
}
</script>

