import "es6-promise/auto";
import axios from "axios";
import Vue from "vue";
import auth from "@websanova/vue-auth/dist/v2/vue-auth.common.js";
import driverAuthBearer from "@websanova/vue-auth/dist/drivers/auth/bearer.js";
import driverHttpAxios from "@websanova/vue-auth/dist/drivers/http/axios.1.x.js";
import driverRouterVueRouter from "@websanova/vue-auth/dist/drivers/router/vue-router.2.x.js";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import App from "./App";
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
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Vue.auth.logout({
        redirect: "/login",
      });
    }
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);
Vue.use(auth, {
  plugins: {
    http: Vue.axios,
    router: Vue.router,
  },
  drivers: {
    auth: driverAuthBearer,
    http: driverHttpAxios,
    router: driverRouterVueRouter,
  },
  options: {
    rolesKey: "type",
    logoutData: {
      url: "auth/logout",
      method: "POST",
      redirect: "/login",
      makeRequest: true,
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
