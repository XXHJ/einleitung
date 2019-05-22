<template>
  <!-- 基础信息 -->
  <div class="base">
    <div class="base-info">
      <div
        class="base-item"
        v-for="(item, index) in baseInfo"
        :key="index"
      >{{item}}</div>
    </div>
    <div class="base-image">
      <div class="images"></div>
    </div>
  </div>
</template>

<script>
import Config from 'config'

export default {
  data () {
    return {
      baseInfo: Config.baseInfo,
    };
  }
}
</script>

<style lang="scss" scoped>
.base {
  display: flex;
  text-align: left;
  &-info {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .base-item {
      min-width: 260px;
      padding: 8px 0;
    }
  }
  &-image {
    width: 300px;
    .images {
      width: 120px;
      height: 100%;
      border: 1px solid pink;
    }
  }
}
</style>
