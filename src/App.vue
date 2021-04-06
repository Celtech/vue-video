<template>
  <div id="app">
    <header id="app-header">
      <Navbar :fixed="['Home'].indexOf($route.name) > -1" />
    </header>

    <main id="app-main">
      <router-view />
    </main>

    <footer id="app-footer">
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss">
@import "assets/scss/app";
</style>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Navbar },
};
</script>
