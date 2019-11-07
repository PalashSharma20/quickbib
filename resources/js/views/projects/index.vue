<template>
  <div class="container large">
    <div class="big-title">
      <span>
        <h1>Projects</h1>
      </span>
      <div class="right">
        <a class="btn primary" href="#" @click.prevent="$parent.openAddProjectDialog">
          <span>ADD PROJECT</span>
          <i class="material-icons">add</i>
        </a>
      </div>
    </div>
    <div class="tabs">
      <router-link :class="['link', { s: page === 'mine' }]" to="/">CREATED BY ME</router-link>
      <router-link
        :class="['link', { s: page === 'shared' }]"
        to="/projects/shared"
        @click.native="$parent.getProjects"
      >SHARED WITH ME</router-link>
    </div>
    <div v-if="projects" class="flex">
      <div v-if="projects.length > 0" class="projects">
        <router-link
          v-for="project in filteredProjects"
          :key="project.routeKey"
          class="link"
          :to="`/projects/${project.routeKey}`"
        >
          <p v-if="page == 'shared'" class="name">{{ project.user.name }}</p>
          {{ project.name }}
        </router-link>
      </div>
      <a
        href="#"
        @click.prevent="$parent.openAddProjectDialog"
        v-else-if="page === 'mine'"
        class="no-project-message"
      >
        <div class="icon flex__center flex">
          <i class="material-icons">add</i>
        </div>
        <span class="text">You have no projects. Create a new one.</span>
      </a>
      <a v-else class="no-project-message">
        <div class="icon flex flex__center">
          <i class="material-icons">folder_shared</i>
        </div>
        <span class="text">No projects have been shared with you.</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllProjects",
  computed: {
    projects() {
      return this.$parent.projects ? this.$parent.projects[this.page] : null;
    },
    searchString() {
      return this.$parent.$refs.header.searchString.toLowerCase().trim();
    },
    filteredProjects() {
      return this.projects.filter(project =>
        project.name.toLowerCase().includes(this.searchString)
      );
    },
    page() {
      return this.$route.meta.page;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.projects {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 60px;
  margin: 10px auto;
  .link {
    background: var(--menu-box-background-color);
    text-align: left;
    padding: 20px;
    display: block;
    box-shadow: var(--box-shadow-color) 0 10px 24px 0;
    color: var(--title-color);
    font-weight: 500;
    transition: 0.3s box-shadow ease-in;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 4px;
    .name {
      font-size: 11px;
      margin-bottom: 5px;
      font-weight: 100;
      text-transform: uppercase;
      color: var(--title-sec-color);
      padding: 0;
      line-height: initial;
    }
    &:hover {
      box-shadow: var(--box-shadow-color) 0 20px 24px 0;
    }
  }
}
@media only screen and (max-width: 1230px) {
  .projects {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media only screen and (max-width: 1020px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
}
@media only screen and (max-width: 810px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 600px) {
  .projects {
    margin: 0;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
}
</style>
