<template>
  <div class="test">
    <XTreeView :treeArray="treeArray" />
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
        name: 'folder1',
        children: [
          { name: 'file1-0' },
          { name: 'file1-1' }
        ]
      },
      { name: 'file2' },
      { name: 'file3' },
      {
        name: 'folder2',
        children: [
          { name: 'file2-0' },
          { name: 'file2-1' }
        ]
      }
    ]
  }
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

