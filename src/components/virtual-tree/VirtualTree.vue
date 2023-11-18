<template>
  <div class="virtual-tree">
    <p>virtual-list</p>
    <div class="virtual-tree-content">
      <virtual-list
        style="height: 200px; overflow-y: auto"
        :data-key="'key'"
        :data-sources="items"
        :data-component="itemComponent"
      />
    </div>

    <p>sx-tree</p>
    <div class="virtual-tree-content">
    <sx-tree ref="tree" 
     nodeKey="key"
     lazy
     :load="doLoadNode"
     :props="defaultProps"
  
     :height="height"
     show-checkbox />
    </div>
    
  </div>
</template>

<script>
import VirtualList from 'vue-virtual-scroll-list'
import SingleTreeItem from './SingleTreeItem'
import SxTree from '@/components/tree'

export default {
  name: 'VirtualTree',
  data () {
    return {
      data: [],
      itemComponent: SingleTreeItem,
      items: [],
      height: 300,
      count: 0,
      defaultProps: {
        children: 'children',
        label: 'displayValue'
      }
    }
  },
  components: { 'virtual-list': VirtualList, 'sx-tree': SxTree },
  mounted () {
    this.getData(2).then(data => {
      this.items = data
      console.warn(data)
    })
  },
  methods: {
    doLoadNode (root, callback) {
      console.warn(root)
      this.getData(root.level).then(data => {
        console.warn('getData', data)
       callback(data)
      })
    },
    dig (path = '0', level = 4) {
      const list = [];
      for (let i = 0; i < 3; i += 1) {
        const key = `${path}-${i}`;
        const treeNode = {
          title: key,
          key,
        };

        if (level > 0) {
          treeNode.children = this.dig(key, level - 1);
        };
        list.push(treeNode);
      }
      return list;
    },
    getData (level) {
      return new Promise((resolve, reject) => {
        let items = []
        let startCount = this.count
        let endCount = this.count + (level > 1 ? 100000 : 20)
        this.count = endCount
        for (let i = startCount; i < endCount; i++) {
          items.push({
            key: i,
            displayValue: 'displayValue_' + i,
            value: 'value_' + i,
            level: i % 3,
          })
        }
        resolve(items)
      })
    }
  }
}
</script>


<style>
.virtual-tree {
  transform: scale(0.8, 0.8);
}
.virtual-tree-content {
  margin-bottom: 20px;
  border: 1px solid #409eff;
}
</style>