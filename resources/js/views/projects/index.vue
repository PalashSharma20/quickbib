<template>
  <div class="container large">
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
      :text="autoCitationDialog.text"
      :dismiss="true"
    />

    <div class="big-title">
      <span>
        <h1>Projects</h1>
      </span>
      <div class="right">
        <a class="btn primary" href="#" @click.prevent="openAddProjectDialog">
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
      <router-link v-else-if="page === 'mine'" class="no-project-message" to="/projects/add">
        <div class="icon flex__center flex">
          <i class="material-icons">add</i>
        </div>
        <span class="text">You have no projects. Create a new one.</span>
      </router-link>
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
import AddProjectDialog from "@/components/AddProjectDialog";

export default {
  name: "AllProjects",
  data() {
    return {
      addProjectDialog: {
        visible: false,
        submit: true
      }
    };
  },
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
  methods: {
    openAddProjectDialog() {
      this.$http.get("/auth/user").then(res => {
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
        style_id: project.style.objectID
      };
      this.$http.post("/projects", p).then(res => {
        let project = res.data;
        this.$parent.projects.mine.push(project);
        this.$router.push(`/projects/${project.routeKey}`);
      });
    }
  },
  components: {
    AddProjectDialog
  }
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
