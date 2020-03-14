<template>
  <div>
    <v-menu 
      offset-y 
      tile 
      min-width="180px" 
      flat
      content-class="k-user-menu-list-top-border"
      :nudge-bottom="computedMarginTop"
      >
      <template v-slot:activator="{ on }">
        <v-btn
          x-large
          class="v-btn-case-override"
          dark
          text
          depressed
          tile
          color="secondary" 
          v-on="on"
          v-bind="$attrs"
        > <v-icon>mdi-account</v-icon> {{ user }}
        </v-btn>
      </template>
      <v-list 
        class="k-user-menu-list" 
        min-width="180px" 
        subheader >
        <v-list-item-group>
          <v-list-item
            @click="goToSettings"
            flat tile
          >
            <v-list-item-icon class="k-user-menu-icon">
              <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account Settings</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
        <v-list-item
          @click="goToLogout"
          flat tile
        ><v-list-item-icon class="k-user-menu-icon"><v-icon>mdi-logout</v-icon></v-list-item-icon>
          <v-list-item-title>Log Out</v-list-item-title>
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

    get computedMarginTop (): string {
      return (this.$vuetify.application.top - 36) / 2 - 5 +  "px"
    }
}
</script>

<style scoped lang="scss">

    .k-user-menu-list {
      border-radius: 0 !important;
    }
    .v-btn-case-override {
      text-transform: none;
      border-bottom: 4px solid #D41A27;
      margin-bottom: -1px;
    }

    .k-user-menu-list-top-border {
      border-top: 5px solid #D41A27;
    }

    .k-user-menu-icon {
        margin-right: 12px !important;
    }
    
</style>