<template>
  <div class="search">
    <ais-instant-search :search-client="searchClient" index-name="styles">
      <ais-configure :hitsPerPage="8" />
      <ais-search-box>
        <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
          <input
            placeholder="Search here…"
            class="big-input"
            type="search"
            :value="currentRefinement"
            @input="refine($event.currentTarget.value)"
          />
        </div>
      </ais-search-box>
      <StyleInfiniteHits :objectID="project_style && project_style.objectID" @selected="onSelect">
        <template slot="item" slot-scope="{ item }">
          <h3>
            <ais-highlight :hit="item" attribute="text" />
          </h3>
        </template>
      </StyleInfiniteHits>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import StyleInfiniteHits from "./StyleInfiniteHits";

export default {
  name: "StylePicker",
  props: ["project_style"],
  data() {
    return {
      searchClient: algoliasearch(
        "8B734O9DDG",
        "8f454e1f1ef2bd77087f9004de285222"
      )
    };
  },
  methods: {
    onSelect(selected) {
      this.$emit("selected", {
        key: selected.key,
        objectID: selected.objectID,
        text: selected.text
      });
    }
  },
  components: {
    StyleInfiniteHits
  }
};
</script>
