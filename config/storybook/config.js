import { VApp } from 'vuetify/lib';
import {
    configure,
    addDecorator
} from '@storybook/vue';
import vuetify from '@/plugins/vuetify';

addDecorator(() => ({
    vuetify,
    components: {
        VApp
    },
    template: '<v-app><story/></v-app>'
}));

configure(require.context('@/stories', true, /\.stories\.js$/), module);