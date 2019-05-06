const directoryArray = [
  {
    name: 'folder0',
    children: [
      {
        name: 'folder0-1',
        isOpen: true,
        children: [
          { name: 'folder0-1-0', icon: require('../assets/images/folder_close.svg') },
          { name: 'folder0-1-1', icon: require('../assets/images/folder_close.svg') }
        ]
      },
      { name: 'folder2' },
      { name: 'folder3' },
      {
        name: 'folder0-2',
        children: [
          { name: 'folder0-2-0', icon: require('../assets/images/folder_close.svg') },
          { name: 'folder0-2-1', icon: require('../assets/images/folder_close.svg') }
        ]
      }
    ]
  },
  {
    name: 'folder1',
    children: [
      { name: 'folder1-0', icon: require('../assets/images/folder_close.svg') },
      { name: 'folder1-1', icon: require('../assets/images/folder_close.svg') }
    ]
  },
  { name: 'folder2', icon: require('../assets/images/folder_close.svg') },
  { name: 'folder3', icon: require('../assets/images/folder_close.svg') }
]

const fileArray = []

module.exports = {
  directoryArray,
  fileArray
}