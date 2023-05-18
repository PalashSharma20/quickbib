<template>
  <div v-if="$auth.ready()" id="app" :class="$auth.user()?.theme">
    <Header ref="header" />
    <AddProjectDialog
      v-if="addProjectDialog.submit"
      :show="addProjectDialog.visible"
      @submit="addProject"
      @close="addProjectDialog.visible = false"
    />
    <Dialog
      v-else
      :show="addProjectDialog.visible"
      @close="addProjectDialog.visible = false"
      type="small"
      title="Project Limit Reached"
      :text="addProjectDialog.text"
      :dismiss="true"
    />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Dialog from "@/components/Dialog";
import AddProjectDialog from "@/components/AddProjectDialog";

export default {
  name: "App",
  data() {
    return {
      title: "",
      theme: "light",
      addProjectDialog: {
        visible: false,
        submit: true,
      },
    };
  },
  mounted() {
    this.$auth.load().then(this.getProjects);
  },
  computed: {
    user() {
      return this.$auth.user()?.email;
    },
  },
  watch: {
    title(val) {
      document.title = `${val} — QuickBib`;
    },
    user() {
      this.getProjects();
    },
  },
  methods: {
    getProjects() {
      this.projects = null;
      this.$http.get(`projects`).then((response) => {
        this.projects = response.data;
      });
    },
    getInitials(name) {
      let parts = name.split(" "),
        initials = "",
        length = parts.length > 3 ? 3 : parts.length;
      for (let i = 0; i < length; i++) {
        if (parts[i].length > 0 && parts[i] !== "") {
          initials += parts[i][0];
        }
      }
      return initials;
    },
    openAddProjectDialog() {
      this.$http.get("/auth/user").then((res) => {
        if (!res.data.data.project_usage.status) {
          this.addProjectDialog.submit = false;
          this.addProjectDialog.text = `You already have ${
            this.$auth.user().project_usage.n
          } projects. To add more, please upgrade your plan or delete existing projects.`;
        }
        this.addProjectDialog.visible = true;
      });
    },
    addProject(project) {
      let p = {
        name: project.name,
        style_id: project.style.objectID,
      };
      this.$http.post("/projects", p).then((res) => {
        let project = res.data;
        this.$refs.header.sidebarActive = false;
        this.projects.mine.push(project);
        window.location.href = `/projects/${project.routeKey}`;
      });
    },
  },
  components: {
    Header,
    Dialog,
    AddProjectDialog,
  },
};
</script>

<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Roboto:400,500,700|Material+Icons";
:root {
  --main-color: #4e9af7;
  --nav-link-color: #90949c;
}
#app {
  --default-text-color: #000;
  --background-color: #fafafa;
  --menu-box-background-color: #fff;
  --menu-color: #f5f5f5;
  --menu-sel-color: #ebebeb;
  --title-color: #353535;
  --title-sec-color: #666;
  --nav-link-select-color: #4b4f56;
  --header-background-color: #fff;
  --form-background-color: #fff;
  --newEle-background-color: #ebebeb;
  --dialog-background-color: #fff;
  --box-shadow-color: rgba(206, 212, 218, 0.5);
  --border-color: #999;
  --input-background-color: #fff;
  &.dark {
    --default-text-color: #fff;
    --background-color: #000;
    --menu-box-background-color: #0a0a0a;
    --menu-color: #060606;
    --menu-sel-color: #111;
    --title-color: #fff;
    --title-sec-color: #90949c;
    --nav-link-select-color: #fff;
    --header-background-color: #040404;
    --form-background-color: #0d0d0d;
    --newEle-background-color: #0c0c0c;
    --dialog-background-color: #0e0f10;
    --box-shadow-color: rgba(10, 10, 10, 0.3);
    --border-color: #0c0c0c;
    --input-background-color: #141414;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
body {
  font-family: "Roboto", sans-serif;
}
#app {
  min-height: 100vh;
  padding-top: 50px;
  overflow-x: hidden;
  background-color: var(--background-color);
}
a {
  text-decoration: none;
}
.disabled {
  pointer-events: none;
  -webkit-pointer-events: none;
}
.mobile {
  display: none;
}
.flex {
  display: flex;
}
.flex__center {
  justify-content: center;
  align-items: center;
}
.big-title {
  display: flex;
  margin-bottom: 15px;
  > span {
    flex: 1;
    margin-right: 20px;
    h1 {
      font-size: 42px;
      font-weight: 400;
      color: var(--title-color);
    }
    a {
      color: inherit;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .btn {
      border-radius: 20px;
      text-align: center;
      color: var(--default-text-color);
      padding: 8px 12px;
      font-size: 13px;
      display: flex;
      align-items: center;
      font-weight: 500;
      margin: 0 6px;
      &.primary {
        background: var(--main-color);
        color: #fff;
      }
      &.secondary {
        background: var(--input-background-color);
        color: var(--default-text-color);
      }
      &.danger {
        background: #ed1b2e;
        color: #fff;
      }
      &:hover {
        opacity: 0.8;
      }
      i {
        font-size: 16px;
        margin-left: 3px;
      }
    }
  }
}
.tabs {
  border-bottom: 2px solid var(--menu-sel-color);
  display: flex;
  margin-bottom: 15px;
  .link {
    position: relative;
    padding: 18px 5px;
    margin: 0 10px;
    color: var(--nav-link-color);
    font-weight: 400;
    font-weight: 500;
    font-size: 13px;
    vertical-align: middle;
    margin-bottom: -2px;
    &:nth-child(1) {
      margin-left: 0;
    }
    &.s {
      color: var(--nav-link-select-color);
      &:after {
        content: "";
        height: 2px;
        width: 100%;
        position: absolute;
        background: var(--main-color);
        left: 0;
        bottom: 0;
      }
    }
  }
}
.texture {
  background-blend-mode: color-burn;
  background-color: var(--main-color);
  background-size: 600px;
}
.texture--hex {
  background-image: url("/static/media/textures/what-the-hex.png");
}
.texture--lines {
  background-image: url("/static/media/textures/funky-lines.png");
}
.texture--hypnotize {
  background-image: url("/static/media/textures/hypnotize.png");
}
.overlay {
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.8;
  background: var(--menu-color);
}
.section {
  width: 100%;
  position: relative;
}
h2 {
  padding: 10px 0;
  bottom: initial;
  color: var(--title-color);
  font-weight: 400;
}
.container {
  max-width: 1240px;
  margin: 50px auto;
  width: 90%;
  &.small {
    max-width: 600px;
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  &.large {
    max-width: 1340px;
  }
  ol,
  p,
  ul {
    display: block;
    padding: 10px 0;
    color: var(--title-sec-color);
    font-weight: 400;
    line-height: 1.8;
  }
  ol,
  ul {
    padding-left: 40px;
  }
  li {
    padding: 4px 0;
  }
  a {
    color: var(--main-color);
  }
}
.no-project-message {
  flex: 1;
  justify-self: center;
  align-self: center;
  opacity: 0.75;
  display: block;
  text-decoration: none;
  user-select: none;
  .icon {
    height: 200px;
    width: 200px;
    margin: 50px auto;
    i {
      color: var(--title-color);
      font-size: 300px;
    }
  }
  .text {
    display: block;
    text-align: center;
    padding: 10px 0;
    font-size: 20px;
    color: var(--default-text-color);
    font-weight: 400;
    text-transform: uppercase;
  }
}
.avatar {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;
  span {
    color: var(--avatar-color, var(--main-color));
    font-size: 12px;
  }
}
.data {
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 10px 50px -5px rgba(0, 0, 0, 0.05);
  background: var(--form-background-color);
}
.form {
  min-width: 432px;
  max-width: 500px;
  width: 30%;
  margin: 1em auto;
  padding: 50px 30px;
  background: var(--form-background-color);
  border-radius: 24px;
  flex-flow: row wrap;
}
.form-title {
  padding-bottom: 20px;
  color: var(--title-sec-color);
  font-weight: 500;
  position: relative;
  bottom: 5px;
}
.button {
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 13px 24px;
  margin: 0.3em 0 1em;
  width: 100%;
  color: #fff !important;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1px;
  background: 0 0;
  border: 0;
  border-radius: 3px;
  transition: all 0.15s ease;
  background: var(--main-color);
  overflow: hidden;
  box-shadow: var(--box-shadow-color) 0 10px 24px 0;
  outline: 0;
  &.button-green {
    background: #00d1b2;
  }
  &.button-red {
    background: #ed1b2e;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media only screen and (max-width: 1020px) {
  .big-title {
    span {
      display: block;
    }
  }
}
@media only screen and (max-width: 810px) {
  .big-title {
    .right {
      .btn {
        padding: 12px;
        span {
          display: none;
        }
        i {
          margin: 0;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .tabs {
    .link {
      flex: 1;
      text-align: center;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  .mobile {
    display: block !important;
  }
  .form {
    min-width: initial;
    width: 90%;
    max-width: 432px;
  }
}
</style>
