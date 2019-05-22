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
      <Images :url="item"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Config from 'config';
import Images from '#/image';

export default {
  components: {
    Images
  },
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
