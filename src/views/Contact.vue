<template>
  <div id="contact-container">
    <section>
      <h1>Contact Us</h1>
      <form>
        <div class="form-row">
          <label for="email">Email</label>
          <input id="email" class="form-control" type="email" />
        </div>

        <div class="form-row">
          <label for="name">Name</label>
          <input id="name" class="form-control" type="text" />
        </div>

        <div class="form-row">
          <label for="message">Message</label>
          <textarea id="message" class="form-control" rows="6" />
        </div>

        <button class="button button-primary button-block">Send Message</button>
      </form>
    </section>

    <aside>
      <h2>Find me around the internet</h2>

      <ul>
        <li>
          <a href="https://twitter.com/olijoy">
            <div class="icon-wrapper icon-wrapper-twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/olijoy">
            <div class="icon-wrapper icon-wrapper-soundcloud">
              <font-awesome-icon :icon="['fab', 'soundcloud']" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/DjOlijoy">
            <div class="icon-wrapper icon-wrapper-facebook">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/olijoyofficial/">
            <div class="icon-wrapper icon-wrapper-instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faSoundcloud,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faSoundcloud, faTwitter);

export default {
  name: "View",
  title: "Test Title",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/views/Contact";
</style>
