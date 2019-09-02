<template>
  <div v-if="citation" class="container" style="margin-top: 20px;">
    <Dialog
      :show="deleteCitationDialog"
      @submit="deleteCitation"
      @close="deleteCitationDialog = false"
      type="small delete-citation"
      text="Citation can't be recovered after this. Do you wish to proceed?"
    />
    <div id="ref" class="data">
      <Citation v-if="style" :string="string" />
    </div>
    <form class="form flex" :data-type="citation.type" method="POST">
      <Input class="small" v-model="citation.first_name" label="First Name" ref="firstName" />
      <Input class="small" v-model="citation.last_name" label="Last Name" ref="lastName" />
      <Input
        class="small"
        v-model="citation.article_title"
        label="Title"
        ref="articleTitle"
        :required="true"
      />
      <Input
        class="small"
        v-model="citation.web_title"
        label="Publisher"
        ref="webTitle"
        :required="true"
      />
      <DatePicker v-model="citation.date" />
      <Input v-model="citation.source" label="Source" ref="source" :disabled="true" />
      <button
        class="button"
        @click.prevent="page == 'edit' ? editCitation() : addCitation()"
      >{{ page == "edit" ? "Update" : `Add (${length - sources.length}/${length})` }}</button>
      <button
        v-if="page == 'edit'"
        class="button button-red"
        @click.prevent="deleteCitationDialog = true"
      >Delete</button>
    </form>
  </div>
</template>

<script>
import { format, proccessCitation } from "@/utils/Citation";
import Citation from "@/components/Citation";
import Dialog from "@/components/Dialog";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";

export default {
  name: "Form",
  data() {
    return {
      style: null,
      citation: null,
      deleteCitationDialog: false,
      sources: [],
      string: "",
      length: null
    };
  },
  computed: {
    page() {
      return this.$route.meta.page;
    }
  },
  watch: {
    citation: {
      handler: async function(citation) {
        let bib = {};
        bib[citation.routeKey] = proccessCitation({
          ...citation
        });
        let result = await format(this.style, bib);
        this.string = result[1][0];
      },
      deep: true
    }
  },
  mounted() {
    if (this.page == "edit") {
      this.getCitation();
    } else {
      this.sources = JSON.parse(decodeURIComponent(this.$route.query.sources));
      this.length = this.sources.length;
      this.retrieveCitation();
    }
  },
  methods: {
    retrieveCitation() {
      let source = this.sources.shift();
      if (source.type == "URL") {
        source.source = decodeURIComponent(source.source);
      }
      this.$http
        .post(
          `projects/${this.$route.params.project_id}/citations/retrieve`,
          source
        )
        .then(response => {
          this.style = response.data.project.style;
          this.citation = response.data;
        });
    },
    getCitation() {
      this.$http
        .get(
          `projects/${this.$route.params.project_id}/citations/${this.$route.params.citation_id}`
        )
        .then(response => {
          this.style = response.data.project.style;
          this.citation = response.data;
        })
        .catch(error => {
          this.$router.push({
            name: "404 Not Found"
          });
        });
    },
    addCitation() {
      let citation = {
        ...this.citation
      };
      this.citation = null;
      this.$http
        .post(`projects/${this.$route.params.project_id}/citations`, citation)
        .then(response => {
          if (this.sources.length > 0) {
            this.retrieveCitation();
          } else {
            this.$router.push({
              name: "View Project",
              params: {
                project_id: this.$route.params.project_id
              }
            });
          }
        });
    },
    editCitation() {
      let citation = {
        ...this.citation
      };
      this.$http
        .put(
          `projects/${this.$route.params.project_id}/citations/${this.$route.params.citation_id}`,
          citation
        )
        .then(response => {
          this.$router.push({
            name: "View Project",
            params: {
              project_id: this.$route.params.project_id
            }
          });
        });
    },
    deleteCitation() {
      this.deleteCitationDialog = false;
      this.$http
        .delete(
          `projects/${this.$route.params.project_id}/citations/${this.$route.params.citation_id}`
        )
        .then(response => {
          this.$router.push({
            name: "View Project",
            params: {
              project_id: this.$route.params.project_id
            }
          });
        });
    }
  },
  components: {
    Citation,
    Dialog,
    Input,
    DatePicker
  }
};
</script>
