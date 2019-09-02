<template>
  <div v-if="project" class="container large">
    <AutoCitationDialog
      v-if="autoCitationDialog.submit"
      :show="autoCitationDialog.visible"
      @submit="autoCitation"
      @close="autoCitationDialog.visible = false"
    />
    <Dialog
      v-else
      :show="autoCitationDialog.visible"
      @close="autoCitationDialog.visible = false"
      type="small"
      title="Citation Limit Reached"
      :text="autoCitationDialog.text"
      :dismiss="true"
    />

    <StyleDialog
      :show="styleDialog"
      :project_style="project.style"
      @selected="setStyle"
      @close="styleDialog = false"
    />
    <CollabDialog
      :show="collabDialog"
      :project="project"
      @addCollaborator="addCollaborator"
      @removeCollaborator="removeCollaborator"
      @close="collabDialog = false"
    />
    <Dialog
      :show="deleteProjectDialog"
      @submit="deleteProject"
      @close="deleteProjectDialog = false"
      type="small delete-project"
      text="Project and citations can't be recovered after this. Do you wish to proceed?"
    />
    <div class="meta">
      <div class="big-title project">
        <span>
          <h1>
            <router-link :to="`/projects/${project.routeKey}`">{{ project.name }}</router-link>
          </h1>
          <h4
            :data-count="citationsLoaded ? `${filteredCitations.length} Citation${filteredCitations.length != 1 ? 's' : ''} | ` : ''"
            :data-username="project.user.name"
            class="citation-count"
          ></h4>
        </span>
        <div class="right">
          <a class="btn primary" href="#" @click.prevent="openAutoCitationDialog">
            <span>ADD CITATION(S)</span>
            <i class="material-icons">add</i>
          </a>
          <a class="btn secondary" href="#" @click.prevent="styleDialog = true">
            <span>STYLE</span>
            <i class="material-icons">format_quote</i>
          </a>
          <a class="btn secondary" href="#" @click.prevent="collabDialog = true">
            <span>COLLABORATORS</span>
            <i class="material-icons">people</i>
          </a>
          <a
            v-if="project.user_id == this.$auth.user().id"
            class="btn danger"
            href="#"
            @click.prevent="deleteProjectDialog = true"
          >
            <span>DELETE</span>
            <i class="material-icons">delete</i>
          </a>
        </div>
      </div>
      <div class="collaborators" v-if="project.collaborators.length > 1">
        <div
          v-for="collaborator in firstFiveCollaborators"
          :key="collaborator.id"
          class="collaborator"
        >
          <div class="avatar" :style="{ backgroundColor: `#ffa5001A` }">
            <span :style="{ color: `#ffa500` }">{{ $parent.getInitials(collaborator.name) }}</span>
          </div>
        </div>
        <div
          v-if="project.collaborators.length > 5"
          class="collaborator click"
          @click="collabDialog = true"
        >
          <div class="avatar" :style="{ backgroundColor: `var(--form-background-color)` }">
            <span>+{{ project.collaborators.length - 5 }}</span>
          </div>
        </div>
      </div>
      <div class="tabs">
        <router-link
          :class="['link', { s: page === 'view' }]"
          :to="`/projects/${project.routeKey}`"
        >VIEW</router-link>
        <router-link
          :class="['link', { s: page === 'export' }]"
          :to="`/projects/${project.routeKey}/export`"
        >EXPORT</router-link>
        <!-- <router-link
          :class="['link', { s: page === 'recommendations' }]"
          :to="`/projects/${project.routeKey}/recommendations`"
        >RECOMMENDATIONS</router-link>-->
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <template v-if="(page === 'view' || page === 'export') && citationsLoaded">
        <div v-if="project.citations.length > 0">
          <div :class="page" :contenteditable="page != 'view'">
            <Citation
              v-for="citation in filteredCitations"
              :page="page"
              :string="citation.string"
              :routeKey="citation.routeKey"
              :project_id="project.routeKey"
              :key="citation.routeKey"
            />
          </div>
        </div>
        <a
          v-else
          class="no-project-message"
          href="#"
          @click.prevent="autoCitationDialog.visible = true"
        >
          <div class="icon flex flex__center">
            <i class="material-icons">add</i>
          </div>
          <span class="text">You have no citations. Create a new one.</span>
        </a>
      </template>
      <template v-else-if="page === 'recommendations' && recommendations">
        <div
          v-if="recommendations.length > 0"
          class="recommendations"
          v-infinite-scroll="getRecommendations"
          :infinite-scroll-disabled="busy"
          :infinite-scroll-distance="10"
        >
          <a
            href="#"
            v-for="(article, i) in recommendations"
            :key="i"
            @click.prevent="autoCitation([{ type: 'URL', source: article.url }])"
            class="card"
          >
            <div class="img" :style="{ backgroundImage: `url(${article.urlToImage})` }"></div>
            <div class="content">
              <h1>{{ article.title }}</h1>
            </div>
          </a>
        </div>
        <a v-else class="no-project-message">
          <div class="icon flex flex__center">
            <i class="material-icons" :style="{ 'font-size': '230px' }">thumbs_up_down</i>
          </div>
          <span class="text">No recommendations at the moment. Cite something first.</span>
        </a>
      </template>
    </transition>
  </div>
</template>

<script>
import { format, proccessCitation } from "@/utils/Citation";
import Citation from "@/components/Citation";
import Dialog from "@/components/Dialog";
import AutoCitationDialog from "@/components/AutoCitationDialog";
import StyleDialog from "@/components/StyleDialog";
import CollabDialog from "@/components/CollabDialog";
import infiniteScroll from "vue-infinite-scroll";

export default {
  name: "Project",
  data() {
    return {
      autoCitationDialog: {
        visible: false,
        submit: true
      },
      styleDialog: false,
      collabDialog: false,
      deleteProjectDialog: false,
      project: null,
      citationsLoaded: false,
      recommendations: [],
      recommendationPage: 0,
      busy: false
    };
  },
  computed: {
    searchString() {
      return this.$parent.$refs.header.searchString.toLowerCase();
    },
    filteredCitations() {
      return this.project.citations.filter(citation => {
        return citation.string.toLowerCase().includes(this.searchString);
      });
    },
    firstFiveCollaborators() {
      return this.project.collaborators.slice(0, 5);
    },
    page() {
      return this.$route.meta.page;
    }
  },
  watch: {
    "project.style": {
      handler(style) {
        this.citationsLoaded = false;
        let style_id = style.objectID;
        this.$http
          .post(`projects/${this.project.routeKey}/set-style`, {
            style_id
          })
          .then(response => {
            this.sortCitations();
          });
      },
      deep: true
    }
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getProject() {
      this.$http
        .get(`projects/${this.$route.params.project_id}`)
        .then(response => {
          this.project = response.data;
          // this.getRecommendations();
          this.$parent.title = this.project.name;
        })
        .catch(error => {
          this.$router.push(`/404`);
        });
    },
    setStyle(style) {
      this.project.style = style;
    },
    deleteProject() {
      this.deleteProjectDialog = false;
      this.$http
        .delete(`projects/${this.$route.params.project_id}`)
        .then(response => {
          this.$parent.getProjects();
          this.$router.push(`/`);
        });
    },
    openAutoCitationDialog() {
      this.$http.get("/auth/user").then(res => {
        if (!res.data.data.citation_usage.status) {
          this.autoCitationDialog.submit = false;
          this.autoCitationDialog.text = `You already have ${
            this.$auth.user().citation_usage.n
          } citations. To add more, please upgrade your plan or delete existing citations from any project.`;
        }
        this.autoCitationDialog.visible = true;
      });
    },
    autoCitation(sources) {
      this.autoCitationDialog.visible = false;
      sources.forEach(s => {
        delete s.label;
      });
      this.$router.push({
        name: "Add Citation",
        query: {
          sources: encodeURIComponent(JSON.stringify(sources))
        }
      });
    },
    sortCitations() {
      let bib = {};
      this.project.citations.forEach(citation => {
        bib[citation.routeKey] = proccessCitation({
          ...citation
        });
      });
      format(this.project.style, bib).then(bibResult => {
        if (bibResult) {
          let order = [].concat.apply([], bibResult[0].entry_ids);
          this.project.citations = this.project.citations.map(citation => {
            citation.string = bibResult[1][order.indexOf(citation.routeKey)];
            return citation;
          });
          // this.project.citations.sort((a, b) => {
          // 	return order.indexOf(a.id) < order.indexOf(b) ? -1 : 1;
          // });
          this.project.citations.sort((a, b) => {
            a = a.string
              .toLowerCase()
              .replace(/<[^>]+>/gi, "")
              .replace(/[^\w\s]/gi, "");

            b = b.string
              .toLowerCase()
              .replace(/<[^>]+>/g, "")
              .replace(/[^\w\s]/gi, "");
            return a < b ? -1 : 1;
          });
          this.citationsLoaded = true;
        }
      });
    },
    getCollaborators(collaboratorId) {
      this.$http
        .get(`projects/${this.$route.params.project_id}/collaborators`)
        .then(response => {
          this.project.collaborators = response.data;
        });
    },
    addCollaborator(collaboratorId) {
      this.$http
        .post(`projects/${this.$route.params.project_id}/collaborators`, {
          collaboratorId
        })
        .then(response => {
          this.project.collaborators.push(response.data);
        });
    },
    removeCollaborator(collaboratorId) {
      this.$http
        .delete(
          `projects/${this.$route.params.project_id}/collaborators/${collaboratorId}`
        )
        .then(response => {
          if (response.data.sameId) {
            this.$router.push({
              name: "My Projects"
            });
          } else {
            this.getCollaborators();
          }
        });
    },
    getRecommendations() {
      this.busy = true;
      this.$http
        .get(
          `projects/${
            this.$route.params.project_id
          }/recommendations?page=${++this.recommendationPage}`
        )
        .then(response => {
          this.recommendations.push(...response.data);
          this.busy = false;
        });
    }
  },
  components: {
    Citation,
    Dialog,
    AutoCitationDialog,
    StyleDialog,
    CollabDialog
  },
  directives: { infiniteScroll }
};
</script>

<style lang="scss" scoped>
.collaborators {
  display: flex;
  margin-bottom: 15px;
  .collaborator {
    background: var(--background-color);
    border-radius: 50%;
    height: 35px;
    width: 35px;
    margin-right: -7px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(.click) {
      pointer-events: none;
      user-select: none;
    }
    &.click {
      cursor: pointer;
    }
  }
}
/*

  Export

*/
.export {
  padding: 60px 115px;
  margin: 0 auto 30px;
  width: 100%;
  min-height: 88.5vh;
  border-radius: 3px;
  box-shadow: 0 10px 50px -5px rgba(0, 0, 0, 0.05);
  outline: 0;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  .title {
    margin-bottom: 20px;
    text-align: center;
    color: var(--nav-link-color);
    line-height: 20px;
    font-family: "Times New Roman", TimesNewRoman, Times, Baskerville, Georgia,
      serif;
  }
  p {
    margin-bottom: 15px;
    line-height: 20px;
    font-family: "Times New Roman", TimesNewRoman, Times, Baskerville, Georgia,
      serif;
    color: var(--text-color);
    &::v-deep a {
      color: #000;
    }
  }
}
/*

  View

*/
.view {
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 10px 50px -5px rgba(0, 0, 0, 0.05);
  background: var(--form-background-color);
}
.citation-count {
  margin-top: 5px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--title-sec-color);
  font-size: 12px;
  clear: both;
  &::before {
    content: attr(data-count) " ";
  }
  &::after {
    content: attr(data-username);
  }
}

.desc {
  display: block;
  color: var(--title-sec-color);
  font-size: 14px;
}

.recommendations {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  margin: 10px auto;
  .card {
    background: var(--menu-box-background-color);
    display: flex;
    flex-direction: column;
    box-shadow: var(--box-shadow-color) 0 10px 24px 0;
    font-weight: 500;
    transition: 0.3s box-shadow ease-in;
    border-radius: 4px;
    .img {
      height: 200px;
      width: 100%;
      background-size: cover;
      background-position: center;
    }
    .content {
      padding: 20px 7px;
      h1 {
        color: var(--title-color);
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
}
@media only screen and (max-width: 810px) {
  .export {
    padding: 30px 20px;
  }
}
@media only screen and (max-width: 600px) {
  .collaborators {
    display: none;
  }
  .big-title.project {
    flex-direction: column;
    span {
      margin-right: 0;
    }
    .right {
      padding: 20px 0 0;
      .btn {
        margin: 0 12px 0 0;
      }
    }
  }
}
</style>
