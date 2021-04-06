<template>
  <nav id="navbar" :class="fixed ? 'navbar-fixed' : ''">
    <div id="navbar-container">
      <div class="navbar-branding">
        <router-link class="branding-link" :to="{ name: 'Home' }">
          <img class="logo" src="../assets/images/logo.svg" alt="logo" />
        </router-link>
      </div>

      <div class="navbar-toggle">
        <font-awesome-icon
          @click.prevent="menuOpen = !menuOpen"
          :icon="menuOpen ? `times` : `bars`"
        />
      </div>

      <ul :class="menuOpen ? `nav-links active` : `nav-links`">
        <li :class="['Biography'].indexOf($route.name) > -1 ? 'active' : ''">
          <router-link :to="{ name: 'Biography' }">Biography</router-link>
        </li>

        <li :class="['Events'].indexOf($route.name) > -1 ? 'active' : ''">
          <router-link :to="{ name: 'Events' }">Events</router-link>
        </li>

        <li :class="['Music'].indexOf($route.name) > -1 ? 'active' : ''">
          <router-link :to="{ name: 'Music' }">Music</router-link>
        </li>

        <li :class="['Merch'].indexOf($route.name) > -1 ? 'active' : ''">
          <router-link :to="{ name: 'Merch' }">Merch</router-link>
        </li>

        <li>
          <router-link to="/">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes);

export default {
  name: "Navbar",
  props: {
    fixed: {
      type: Boolean,
      value: false,
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/Navbar";
</style>
