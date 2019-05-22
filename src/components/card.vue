<template>
  <!-- 圆饼进度条 -->
  <el-row>
    <el-col
      :span="8"
      v-for="(o, index) in 3"
      :key="o"
    >
      <el-card class="box-card">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        >
        <div
          v-for="o in 2"
          :key="o"
          class="text item"
        >{{'列表内容 ' + o }}</div>
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
.box-card {
  width: 313px;
  .item {
    padding: 8px 0;
  }
}
</style>
