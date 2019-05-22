import image from '#/image';
<template>
  <!-- 卡片-跑马灯 -->
  <el-carousel
    :interval="4000"
    type="card"
    height="200px"
    trigger="click"
  >
    <el-carousel-item
      v-for="item in urls"
      :key="item"
    >
      <img
        :src="item"
        alt
        srcset
      >
    </el-carousel-item>
  </el-carousel>
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
