<template>
    <div class="single-tree-item" :style="style">
        <label for="">{{index}} - {{ source.displayValue }}</label>
    </div>
</template>

<script>
const PADDING_LEFT_VALUE = 12
export default {
  name: 'SingleTreeItem',
  props: {
    index: {
        type: Number
    },
    source: {
        type: Object,
        default () {
            return {}
        }
    }
  },
  computed: {
      style () {
        let { level } = this.source
        return {
            'padding-left': `${level * PADDING_LEFT_VALUE}px`
        }
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.single-tree-item {
    background-color: #eeeeee;
    margin-bottom: 8px;
    text-align: left;
}
</style>