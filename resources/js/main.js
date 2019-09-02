import "es6-promise/auto";
import axios from "axios";
import Vue from "vue";
import VueAuth from "@websanova/vue-auth";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import App from "./App";
import auth from "./auth";
import router from "./router";
import InstantSearch from "vue-instantsearch";
import VueObserveVisibility from "vue-observe-visibility";

Vue.use(InstantSearch);
Vue.use(VueObserveVisibility);

// Set Vue router
Vue.router = router;
Vue.use(VueRouter);

// Set Vue authentication
axios.defaults.baseURL = `/api`;
Vue.use(VueAxios, axios);
Vue.use(VueAuth, auth);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
