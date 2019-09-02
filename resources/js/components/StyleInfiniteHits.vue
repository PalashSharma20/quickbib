<template>
  <ul class="options overflow" v-if="state">
    <li
      v-for="hit in state.hits"
      :key="hit.objectID"
      @click="$emit('selected', hit)"
      :class="{ selected: objectID && hit.objectID === objectID }"
    >
      <slot name="item" :item="hit"></slot>
    </li>
    <li class="sentinel" v-observe-visibility="visibilityChanged" />
  </ul>
</template>

<script>
import { createWidgetMixin } from "vue-instantsearch";
import { connectInfiniteHits } from "instantsearch.js/es/connectors";

export default {
  props: ["objectID"],
  mixins: [
    createWidgetMixin({
      connector: connectInfiniteHits
    })
  ],
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible && !this.state.isLastPage) {
        this.state.showMore();
      }
    }
  }
};
</script>

<style scoped>
.sentinel {
  list-style-type: none;
}
</style>
