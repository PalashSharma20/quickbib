<template>
  <Dialog
    :show="show"
    title="Add Project"
    type="big"
    :text="error"
    @submit="submit"
    @close="$emit('close')"
  >
    <form @submit.prevent="submit">
      <Input label="Project Name" v-model="project.name" :required="true" />
    </form>
    <h1>Choose a Style</h1>
    <p>Create citations in any format, with over 9,000 styles to choose from.</p>
    <p v-if="project.style">
      <span style="font-weight: 500">Current Style: {{ project.style.text }}</span>
    </p>
    <StylePicker @selected="setStyle" :project_style="project.style" />
  </Dialog>
</template>

<script>
import Dialog from "./Dialog";
import Input from "./Input";
import StylePicker from "./StylePicker";

export default {
  name: "AddProjectDialog",
  props: ["show"],
  data() {
    return {
      project: {
        name: "",
        style: null
      },
      error: ""
    };
  },
  methods: {
    setStyle(style) {
      this.project.style = style;
    },
    submit() {
      this.error = "";
      if (this.project.name === "") {
        this.error = "Please enter a name for the project.";
      }
      if (this.project.style == null) {
        this.error += "Please choose a citation style.";
      }
      if (this.error == "") {
        this.$emit("submit", this.project);
      }
    }
  },
  components: {
    Dialog,
    Input,
    StylePicker
  }
};
</script>

<style lang="scss" scoped>
.search {
  min-height: 58px;
}
::v-deep {
  .autosuggest__results-container {
    background: var(--menu-box-background-color);
    padding: 0;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.035),
      0 9px 46px 8px rgba(0, 0, 0, 0.03), 0 11px 15px -7px rgba(0, 0, 0, 0.005);
  }

  .autosuggest__results-container ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .autosuggest__results-item {
    display: block;
    background: var(--menu-box-background-color);
    padding: 20px 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    span {
      font-size: 20px;
      font-weight: 400;
      color: var(--title-color);
    }
  }

  .autosuggest__results_item img {
    height: 3em;
  }

  .autosuggest__results_item-highlighted {
    background-color: rgba(0, 0, 0, 0.24);
  }
}
</style>
