import Vue from "vue";
import Vuetify from "vuetify/lib";

/** 
 * https://iconify.design/icon-sets/mdi/ 
 * requires @mdi/font:4.9.x  v5.0.x breaks everything!
 */
import '@mdi/font/css/materialdesignicons.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
