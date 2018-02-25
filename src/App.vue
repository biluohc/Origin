<template>
  <div id="app" bgcolor="transparent">
    <router-view/>
    <Footer></Footer>    
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
</style>
