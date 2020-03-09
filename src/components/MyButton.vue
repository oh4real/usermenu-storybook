<template>
  <v-btn 
  color="primary"
  text
  @click="onClick"
  v-bind="$attrs"
  v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator'

@Component ({})
export default class MyButton extends Vue {
  onClick() {
      alert("Clicked")
      this.$emit("click")
    }
};
</script>
