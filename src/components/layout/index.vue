<template>
  <div id="app">
    <Header/>
    <div>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '#/layout/header.vue'
import Footer from '#/layout/footer.vue'

export default {
  name: 'layout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  width: 960px;
  height: 100%;
  margin: 0 auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
