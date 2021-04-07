<template>
  <div id="music-container">
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/928361476&color=%23e52727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
    <div
      style="
        font-size: 10px;
        color: #cccccc;
        line-break: anywhere;
        word-break: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
          Garuda, Verdana, Tahoma, sans-serif;
        font-weight: 100;
      "
    >
      <a
        href="https://soundcloud.com/olijoy"
        title="Olijoy"
        target="_blank"
        style="color: #cccccc; text-decoration: none"
        >Olijoy</a
      >
      ·
      <a
        href="https://soundcloud.com/olijoy/wonkyjoy"
        title="Wonkyjoy"
        target="_blank"
        style="color: #cccccc; text-decoration: none"
        >Wonkyjoy</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "View",
  title: "Test Title",
  data() {
    return {
      videoOptions: {
        src:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        type: "video/mp4",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/views/Music";
</style>
