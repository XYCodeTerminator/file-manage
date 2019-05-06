<template>
  <div class="test">
    <XTreeView :treeArray="treeArray" :isOpenAll="true" />
  </div>
</template>

<script>
import XTreeView from '@/components/XTree'
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
    XTreeView
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
    }
  }
}
</script>

