<template>
  <section class="video-player">
    <video ref="videoPlayer" controls>
      <source :src="options.src" :type="options.type" />
    </video>
  </section>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/VideoPlayer";
</style>
