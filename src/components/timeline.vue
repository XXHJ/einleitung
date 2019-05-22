<template>
  <!-- 时间线 -->
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) in lineList"
      :key="index"
      :timestamp="item.timeSlot"
      placement="top"
    >
      <el-card>
        <h4>{{item.company}} - {{item.position}}</h4>
        <p>{{item.responsibility}}</p>
        <p>{{item.content}}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import Config from 'config'
export default {
  data () {
    return {
      lineList: Config.experience
    };
  }
}
</script>

<style lang="scss" scoped>
</style>
