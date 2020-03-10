<template>
  <div class="text-center">
    <v-menu 
      offset-y 
      tile 
      min-width="250px" 
      flat
      :nudge-bottom="10"
      content-class="does-this-work"
      >
      <template v-slot:activator="{ on }">
        <v-btn
          class="v-btn-case-override"
          dark
          text
          block
          tile
          color="secondary" 
          v-on="on"
          v-bind="$attrs"
        > <v-icon>mdi-account</v-icon> {{ user }}
        </v-btn>
      </template>
      <v-list class="k-user-menu-list" flat tile min-width="250px">
        <v-list-item-group>
          <v-list-item
            @click="goToSettings"
            flat tile
          >
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Account Settings</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
        <v-list-item
          @click="goToLogout"
          flat tile
        ><v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
          <v-list-item-title> Log Out</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

interface UserLinks {
  settings: string,
  logout: string
}

@Component({
})
export default class KUserMenu extends Vue {
    @Prop({ default: 'user@fi.bank' }) readonly user!: string
    @Prop({ default: () => ({ settings: 'https://www.google.com', logout: '/api/logout' }) }) readonly userLinks!: UserLinks
    goToLogout (): void {
      window.location.href = this.userLinks.logout
    }
    goToSettings (): void {
      window.location.href = this.userLinks.settings
    }
}
</script>

<style scoped lang="scss">
    @import '@/sass/variables.scss';

    .k-user-menu-list {
      border-top:  5px solid red;
    }
    .v-btn-case-override {
      text-transform: none;
    }

    .does-this-work {
      border-top: solid 5px red;
    }
</style>