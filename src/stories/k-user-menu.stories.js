import { storiesOf } from "@storybook/vue"
import {
  VFlex,
  VContainer
} from "vuetify/lib";

import KUserMenu from "@/components/KUserMenu.vue"

storiesOf("K User Menu", module)
  .add('k user menu default links', () => ({
    components: {
      VFlex, VContainer,
      KUserMenu
    },
    template: `
      <v-container grid-list-xl fluid>
        <v-flex xs4>
          <k-user-menu 
            color="secondary" 
            user="test1@fi.bank" />
        </v-flex>
      </v-container>`
  }))
  .add('user menu with menu props', () => ({
    components: {
      VFlex, VContainer,
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
      <v-container grid-list-xl fluid>
        <v-flex xs4>
          <k-user-menu 
            color="primary" 
            user="test2@fi.bank" 
            :userLinks="userLinks"/>
        </v-flex>
      </v-container>`
  }))