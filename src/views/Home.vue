<template>
  <div class="home">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '#/layout/header.vue'
import Footer from '#/layout/footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
