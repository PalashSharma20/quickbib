<template>
  <Dialog :dismiss="true" type="big" title="Choose a Style" :show="show" @close="$emit('close')">
    <template #text>
      <p>Create citations in any format, with over 9,000 styles to choose from.</p>
      <p v-if="project_style">
        <span style="font-weight: 500">Current Style: {{ project_style.text }}</span>
      </p>
    </template>
    <StylePicker :project_style="project_style" @selected="onSelect" />
  </Dialog>
</template>

<script>
import Dialog from "./Dialog";
import StylePicker from "./StylePicker";

export default {
  name: "StyleDialog",
  props: ["show", "project_style", "add_project"],
  methods: {
    onSelect(selected) {
      if (
        this.project_style &&
        selected.objectID != this.project_style.objectID
      ) {
        this.$emit("selected", selected);
      }
      if (!this.add_project) {
        this.$emit("close");
      }
    }
  },
  components: {
    Dialog,
    StylePicker
  }
};
</script>
