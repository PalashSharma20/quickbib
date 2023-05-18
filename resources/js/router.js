import Router from "vue-router";

import Login from "./views/login";

const Projects = () =>
  import(/* webpackChunkName: "projects" */ "./views/projects");
const Project = () =>
  import(/* webpackChunkName: "projects" */ "./views/projects/_id");
const Form = () =>
  import(/* webpackChunkName: "citations" */ "./views/projects/_id/citations");

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        auth: false,
        showMenu: true,
      },
    },
    {
      path: "/about",
      name: "About Us",
      component: () =>
        import(/* webpackChunkName: "static" */ "./views/static/about"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/pricing",
      name: "Plans & Pricing",
      component: () =>
        import(/* webpackChunkName: "static" */ "./views/static/pricing"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/privacy",
      name: "Privacy Policy",
      component: () =>
        import(/* webpackChunkName: "static" */ "./views/static/privacy"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/tos",
      name: "Terms of Service",
      component: () =>
        import(/* webpackChunkName: "static" */ "./views/static/tos"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/users/me",
      name: "My Account",
      component: () =>
        import(/* webpackChunkName: "static" */ "./views/user/me"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/",
      name: "My Projects",
      component: Projects,
      meta: {
        page: "mine",
        auth: true,
        searchBar: "Search Projects",
      },
    },
    {
      path: "/projects/shared",
      name: "Shared Projects",
      component: Projects,
      meta: {
        page: "shared",
        auth: true,
        searchBar: "Search Projects",
      },
    },
    {
      path: "/projects/:project_id",
      name: "View Project",
      component: Project,
      meta: {
        title: false,
        auth: true,
        page: "view",
        searchBar: "Search Citations",
      },
    },
    {
      path: "/projects/:project_id/export",
      name: "Export Project",
      component: Project,
      meta: {
        title: false,
        auth: true,
        page: "export",
      },
    },
    {
      path: "/projects/:project_id/citations",
      name: "Add Citation",
      component: Form,
      meta: {
        auth: true,
        page: "add",
      },
    },
    {
      path: "/projects/:project_id/citations/:citation_id",
      name: "Edit Citation",
      component: Form,
      meta: {
        auth: true,
        page: "edit",
      },
    },
    {
      path: "/admin/analytics",
      name: "Analytics",
      component: () =>
        import(/* webpackChunkName: "analytics" */ "./views/admin/analytics"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/404",
      name: "404 Not Found",
      component: () =>
        import(/* webpackChunkName: "static" */ "./views/static/404"),
      meta: {},
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          x: 0,
          y: 0,
        });
      }, 300);
    });
  },
});

router.beforeEach((to, from, next) => {
  let title = to.meta.title || null;
  if (to.meta.title != false) {
    document.title = `${to.name} — QuickBib`;
  }
  next();
});

export default router;
