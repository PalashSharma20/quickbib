<template>
  <div v-if="page == 'view'" class="row flex flex__center">
    <p v-html="string"></p>
    <router-link
      v-if="project_id"
      class="edit flex flex__center"
      :to="`/projects/${project_id}/citations/${routeKey}`"
    >
      <i class="material-icons">edit</i>
    </router-link>
  </div>
  <p v-else v-html="string"></p>
</template>

<script>
export default {
  name: "Citation",
  props: {
    routeKey: {
      type: String,
      default: null,
    },
    string: String,
    page: {
      type: String,
      default: "view",
    },
    project_id: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  word-break: break-word;
  color: var(--default-text-color);
  border-bottom: 1px dotted var(--border-color);
  padding: 20px;
  border-radius: 2px;
  line-height: 30px;
  position: relative;
  width: 100%;
  &:last-of-type {
    border-bottom: none;
  }
  p {
    font-size: 16px;
    padding: 10px;
    flex: 1;
    font-weight: 400;
    color: var(--text-color);
    &::v-deep {
      .links {
        color: var(--main-color);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .edit {
    font-weight: 700;
    color: var(--title-color);
    font-size: 7px;
    padding: 0 5px;
    i {
      font-size: 20px;
    }
  }
}
</style>
