<template>
  <div class="le-header">
    <div class="le-header-title">
      <em>header</em>
    </div>
    <div class="le-header-nav">
      <router-link to="/">Home</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.le-header {
  width: 100%;
  height: 60px;
  // border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  &-title {
    font-size: 30px;
  }
  &-nav {
    padding: 10px;
    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
