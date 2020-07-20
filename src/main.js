import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import formatMoney from "./mixins/formatMoney";

Vue.config.productionTip = false;

Vue.mixin(formatMoney);

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
