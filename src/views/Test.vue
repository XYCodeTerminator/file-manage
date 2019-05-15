<template>
  <div class="test">
    <!-- <XTreeView :treeArray="treeArray" :isOpenAll="true" /> -->
    <!-- <svg aria-hidden="true">
      <use :xlink:href="`#-${require('../assets/images/upload.svg')}`" />
    </svg> -->
    <!-- <svg width="96" height="96">
      <use xlink:href="../assets/images/upload_disable.svg" width="96" height="96" />
    </svg> -->
    <!-- <x-modal :isVisible="true" :position="{left: '100px', top: '200px'}">
      <div>aaa</div>
    </x-modal> -->
    <!-- <XMessage /> -->
    <button @click="showMsg">showMessage</button>
  </div>
</template>

<script>
import XTreeView from '@/components/XTree'
import XModal from '@/components/XModal'
import XMessage from '@/components/XMessage/XMessage'
var treeArray = [
  { name: 'file0' },
  { name: 'file1' },
  {
    name: 'folder0',
    children: [
      {
        name: 'folder0-1',
        isOpen: true,
        children: [
          { name: 'file0-1-0' },
          { name: 'file0-1-1' }
        ]
      },
      { name: 'file2' },
      { name: 'file3' },
      {
        name: 'folder0-2',
        children: [
          { name: 'file0-2-0' },
          { name: 'file0-2-1' }
        ]
      }
    ]
  },
  {
    name: 'folder1',
    children: [
      { name: 'file1-0' },
      { name: 'file1-1' }
    ]
  },
  { name: 'file3'}
]
export default {
  data () {
    return {
      treeArray: treeArray
    }
  },
  components: {
    XTreeView,
    XModal,
    XMessage
  },
  methods: {
  	makeFolder: function (item) {
    	Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function (item) {
    	item.children.push({
        name: 'new stuff'
      })
    },
    showMsg () {
      this.$XMessage({
        duration: 1500,
        hasClose: true,
        type: 'error',
        content: '测试测试测试'
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>


