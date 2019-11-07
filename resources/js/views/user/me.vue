<template>
  <div v-if="$auth.ready()" class="container account flex">
    <div class="content">
      <div class="big-title">
        <span>
          <h1>My Account</h1>
        </span>
      </div>
      <p>We collect the bare minimum information we need for this service to be usable because we value your privacy.</p>
      <p>We do not allow you to change your name or email as it may affect your authentication in the future.</p>
    </div>
    <table class="data">
      <tr>
        <td>Name</td>
        <td>{{ user.name }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{ user.email }}</td>
      </tr>
      <tr>
        <td>Plan</td>
        <td>
          <p style="display: inline-block">{{ user.plan }}</p>
          <router-link to="/pricing" class="button buttonBlue">Change Plan</router-link>
        </td>
      </tr>
      <tr>
        <td>Theme</td>
        <td id="theme" style="text-transform: capitalize">
          <p>{{ theme ? "Dark" : "Light" }}</p>
          <input type="checkbox" id="dark-mode-switch" v-model="theme" />
          <label for="dark-mode-switch"></label>
        </td>
      </tr>
      <tr>
        <td>Joined</td>
        <td>
          <p>{{ formatDate(user.created_at) }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      theme: this.$auth.user().theme === "dark"
    };
  },
  computed: {
    user() {
      return this.$auth.user();
    }
  },
  watch: {
    theme(val) {
      this.$auth.user().theme = val ? "dark" : "light";
      this.$http.post(`users/me/set-theme`, {
        theme: this.$auth.user().theme
      });
    }
  },
  methods: {
    formatDate(date) {
      const month = f =>
        Array.from(Array(12), (e, i) =>
          new Date(25e8 * ++i).toLocaleString("en-US", {
            month: f
          })
        );
      date = new Date(date);
      return `${date.getDate()} ${
        month`long`[date.getMonth()]
      } ${date.getFullYear()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.account {
  .content {
    width: 30%;
    margin-top: 10px;
    padding-right: 20px;
  }
  table {
    flex: 1;
    margin: 60px 0 0;
    table-layout: fixed;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 50px -5px rgba(0, 0, 0, 0.05);
    background: var(--form-background-color);
    td {
      color: var(--default-text-color);
      padding: 25px;
      position: relative;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &:nth-child(1) {
        width: 100px;
      }
      &:nth-child(2) {
        color: var(--title-sec-color);
        width: calc(100% - 100px);
      }
    }
  }
  #dark-mode-switch {
    display: none;
    &:checked ~ label {
      &:after {
        right: 0;
        background-color: #353535;
      }
      &:before {
        background-color: #222;
      }
    }
  }
  label {
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    &:after {
      content: "";
      transition: 0.25s all ease-in;
    }
    &:before {
      content: "";
      transition: 0.25s all ease-in;
      display: block;
      height: 14px;
      width: 50px;
      background-color: #ebebeb;
      border-radius: 7px;
      position: relative;
    }
    &:after {
      top: -4px;
      position: absolute;
      height: 22px;
      width: 22px;
      right: calc(100% - 22px);
      background-color: #999;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
      border-radius: 50%;
    }
  }
  td .button {
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: auto;
    margin: 0;
    position: absolute;
    color: #fff;
  }
}
@media only screen and (max-width: 810px) {
  .account {
    flex-direction: column;
    .content {
      width: 95%;
      margin: 0 auto;
    }
    table {
      margin: 0;
      tr {
        padding: 0;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .account td .button {
    display: none;
  }
}
</style>
