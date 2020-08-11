import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*MIXINS*/
import formatMoney from "./mixins/formatMoney";
import formatDate from "./mixins/formatDate";
import getAddress from "./mixins/getAddress";
import currentTime from "./mixins/currentTime";

Vue.config.productionTip = false;

Vue.mixin(formatMoney);
Vue.mixin(formatDate);
Vue.mixin(getAddress);
Vue.mixin(currentTime);

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
