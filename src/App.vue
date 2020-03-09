<template>
  <v-app>
    <v-app-bar 
      app 
      color="#ffffff" 
      light
      flat
      class="kph-header-bar"
      >

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <k-user-menu user="CSR-with-really-long-name@fi.bank" :userLinks="links"/>
    </v-app-bar>

    <v-content style="min-height: 1200px">
    </v-content>
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
    links: { settings: '/settings', logout: '/logout' }
  })
});
</script>

<style scoped>
  .kph-header-bar {
    border-bottom: 1px solid red !important;
  }
</style>
