<template>
  <!-- 图片加载 -->
  <div class="demo-image__lazy">
    <el-image
      class="image-size"
      v-for="url in urls"
      :key="url"
      :src="url"
      lazy
    ></el-image>
  </div>
</template>

<script>
import Config from 'config'

export default {
  data () {
    return {
      urls: Config.urls
    };
  }
}
</script>

<style lang="scss" scoped>
.demo-image__lazy {
  width: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  .image-size {
    width: 500px;
    height: 300px;
  }
}
</style>
