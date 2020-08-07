import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import formatMoney from "./mixins/formatMoney";
import formatDate from "./mixins/formatDate";

Vue.config.productionTip = false;

Vue.mixin(formatMoney);
Vue.mixin(formatDate);

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
