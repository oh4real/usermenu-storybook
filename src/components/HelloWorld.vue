<template>
  <v-flex xs12 my-3>
    <v-layout justify-center row>
      <v-flex xs4 pa-2>
        <stats-card
          title="1.200"
          sub-title="assigned credits"
          color="primary"
          icon="mdi-plus"
        />
      </v-flex>
      <v-flex xs4 pa-2>
        <stats-card
          title="1.000"
          sub-title="used credits"
          color="secondary"
          icon="mdi-minus"
        />
      </v-flex>
      <v-flex xs4 pa-2>
        <stats-card
          title="200"
          sub-title="remaining credits"
          color="accent"
          icon="mdi-sigma"
        />
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script lang="ts">
import Vue from "vue";
import StatsCard from "@/components/StatsCard.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    StatsCard
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
});
</script>
