import { storiesOf } from "@storybook/vue"
import { VContainer, VFlex, VLayout } from "vuetify/lib"
import StatsCard from "@/components/StatsCard"
import MyButton from "@/components/MyButton"

storiesOf("StatsCard", module)
  .add('stats-card default color', () => ({
    components: {
      VContainer, VFlex, VLayout,
      StatsCard
    },
    template: `
      <v-container grid-list-xl fluid>
        <v-flex xs4>
          <stats-card title="1.200" sub-title="assigned credits"/>
        </v-flex>
      </v-container>`
  }))
  .add('my button', () => ({
    components: {
      VContainer, VFlex, VLayout,
      MyButton
    },
    template: '<v-container><v-flex xs4><my-button>Test</my-button></v-flex></v-container>'
  }))
  .add('stats-card green color', () => ({
    components: {
      VContainer, VFlex, VLayout,
      StatsCard
    },
    template: '<v-container grid-list-xl fluid><v-layout row wrap><v-flex xs4><stats-card title="1.200" sub-title="assigned credits" color="green" icon="mdi-plus" /></v-flex></v-layout></v-container>'
  }));