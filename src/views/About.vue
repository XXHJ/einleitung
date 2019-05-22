<template>
  <div class="about">
    <!-- 基础信息 -->
    <div class="about-base">
      <div class="about-base-info">
        <div
          class="about-item"
          v-for="(item, index) in baseInfo"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="about-base-image">
        <div class="images"></div>
      </div>
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
.about {
  width: 960px;
  height: 1000px;
  // border: 1px solid #000;
  box-sizing: border-box;
  padding: 8px;
  &-base {
    display: flex;
    text-align: left;
    &-info {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      .about-item {
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
}
</style>
