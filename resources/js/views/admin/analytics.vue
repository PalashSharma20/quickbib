<template>
  <div v-if="analytics" class="analytics">
    <div @click="nextGraph = !nextGraph" class="graph_wrapper">
      <div :class="['graph_container', { next: nextGraph }]">
        <div
          v-for="(data, type) in analytics.graphs"
          :key="type"
          class="box med"
          :data-graph-type="type"
        >
          <div class="box-container">
            <h1>{{ type == "citations" ? "Citation" : "User" }} Growth</h1>
            <Chart
              class="graph"
              :data="data"
              :label="type == 'citations' ? 'Citation' : 'User'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="boxes">
      <div
        v-for="(data, type) in analytics.data"
        :key="type"
        class="box"
        :data-type="type"
        :style="{ '--bar-color': '#' + colors[type] }"
      >
        <div class="box-container">
          <div class="meta">
            <h1>
              {{
                type == "collaborativeProjects"
                  ? "collaborative Projects"
                  : type
              }}
            </h1>
            <h3 v-if="data.change.val != 0" :class="data.change.type">
              {{ data.change.val }}
            </h3>
          </div>
          <h2>{{ data.val }}</h2>
          <div class="bars">
            <div
              v-for="(bar, i) in data.minigraph"
              :key="i"
              class="bar"
              :style="{
                height: `${(100 * bar) / Math.max(...data.minigraph)}%`,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="big-boxes">
      <div class="box vertical-large top_users" :data-set="analytics.topUsers">
        <div class="box-container">
          <h1>top users</h1>
          <table>
            <tr
              v-for="(user, i) in analytics.topUsers"
              :key="user.id"
              @click="adminLogin(user.name, user.email)"
            >
              <td>{{ i + 1 }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.citations_count }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="box vertical-large space">
        <div class="box-container">
          <h1>Search Users</h1>
          <input
            id="user_search"
            v-model="searchTerm"
            placeholder="Name or Email"
            type="text"
          />
          <ul class="user_search">
            <li
              v-for="user in userSearchResults"
              :key="user.id"
              @click="adminLogin(user.name, user.email)"
            >
              <p>{{ user.name }}</p>
              <span>{{ user.email }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  name: "Analytics",
  data() {
    return {
      nextGraph: false,
      delay: null,
      searchTerm: "",
      userSearchResults: null,
      analytics: null,
      colors: {
        users: "fe154c",
        citation: "f96bcf",
        projects: "69cdfa",
        collaborativeProjects: "7653bb",
      },
    };
  },
  created() {
    window.addEventListener("keyup", (e) => {
      if (e.keyCode == 37) {
        this.nextGraph = false;
      } else if (e.keyCode == 39) {
        this.nextGraph = true;
      }
    });
  },
  mounted() {
    this.getAnalytics();
  },
  watch: {
    searchTerm(searchTerm) {
      searchTerm = searchTerm.trim();
      clearTimeout(this.delay);
      this.delay = setTimeout(() => {
        this.userSearchResults = null;
        if (searchTerm != "") {
          this.$http
            .post("/users/search", {
              searchTerm,
              numberOfResults: 8,
            })
            .then((response) => {
              this.userSearchResults = response.data;
            });
        }
      }, 1000);
    },
  },
  components: {
    Chart,
  },
  methods: {
    getAnalytics() {
      this.$http
        .get("admin/analytics")
        .then((response) => {
          this.analytics = response.data;
        })
        .catch((error) => {
          this.$router.push({
            name: "My Projects",
          });
        });
    },
    adminLogin(name, email) {
      this.$http
        .post("admin/login", {
          name,
          email,
        })
        .then((response) => {
          this.$auth.logout();
          this.$auth.login({
            params: {
              token: response.data,
            },
            success: function () {
              window.location.href = "/";
            },
            staySignedIn: true,
            fetchUser: true,
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.analytics {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  padding: 20px;
  overflow-x: hidden;
  .graph_wrapper {
    height: 50%;
    width: 100%;
    flex-basis: 100%;
  }
  .graph_container {
    position: relative;
    left: 0;
    transition: 0.3s all ease-in;
    display: flex;
    &.next {
      left: calc(-100% + 5px);
    }
  }
  .box.med {
    flex: 0 0 calc(100% - 5px);
    height: 450px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .graph {
    position: relative;
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
    height: 90%;
    width: 100%;
  }
}
.analytics {
  .boxes {
    height: 50%;
    width: 50%;
    flex-basis: 50%;
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
  }
  .box {
    position: relative;
    flex-basis: 50%;
    height: 25vw;
    padding: 5px;
    .box-container {
      padding: 5.5vh 1.4vw;
      position: relative;
      background: var(--menu-box-background-color);
      height: 100%;
      width: 100%;
      z-index: 3;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
    }
  }
  .meta {
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
  }
  h1 {
    text-transform: uppercase;
    letter-spacing: 0.03vw;
    font-weight: 500;
    font-size: 2.2vmin;
    color: var(--title-sec-color);
    padding: 0;
    height: auto;
  }
  h2 {
    display: block;
    margin-top: 10px;
    font-weight: 700;
    font-size: 10.1vmin;
    color: var(--title-color);
  }
  h3 {
    color: #00d1b2;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    &.down:before,
    &.up:before {
      font-family: "Material Icons";
    }
    &.down {
      color: #ff4c4c;
    }
    &.up:before {
      content: "\e5ce";
    }
    &.down:before {
      content: "\e5cf";
    }
  }
  .big-boxes {
    height: 50%;
    width: 50%;
    flex-basis: 50%;
    display: flex;
  }
  .box {
    &.vertical-large {
      height: 50vw;
      .box-container {
        height: 100%;
      }
    }
    .box-container .bars {
      height: 35%;
      transform-origin: center;
      transform: rotateX(180deg);
      display: flex;
      flex-direction: row-reverse;
      margin-top: auto;
      .bar {
        margin: 0.21vw;
        width: 0.21vw;
        height: 100%;
        background: var(--bar-color);
        min-height: 1%;
      }
    }
  }
  #user_search {
    margin-top: 10px;
    font-size: 1.6vmin;
    padding: 1.4vh 1.4vh 1.4vh 2.4vw;
    width: 100%;
    background: url("https://www.materialui.co/materialIcons/action/search_grey_192x192.png")
      no-repeat var(--menu-sel-color);
    background-size: 2.7vh;
    background-position: 1.1vh center;
    border: none;
    border-radius: 5px;
    top: 11%;
    color: var(--default-text-color);
    outline: 0;
  }
  ul {
    margin-top: 10px;
    width: calc(100% - 2.8vw);
    list-style-type: none;
    li {
      cursor: pointer;
      display: block;
      border-bottom: 1px solid var(--menu-sel-color);
      padding: 1.4vh;
      position: relative;
      * {
        margin: 0.4vh 0;
        display: block;
      }
      p {
        font-size: 2.2vmin;
        color: var(--title-color);
      }
      span {
        font-size: 1.6vmin;
        color: var(--title-sec-color);
      }
    }
  }
  table {
    margin-top: 10px;
    width: 100%;
    table-layout: fixed;
  }
  tr {
    padding: 0;
    cursor: pointer;
    clear: both;
    height: 7.7vh;
    td {
      float: left;
      padding: 1.5vh 0.034vw;
      width: auto;
      word-break: initial;
      background: 0 0;
      border: none;
      font-size: 2.2vmin;
      line-height: 1;
      white-space: nowrap;
      overflow-x: scroll;
      text-overflow: ellipsis;
      color: var(--default-text-color);
      &:nth-child(1) {
        text-align: center;
        width: 12%;
      }
      &:nth-child(2) {
        font-weight: 700;
        width: 73%;
      }
      &:nth-child(3) {
        text-align: center;
        width: 15%;
      }
    }
  }
}
@media screen and (orientation: portrait) {
  .analytics {
    .big-boxes,
    .graph_wrapper {
      display: none;
    }
    .boxes {
      flex-direction: column;
      flex-basis: 100%;
      width: 100%;
      height: 100%;
      .box-container {
        padding: 40px;
      }
      .box {
        width: 100%;
        height: 90vw;
      }
    }
    h1 {
      font-size: 2.2vmax;
    }
    h2 {
      font-size: 10.1vmax;
    }
    h3 {
      right: 10px;
    }
    .box .box-container .bars {
      right: 20px;
      .bar {
        margin: 3px;
        width: 3px;
      }
    }
  }
}
</style>
