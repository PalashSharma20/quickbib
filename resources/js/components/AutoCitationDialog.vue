<template>
  <Dialog
    :show="show"
    type="small"
    title="Add Citation(s)"
    :text="error"
    @submit="submit"
    @close="close"
  >
    <form @submit.prevent="submit">
      <Input
        v-for="i in inputNumber"
        :key="i"
        :label="sources[i-1].label"
        v-model="sources[i-1].source"
        :required="(i==1)"
      />
    </form>
    <template #buttons>
      <button v-if="inputNumber < 5" @click.prevent="inputNumber++" class="no">ADD MORE</button>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "./Dialog";
import Input from "./Input";
import { isValidURL, isValidISBN } from "@/utils/Citation";

export default {
  name: "AutoCitationDialog",
  props: ["show"],
  data() {
    return {
      inputNumber: 1,
      sources: [
        {
          label: "URL or ISBN",
          source: "",
          type: null
        }
      ],
      error: null
    };
  },
  watch: {
    inputNumber(val) {
      this.sources.push({
        label: "URL or ISBN",
        source: "",
        type: null
      });
    },
    sources: {
      handler(val) {
        val.forEach(url => {
          if (isValidURL(url.source)) {
            url.label = "URL";
            url.type = "URL";
          } else if (isValidISBN(url.source)) {
            url.label = "ISBN";
            url.type = "isbn";
          } else if (url.source == "") {
            url.label = "URL or ISBN";
            url.type = null;
          } else {
            url.label = "Invalid";
            url.type = null;
          }
        });
      },
      deep: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      this.error = null;
      if (this.sources.every(url => url.label != "Invalid")) {
        this.close();
        this.$emit("submit", this.sources.filter(url => url.source.length > 0));
      } else {
        this.error = "Some of the URLs or ISBNs provided are invalid.";
      }
    }
  },
  components: {
    Dialog,
    Input
  }
};
</script>
