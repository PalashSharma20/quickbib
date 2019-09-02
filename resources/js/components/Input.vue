<template>
  <div class="group flex__center flex">
    <input
      @focus="used = true"
      @blur="used = (value && value.length > 0)"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      type="text"
      :required="required"
      :disabled="disabled"
    />
    <label :class="{ used }">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: String,
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {
      used: null
    };
  },
  mounted() {
    if (this.value) {
      this.used = this.value.length > 0;
    }
  }
};
</script>

<style lang="scss">
.group {
  position: relative;
  margin: 10px 0;
  padding: 0 5px;
  flex-basis: 100%;
  &.small {
    flex-basis: 50%;
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
    border: 1px solid var(--menu-color);
    border-radius: 4px;
  }
}
.dark .group input {
  border: none;
}
.group input,
label {
  font-size: 16px;
}
.group {
  label {
    color: var(--nav-link-color);
    width: auto;
    text-align: left;
    font-weight: 400;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    text-transform: uppercase;
    pointer-events: none;
    font-size: 14px;
    &.used {
      top: -8px;
      left: 15px;
      font-size: 11px;
      color: var(--main-color);
      background-color: var(--background-color);
      padding: 3px;
      border-radius: 5px;
      transform: translateY(0%);
      font-weight: 500;
    }
  }
}
</style>
