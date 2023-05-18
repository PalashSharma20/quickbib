<template>
  <div class>
    <transition name="fade">
      <div
        v-if="sidebarActive"
        class="overlay"
        @click="sidebarActive = false"
      ></div>
    </transition>
    <header>
      <div class="logo">
        <router-link to="/">
          <svg viewBox="0 0 400 123.7">
            <path
              d="M145.8,12.4c-2.4,1.5-3.4,3.5-3.2,6.4c0.6,8.7,12.7,8.8,13.5,0.1C156.6,13.3,150.6,9.5,145.8,12.4 M327.3,12.4
          c-2.4,1.5-3.4,3.5-3.2,6.4c0.6,8.7,12.7,8.8,13.5,0.1C338,13.3,332,9.5,327.3,12.4 M202.5,12.6c0,0.6,0.7,0.7,3.7,0.7h3.7v37.3V88
          h-3.7c-3,0-3.7,0.1-3.7,0.7c0,0.6,1.7,0.7,12.1,0.7c10.5,0,12.1-0.1,12.1-0.7c0-0.5-0.7-0.7-3.2-0.7h-3.2V77.1
          c0-6.6,0.2-10.7,0.4-10.4c0.2,0.2,4.1,5.1,8.7,10.7l8.2,10.3l-3.6,0.1c-2.6,0.1-3.6,0.3-3.6,0.7c0,0.9,61.9,1.4,66.5,0.6
          c12.1-2.3,17.6-8.1,17.5-18.6c-0.1-10.3-6-16.5-18.7-19.7l-3.2-0.8l4.1-1.5c9.7-3.5,13.4-8.1,12.9-16.3
          c-0.6-11.1-10.8-18.1-26.5-18.3c-20.3-0.2-29.8,0.2-29.8,1.1c0,0.9,0.3,0.9,4.6,0.9h4.6v36v36h-5.5h-5.5l-11.5-14.4l-11.5-14.4
          l1.7-1.6c1-0.9,4.5-4.1,7.9-7.1l6.2-5.5l3.6,0c2.8,0,3.6-0.2,3.6-0.7c0-0.6-1.3-0.7-8.7-0.7c-7.3,0-8.7,0.1-8.7,0.7
          c0,0.5,0.8,0.7,3.6,0.8l3.6,0.1l-21,18.6V37.8V11.9h-8.9C203.8,11.9,202.5,12,202.5,12.6 M344.6,12.6c0,0.6,0.7,0.7,3.7,0.7h3.7
          v37.3V88h-3.7c-3,0-3.7,0.1-3.7,0.7c0,0.6,1.3,0.7,9.2,0.7h9.2v-2.2V85l1.4,1.7c7.8,9.5,25.5,1.1,29.5-13.9
          c5.2-19.6-16.4-40.3-29.2-28l-1.7,1.6V29.2V11.9h-9.2C345.9,11.9,344.6,12,344.6,12.6 M36.8,12.8c-29.4,4.7-41.5,44.3-20.4,67
          c5.8,6.3,15.9,11.3,22.6,11.3c2.2,0,2.2,0.6,0.2,3.6c-5.1,7.4-1.6,14,8.9,16.6c12.3,3.1,24.3-1.9,23.7-9.8c-0.3-3.5-2.7-2.8-3.4,1
          c-1.9,9.4-10.2,9.1-15.3-0.5c-2.8-5.4-4.2-6.9-7.6-8.6c-3.3-1.7-3.7-2.2-1.5-2.2c12.5-0.1,27-12.6,31.3-27.3
          C83.4,37.1,62,8.8,36.8,12.8 M48.2,15.1C58.3,18.2,61.6,27.4,61.6,52c0,19.1-1.6,27.1-6.8,32.6c-7,7.5-22.8,6.7-28.2-1.5
          c-8.3-12.6-7.6-53.4,1.1-63.8C31.6,14.8,40.9,12.9,48.2,15.1 M291.4,17c3.9,2.3,5.1,6.3,5.1,16.4c0,14.1-1.7,16.1-13.7,16.1l-7,0
          V32.8c0-15.5,0.1-16.7,0.8-16.9C279.4,15.1,289.4,15.8,291.4,17 M182.5,41.9c-16,3.6-23.8,25.8-14.2,40.1c8.3,12.4,28,12.7,35.7,0.5
          c1.5-2.4,1.6-2.8,0.5-2.8c-0.5,0-1.4,0.9-2.3,2.3c-5.7,8.8-19.6,10.7-23.4,3.3c-4-7.9-3.4-32.9,0.9-39c3.8-5.4,12.4-3.8,11.7,2.1
          c-0.6,4.8,0.7,6.1,5.7,6.1c5.2,0,7.1-2.3,5.1-6.4C199.5,43.1,190.2,40.1,182.5,41.9 M377.3,44.1c4.3,2.4,5.5,7.8,5.2,23.9
          c-0.2,11.6-0.7,15.2-2.6,17.7c-4.5,6.2-14.3,3.2-16.9-5c-1.4-4.4-1.2-27.8,0.3-30.9C365.9,44,372.4,41.4,377.3,44.1 M79.7,44.2
          c0,0.6,0.7,0.7,3.9,0.7h3.9l0,15.9c0,17.2,0.2,18.9,2.5,22.8c5.3,9.1,21.3,9.5,25.9,0.7l0.9-1.6l0,6.6h9.2c7.8,0,9.2-0.1,9.2-0.7
          c0-0.6-0.7-0.7-3.7-0.7h-3.7V65.8V43.5h-8.9c-7.6,0-8.9,0.1-8.9,0.7c0,0.6,0.7,0.7,3.5,0.7h3.5l-0.1,16.6
          c-0.2,18.4-0.4,19.8-3.5,23.7c-3.9,4.8-11.3,5-13.5,0.3c-1.4-3-1.7-6.4-1.7-24.2V43.5h-9.2C81,43.5,79.7,43.6,79.7,44.2 M137,44.2
          c0,0.6,0.7,0.7,3.9,0.7h3.9v21.5V88h-3.9c-3.2,0-3.9,0.1-3.9,0.7c0,0.6,1.7,0.7,12.8,0.7c11.1,0,12.8-0.1,12.8-0.7
          c0-0.6-0.7-0.7-3.7-0.7h-3.7V65.8V43.5h-9.2C138.3,43.5,137,43.6,137,44.2 M318.4,44.2c0,0.6,0.7,0.7,3.9,0.7h3.9v21.5V88h-3.9
          c-3.2,0-3.9,0.1-3.9,0.7c0,0.6,1.7,0.7,12.8,0.7c11.1,0,12.8-0.1,12.8-0.7c0-0.6-0.7-0.7-3.7-0.7h-3.7V65.8V43.5h-9.2
          C319.8,43.5,318.4,43.6,318.4,44.2 M292.8,52c5.8,2,8.7,10.8,7.4,22.2c-1.4,12.1-5.4,15-19.5,14l-4.9-0.3V69.6V51.3h7.5
          C288.9,51.3,291.3,51.5,292.8,52"
            />
            <path
              class="m"
              d="M36.6,12.3C7.1,17-4.9,56.5,16.2,79.3c5.8,6.3,15.9,11.3,22.6,11.3c2.2,0,2.2,0.6,0.2,3.6c-5.1,7.4-1.6,14,8.9,16.6
          c12.3,3.1,24.3-1.9,23.7-9.8c-0.3-3.5-2.7-2.8-3.4,1c-1.9,9.4-10.2,9.1-15.3-0.5c-2.8-5.4-4.2-6.9-7.6-8.6c-3.3-1.7-3.7-2.2-1.5-2.2
          c12.5-0.1,27-12.6,31.3-27.3C83.1,36.6,61.7,8.3,36.6,12.3z M54.6,84.1c-7,7.5-22.8,6.7-28.2-1.5C18,70,18.8,29.2,27.5,18.8
          c3.8-4.5,13.1-6.4,20.4-4.2C58,17.7,61.4,26.9,61.4,51.5C61.4,70.6,59.7,78.6,54.6,84.1z"
            />
          </svg>
        </router-link>
      </div>
      <div class="spacer"></div>
      <div v-if="searchBar" class="header-search">
        <input
          v-model="searchString"
          :placeholder="searchBar"
          autocomplete="off"
          type="text"
          class="bar"
        />
      </div>
      <div class="spacer"></div>
      <div v-if="showMenu">
        <div
          @click="navActive = !navActive"
          :class="[
            'header-nav-toggle',
            'flex__center',
            { hidden: $auth.check() },
          ]"
        >
          <i class="material-icons">menu</i>
        </div>
        <ul :class="['header-nav', { open: navActive }]">
          <li>
            <router-link
              :class="['item', { s: this.$route.name === 'About Us' }]"
              @click.native="navActive = false"
              to="/about"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              :class="['item', { s: this.$route.name === 'Plans & Pricing' }]"
              @click.native="navActive = false"
              to="/pricing"
              >Plans & Pricing</router-link
            >
          </li>
          <li>
            <router-link
              :class="['item', { s: this.$route.name === 'Terms of Service' }]"
              @click.native="navActive = false"
              to="/tos"
              >Terms of Service</router-link
            >
          </li>
          <li>
            <router-link
              :class="['item', { s: this.$route.name === 'Privacy Policy' }]"
              @click.native="navActive = false"
              to="/privacy"
              >Privacy Policy</router-link
            >
          </li>
        </ul>
      </div>
      <div
        v-if="$auth.check()"
        @click="sidebarActive = !sidebarActive"
        class="ham-container flex flex__center"
      >
        <div class="ham">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </header>
    <div :class="['menu', { open: sidebarActive }]" v-if="$auth.check()">
      <div class="user-details">
        <div class="flex flex__center">
          <router-link
            class="flex"
            to="/users/me"
            @click.native="sidebarActive = false"
          >
            <div class="avatar flex flex__center">
              <span>{{ $parent.getInitials($auth.user().name) }}</span>
            </div>
            <span>{{ $auth.user().name }}</span>
          </router-link>
          <div @click="sidebarActive = false" class="close flex flex__center">
            <i class="material-icons">close</i>
          </div>
        </div>
        <a
          class="logout"
          href="/#"
          @click.prevent="
            sidebarActive = false;
            $auth.logout();
          "
          >LOGOUT</a
        >
      </div>

      <router-link class="label" to="/" @click.native="sidebarActive = false"
        >My Projects</router-link
      >
      <ul class="list" v-if="$parent.projects">
        <li v-for="p in $parent.projects.mine" :key="p.id">
          <router-link
            @click.native="sidebarActive = false"
            :class="[
              'link',
              'flex',
              {
                sel:
                  $route.params.project_id &&
                  $route.params.project_id === `${p.routeKey}`,
              },
            ]"
            :to="`/projects/${p.routeKey}`"
            >{{ p.name }}</router-link
          >
        </li>
        <a
          href="#"
          @click.prevent="
            $parent.openAddProjectDialog;
            sidebarActive = false;
          "
          class="link add flex"
        >
          <span>Add Project</span>
          <i class="material-icons">add</i>
        </a>
      </ul>

      <div class="footer">
        <router-link
          @click.native="sidebarActive = false"
          class="link"
          to="/about"
          >About Us</router-link
        >
        <router-link
          @click.native="sidebarActive = false"
          class="link"
          to="/pricing"
          >Plans &amp; Pricing</router-link
        >
        <router-link
          @click.native="sidebarActive = false"
          class="link"
          to="/tos"
          >Terms of Service</router-link
        >
        <router-link
          @click.native="sidebarActive = false"
          class="link"
          to="/privacy"
          >Privacy Policy</router-link
        >
        <span class="text">Palash Sharma &COPY; 2019</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navActive: false,
      sidebarActive: false,
      searchString: "",
      projects: [],
    };
  },
  computed: {
    searchBar() {
      return this.$route.meta.searchBar || false;
    },
    showMenu() {
      return this.$route.meta.showMenu || false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  background: var(--header-background-color);
  height: 50px;
  width: 100%;
  left: 0;
  z-index: 20;
  box-shadow: 0 1px 2px 0 var(--box-shadow-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    margin: 0 20px;
    a {
      height: 30px;
      display: block;
      svg {
        height: 100%;
        path {
          fill: var(--main-color);
        }
      }
    }
  }
  .spacer {
    flex: 1;
  }
}
.ham-container {
  width: 30px;
  height: 30px;
  margin: 0 20px;
  position: relative;
  background-color: rgba(#4e9af7, 0.1);
  border-radius: 50%;
  cursor: pointer;
  z-index: 20;
  transition: 0.2s right ease-in;
  .ham {
    position: relative;
    width: 18px;
    height: 12px;
    transform: rotate(0);
    transition: 0.5s ease-in-out;
    .bar {
      position: absolute;
      height: 2px;
      width: 100%;
      background: var(--main-color);
      opacity: 1;
      border-radius: 9px;
      left: 0;
      transform: rotate(0);
      transition: 0.25s ease-in-out;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 5px;
        width: 60%;
      }
      &:nth-child(4) {
        top: 10px;
        width: 78%;
      }
    }
  }
  &:hover .ham .bar {
    width: 100%;
  }
}
.header-search {
  display: flex;
  width: 40%;
  height: 100%;
  align-items: center;
  &::before {
    content: "\e8b6";
    font-family: "Material Icons";
    font-size: 20px;
    color: var(--nav-link-color);
    margin-right: 10px;
  }
  .bar {
    flex: 1;
    border: none;
    background-color: var(--header-background-color);
    color: var(--default-text-color);
    font-size: 14px;
    width: 100%;
    outline: 0;
    height: 100%;
  }
}
.header-nav-toggle {
  display: none;
  margin: 0 20px;
  color: var(--main-color);
  cursor: pointer;
  &.hidden {
    display: none !important;
  }
}
.header-nav {
  display: flex;
  transition: 0.2s top ease-in;
  padding-right: 20px;
  li {
    display: flex;
    padding: 0;
    list-style: none !important;
    height: 100%;
  }
  .item {
    text-decoration: none;
    display: block;
    color: var(--nav-link-color);
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 16px;
    &.s,
    &:hover {
      color: var(--nav-link-select-color);
    }
  }
}
.menu {
  transition: 0.2s all ease-in;
  z-index: 100;
  height: calc(100% - 56px);
  height: 100%;
  width: 290px;
  top: 0;
  right: -290px;
  background: var(--menu-color);
  background: var(--header-background-color);
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 0 20px;
  box-shadow: 0 1px 2px 0 var(--box-shadow-color);
  &.open {
    right: 0;
  }
  .label {
    padding: 10px 0;
    display: block;
    margin-top: 10px;
    color: var(--title-sec-color);
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .list {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    .link {
      align-items: center;
      padding: 12px 13px;
      margin: 5px 0;
      width: 100%;
      text-align: left;
      font-weight: 500;
      color: var(--title-color);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      border-radius: 4px;
    }
  }
  .link:hover {
    background: initial;
  }
  .list .link {
    &.sel,
    &:hover {
      background-color: var(--menu-sel-color);
    }
  }
  .add {
    opacity: 0.6;
    &:hover {
      background: none !important;
    }
    span {
      flex: 1;
    }
    i {
      font-size: 20px;
    }
  }
  .user-details {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--menu-sel-color);
    padding: 2px 0 10px;
    a {
      padding: 7.5px 0;
      font-weight: 500;
      color: var(--title-color);
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex-direction: row;
      align-items: center;
      flex: 1;
      &.logout {
        margin-top: 5px;
        background-color: var(--main-color);
        border-radius: 4px;
        text-align: center;
        width: 100%;
        color: #fff;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .avatar {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: rgba(#4e9af7, 0.1);
      margin-right: 15px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .close {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      color: var(--nav-link-color);
      justify-self: flex-end;
      cursor: pointer;
      i {
        font-size: 20px;
      }
    }
  }
  .footer {
    bottom: 0;
    margin-top: auto;
    padding: 20px 0 25px;
    color: #444;
    background-color: inherit;
    .text {
      display: block;
      margin-top: 20px;
    }
    .link {
      font-weight: 500;
      text-decoration: none;
      color: var(--title-sec-color);
      display: inline-block;
      margin: 5px 10px 5px 0;
      font-size: 14px;
    }
  }
}
@media only screen and (max-width: 810px) {
  header {
    .spacer {
      flex: 0;
    }
  }
  .header-search {
    flex: 1;
  }
  .header-nav-toggle {
    display: flex;
  }
  .header-nav {
    position: fixed;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fff;
    top: -100%;
    padding: 0;
    z-index: -1;
    &.open {
      top: 50px;
    }
    .item {
      width: 100%;
      padding: 20px;
    }
  }
}
@media only screen and (max-width: 600px) {
  header .logo {
    overflow: hidden;
    a {
      width: 19px;
    }
    svg {
      path {
        display: none;
        &.m {
          display: block !important;
        }
      }
    }
  }
}
</style>
