<template>
  <!-- 图片加载 -->
  <div>
    <el-image
      class="image-size"
      :src="url"
      lazy
    ></el-image>
  </div>
</template>

<script>
import Config from 'config'

export default {
  props: {
    url: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {

    };
  }
}
</script>

<style lang="scss" scoped>
.image-size {
  width: 500px;
  height: 300px;
}
</style>
