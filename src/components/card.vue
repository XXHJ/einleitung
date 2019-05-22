<template>
  <!-- 圆饼进度条 -->
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
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date(),
    };
  }
}
</script>

<style lang="scss" scoped>
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
</style>
