<template>
  <div class="home">
    <div class="home-title">
      <em>第一部分</em>
    </div>
    <!-- 基础信息 -->
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
    <!-- 时间线 -->
    <div>
      <el-timeline>
        <el-timeline-item
          timestamp="2018/4/12"
          placement="top"
        >
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item
          timestamp="2018/4/3"
          placement="top"
        >
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item
          timestamp="2018/4/2"
          placement="top"
        >
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- 进度条 -->
    <div>
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="0"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="70"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="80"
        color="rgba(142, 113, 199, 0.7)"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="100"
        status="success"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="50"
        status="exception"
      ></el-progress>
      <br>
      <el-progress
        type="circle"
        :percentage="0"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="25"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="80"
        color="#8e71c7"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="100"
        status="success"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="50"
        status="exception"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="100"
        status="text"
      >Done</el-progress>
    </div>
    <!-- 圆饼进度条 -->
    <div>
      <el-row>
        <el-col
          :span="8"
          v-for="(o, index) in 2"
          :key="o"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button
                  type="text"
                  class="buttons"
                >操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 卡片 -->
    <div>
      <el-carousel
        :interval="4000"
        type="card"
        height="200px"
        trigger="click"
      >
        <el-carousel-item
          v-for="item in 6"
          :key="item"
        >
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Config from 'config'


export default {
  data () {
    return {
      baseInfo: Config.baseInfo,
      currentDate: new Date(),
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 960px;
  height: 1000px;
  // border: 1px solid #000;
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

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    .time {
      font-size: 13px;
      color: #999;
    }
    .buttons {
      padding: 0;
      float: right;
    }
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
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
  .demo-image__lazy {
    width: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    .image-size {
      width: 500px;
      height: 300px;
    }
  }
}
</style>
