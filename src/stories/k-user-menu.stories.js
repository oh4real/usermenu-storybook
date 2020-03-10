import { storiesOf } from "@storybook/vue"
import {
  VAppBar
} from "vuetify/lib";

import KUserMenu from "@/components/KUserMenu.vue"

storiesOf("K User Menu", module)
  .add('k user menu with long name', () => ({
    components: {
      VAppBar,
      KUserMenu
    },
    template: `
    <v-app-bar 
      app 
      color="#ffffff" 
      light
      flat
      >
          <k-user-menu 
            color="#ffffff" 
            user="first.last@ficommerce.bank" 
            />
      </v-app-bar>
      `
  }))
  .add('k user menu default links', () => ({
    components: {
      VAppBar,
      KUserMenu
    },
    template: `
    <v-app-bar 
      app 
      color="#ffffff" 
      light
      flat
      >
          <k-user-menu 
            color="#ffffff" 
            user="test1@fi.bank" 
            />
      </v-app-bar>
      `
  }))
  .add('user menu with menu props', () => ({
    components: {
      VAppBar,
      KUserMenu
    },
    data () {
      return {
        userLinks: {
          settings: '/settings',
          logout: '/something/else'
        }
      };
    },
    template: `
    <v-app-bar 
      app 
      color="#ffffff" 
      light
      flat
      >
          <k-user-menu 
            color="#ffffff" 
            user="test2@fi.bank" 
            :userLinks="{settings: '/settings', logout: '/logout' }"
            />
      </v-app-bar>`
  }))