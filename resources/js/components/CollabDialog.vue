<template>
  <Dialog
    :dismiss="true"
    type="big"
    :show="show"
    title="Invite a Collaborator"
    text="If the person you wish to share your bibliography with has an account on this site, you can add them as a collaborator. They can add or remove people (except the creator)."
    @close="$emit('close')"
  >
    <input
      autocomplete="off"
      class="big-input"
      placeholder="Search Name or Email"
      type="text"
      v-model="userSearch.query"
    />
    <div class="list">
      <ul class="options">
        <transition name="fade">
          <li
            v-for="user in userSearch.results"
            :key="user.id"
            @click.prevent="addCollaborator(user.id)"
          >
            <h3>{{ user.name }}</h3>
            <h4>{{ user.email }}</h4>
          </li>
        </transition>
      </ul>
      <transition name="fade">
        <ul v-if="project.collaborators" class="selected">
          <li v-for="collaborator in project.collaborators" :key="collaborator.id">
            {{ collaborator.name }}
            <div
              v-if="collaborator.id != project.user_id"
              class="d flex__center flex"
              @click.prevent="removeCollaborator(collaborator.id)"
            >
              <i class="material-icons">close</i>
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "./Dialog";

export default {
  name: "CollabDialog",
  props: ["show", "project"],
  data() {
    return {
      userSearch: {
        query: "",
        results: null
      }
    };
  },
  watch: {
    "userSearch.query": {
      handler(searchTerm) {
        searchTerm = searchTerm.trim();
        let projectId = this.project.routeKey;
        clearTimeout(this.delay);
        this.delay = setTimeout(() => {
          this.userSearch.results = null;
          if (searchTerm != "") {
            this.$http
              .post("/users/search", {
                projectId,
                searchTerm,
                numberOfResults: 2
              })
              .then(response => {
                this.userSearch.results = response.data;
              });
          }
        }, 1000);
      }
    }
  },
  methods: {
    addCollaborator(id) {
      this.userSearch.results = null;
      this.userSearch.query = "";
      this.$emit("addCollaborator", id);
    },
    removeCollaborator(id) {
      this.$emit("removeCollaborator", id);
    }
  },
  components: {
    Dialog
  }
};
</script>

<style lang="scss" scoped>
.selected {
  width: 100%;
  display: flex;
  padding: 0;
  li {
    display: block;
    margin: 10px 10px 10px 0;
    background: var(--main-color);
    padding: 0 34px 0 12px;
    font-size: 18px;
    float: left;
    border-radius: 15px;
    color: #fff;
    position: relative;
    box-shadow: var(--box-shadow-color) 0 10px 24px 0;
    .d {
      position: absolute;
      right: 4px;
      height: 24px;
      width: 24px;
      top: 4.5px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      user-select: none;
      i {
        font-size: 15px;
      }
    }
  }
}
</style>
