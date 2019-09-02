<template>
  <div class="group flex__center flex">
    <Datetime type="date" v-model="value" />
    <label :class="{ used: (value && value.length > 0) }">Date</label>
  </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  watch: {
    value(val) {
      this.$emit("input", val);
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  components: {
    Datetime
  }
};
</script>

<style lang="scss" scoped>
::v-deep.vdatetime {
  width: 100%;
  .vdatetime-calendar__month__day--selected > span > span,
  .vdatetime-calendar__month__day--selected:hover > span > span,
  .vdatetime-popup__header {
    background-color: var(--main-color);
  }
  .vdatetime-popup__actions__button {
    color: var(--main-color);
  }
  input {
    outline: 0;
    padding: 15px;
    -webkit-appearance: none;
    color: var(--title-sec-color);
    border: none;
    border-radius: 0;
    background: var(--input-background-color);
    font-size: 16px;
    width: 100%;
    border-radius: 4px;
  }
}
</style>
