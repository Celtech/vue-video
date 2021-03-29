<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/scss/app";
</style>
<script>
import Navbar from "src/components/Navbar";
export default {
  components: { Navbar },
};
</script>
