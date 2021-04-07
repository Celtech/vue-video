<template>
  <div id="home">
    <header id="home-header">
      <section class="event-details">
        <div class="container">
          <div class="card">
            <h2><span class="highlight">April 17th</span>, Menomonie WI</h2>
            <h3>LIVE in the Valley</h3>

            <a
              class="button"
              href="https://liveinthevalleyevents.com/open-deck-night/"
              target="_blank"
              rel="noopener norefferer"
              >Get Tickets</a
            >
          </div>
        </div>
      </section>
    </header>

    <section id="home-news-letter">
      <div class="container">
        <div v-if="subscribed">
          <h2>Thank you for subscribing</h2>
        </div>
        <form v-else @submit.prevent="onSubmit">
          <label id="email-label" for="email"
            >Sign up for our news letter</label
          >
          <p>Get updates on my newest music!</p>
          <div class="form-group">
            <input
              id="email"
              v-model="email"
              class="form-control"
              type="text"
              placeholder="jon.snow@knightswatch.com"
            />

            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  title: "Music Producer / DJ",
  data() {
    return {
      email: "",
      subscribed: false,
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const data = {
        email_address: this.email,
        status: "subscribed",
      };

      await axios
        .post("/mail_chimp/", data, {
          auth: {
            username: "key",
            password: process.env.VUE_APP_MAIL_CHIMP_API_KEY,
          },
        })
        .then(() => {
          this.subscribed = true;
          this.email = null;
        })
        .catch((error) => {
          if (error.response) {
            this.email = null;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/views/Home";
</style>
