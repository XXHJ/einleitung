<template>
  <!-- 进度条 -->
  <div>
    <div>
      web:
      <el-progress
        :stroke-width="10"
        :percentage="98"
        color="rgba(255, 206, 102, .8)"
      ></el-progress>
    </div>
    <div>
      html:
      <el-progress
        :stroke-width="10"
        :percentage="70"
      ></el-progress>
    </div>
    <div>
      js:
      <el-progress
        :stroke-width="10"
        :percentage="80"
        color="rgba(142, 113, 199, 0.7)"
      ></el-progress>
    </div>

    <div>
      vue:
      <el-progress
        :stroke-width="10"
        :percentage="100"
        color="rgba(19, 206, 102, .8)"
      ></el-progress>
    </div>
    <div>
      react:
      <el-progress
        :stroke-width="10"
        :percentage="90"
        color="rgba(19, 206, 102, .8)"
      ></el-progress>
    </div>

    <div>
      ts:
      <el-progress
        :stroke-width="10"
        :percentage="50"
      ></el-progress>
    </div>

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
    >OK</el-progress>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  }
}
</script>

<style lang="scss" scoped>
</style>
