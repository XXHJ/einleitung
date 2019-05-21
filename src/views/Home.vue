<template>
  <div class="home">
    <div class="home-title">基本信息</div>
    <div class="home-base">
      <div class="home-base-info">
        <div
          class="base-item"
          v-for="(item, index) in baseInfo"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="home-base-image">
        <div class="images"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Config from 'config'


export default {
  data () {
    return {
      baseInfo: Config.baseInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 960px;
  height: 1000px;
  text-align: center;
  border: 1px solid #000;
  box-sizing: border-box;
  padding: 8px;
  &-title {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
  }
  &-base {
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
}
</style>
