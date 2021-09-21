import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vue-awesome/icons";

import Icon from "vue-awesome/components/Icon";

Vue.component("v-icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  components: {
    "v-icon": Icon,
  },
}).$mount("#app");
