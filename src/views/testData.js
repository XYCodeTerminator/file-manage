const directoryArray = [
  {
    name: 'folder0',
    children: [
      {
        name: 'folder0-1',
        isOpen: true,
        children: [
          { name: 'folder0-1-0', children: [] },
          { name: 'folder0-1-1', children: [] }
        ]
      },
      {
        name: 'folder0-2',
        children: [
          { name: 'folder0-2-0', children: [] },
          { name: 'folder0-2-1', children: [] }
        ]
      }
    ]
  },
  {
    name: 'folder1',
    children: [
      { name: 'folder1-0', children: [] },
      { name: 'folder1-1', children: [] }
    ]
  },
  { name: 'folder2', children: [] },
  { name: 'folder3', children: [] },
  { name: 'folder4', isFolder: true },
]

const fileArray = [
  { name: 'file0-0'},
  { name: 'file0-1'},
  { name: 'file0-2'},
  { name: 'file0-3'},
  { name: 'file1-0'},
  { name: 'file1-1'},
  { name: 'file1-2'},
  { name: 'file1-3'},
]

const users = [
  { name: '用户1' },
  { name: '用户2' },
  { name: '用户3' },
  { name: '用户4' },
  { name: '用户5' },
  { name: '用户6' },
  { name: '用户7' },
]

module.exports = {
  directoryArray,
  fileArray,
  users
}