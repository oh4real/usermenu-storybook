<template>
  <v-app>
    <v-app-bar 
      app 
      light
      color="#FFFFFF"
      flat
      hide-on-scroll
      class="kph-header-bar"
      >

      <div class="d-flex align-center">
        <a href="https://www.kasasa.com" ><v-img
          alt="Kasasa Logo"
          class="shrink mr-2"
          contain
          src="https://www.kasasa.com/hubfs/K.com/Logo/logo-kasasa.png"
          transition="scale-transition"
          width="130"
          height="19"
        /></a>
      </div>

      <v-spacer></v-spacer>

      <k-user-menu user="first.last@ficommerce.cu" :userLinks="links"/>
    </v-app-bar>

    <v-content >

    <v-app-bar
      color="#464646"
      dark
      tile
      v-scroll="whatsMyTop"
      :class="{ 'k-portal-app-bar-fixed': fixedScroll }"
      >
      <v-toolbar-title class="display-1">Clients</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row v-for="i in 10" :key="i" height="1400">
        <v-card>
          <v-card-title>Title {{ i }}</v-card-title>
          <v-card-text>Here is some content for card {{ i }}</v-card-text>
        </v-card>
      </v-row>
    </v-container>
    </v-content>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import KUserMenu from "@/components/KUserMenu.vue"

export default Vue.extend({
  name: "App",

  components: {
    KUserMenu
  },

  data: () => ({
    links: { settings: '/settings', logout: '/logout' },
    fixedScroll: false
  }),

  methods: {
    whatsMyTop(e: Event) {
      this.fixedScroll = window.scrollY > this.$vuetify.application.top
    }
  },
});
</script>

<style scoped>
  .kph-header-bar {
    border-bottom: 1px solid #D41A27 !important;
  }
  .k-portal-app-bar-fixed {
    position: fixed;
    top: 0px;
    z-index: 5;
  }
</style>
