<template>
  <div class="about">
    <!-- 基础信息 -->
    <Baseinfo></Baseinfo>
  </div>
</template>

<script>
import Config from 'config'
import Baseinfo from '#/baseinfo'

export default {
  components: {
    Baseinfo
  },
  data () {
    return {
      baseInfo: Config.baseInfo,
    };
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 960px;
  box-sizing: border-box;
  padding: 8px;
}
</style>
