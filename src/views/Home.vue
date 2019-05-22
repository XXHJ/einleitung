<template>
  <div class="home">
    <div class="home-title">
      <em>第一部分</em>
    </div>
    <!-- 基础信息 -->
    <!-- <Baseinfo></Baseinfo> -->
    <!-- 时间线 -->
    <div>
      <Timeline/>
    </div>
    <!-- 进度条 -->
    <div>
      <Progress/>
      <Progress type="circle"/>
    </div>
    <!-- 圆饼进度条 -->
    <div>
      <Card/>
    </div>
    <!-- 卡片 -->
    <div>
      <Carousel/>
    </div>
    <!-- 图片加载 -->
    <Images
      v-for="(url, index) in urls"
      :key="index"
      :url="url"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Config from 'config'
import Baseinfo from '#/baseinfo'
import Timeline from '#/timeline'
import Card from '#/card';
import Progress from '#/progress'
import Carousel from '#/carousel'
import Images from '#/image';

export default {
  components: {
    Baseinfo,
    Timeline,
    Card,
    Progress,
    Carousel,
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
.home {
  width: 960px;
  height: 1000px;
  box-sizing: border-box;
  padding: 8px;
  &-title {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
  }
}
</style>
