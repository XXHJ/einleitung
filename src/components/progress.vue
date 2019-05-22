<template>
  <!-- 进度条 -->
  <div>
    <div
      v-show="type === 'line'"
      v-for="(item, index) in bookList"
      :key="index"
    >
      {{item.bookName}}
      <el-progress
        :type="type"
        :stroke-width="10"
        :percentage="item.grad * 1"
        color="rgba(19, 206, 102, .8)"
      ></el-progress>
    </div>
    <div v-show="type === 'circle'">
      <el-progress
        v-for="(item, index) in bookList"
        :key="index + 10"
        status="text"
        :type="type"
        :percentage="item.grad * 1"
      >{{item.bookName}}({{item.grad}}%)</el-progress>
    </div>
  </div>
</template>

<script>
import Config from 'config'

export default {
  props: {
    type: {
      type: String,
      default: () => {
        return 'line'
      }
    }
  },
  data () {
    return {
      bookList: Config.book
    };
  }
}
</script>

<style lang="scss" scoped>
</style>
