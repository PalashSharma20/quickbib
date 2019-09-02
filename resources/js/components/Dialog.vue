<template>
  <transition name="fade">
    <div v-if="show" class="z-index-high">
      <div class="overlay visible" @click.prevent="$emit('close')"></div>
      <div :class="['dialog', type]">
        <slot name="title">
          <h1>{{ title }}</h1>
        </slot>
        <slot name="text">
          <p v-if="text">{{ text }}</p>
        </slot>
        <slot></slot>
        <div class="buttonCon">
          <button v-if="!dismiss" @click.prevent="$emit('close')" class="no">CANCEL</button>
          <slot name="buttons"></slot>
          <button
            @click.prevent="$emit(dismiss ? 'close' : 'submit')"
            :class="dismiss ? 'no' : 'yes'"
          >{{ dismiss ? "CLOSE" : "CONTINUE" }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    show: Boolean,
    type: String,
    title: {
      type: String,
      default: "Are You Sure?"
    },
    text: {
      type: String,
      default: ""
    },
    dismiss: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.z-index-high {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.dialog {
  z-index: 999;
  min-height: 180px;
  max-height: 90%;
  width: 38%;
  max-width: 608px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--menu-box-background-color);
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &.big {
    width: 60%;
    max-width: 1000px;
    padding: 20px 30px;
  }
  &::v-deep {
    > h1 {
      font-weight: 500;
      font-size: 24px;
      color: var(--title-color);
      margin: 12px 0;
    }
    > p {
      display: block;
      color: var(--title-sec-color);
      font-size: 16px;
      margin-bottom: 12px;
      padding: 0;
      line-height: 30px;
    }
    .big-input {
      padding: 15px;
      font-size: 20px;
      width: 100%;
      background-color: var(--menu-color);
      border: none;
      border-radius: 3px;
      color: var(--default-text-color);
      z-index: 2;
      outline: 0;
    }
    &.big {
      width: 60%;
      max-width: 1000px;
      > h1 {
        font-size: 30px;
      }
    }
    .ais-SearchBox {
      padding: 0 5px;
    }
    .options {
      padding: 0;
      &.overflow {
        flex: 1;
        max-height: 200px;
        overflow: scroll;
      }
      li {
        display: block;
        background: var(--menu-box-background-color);
        padding: 20px 10px;
        cursor: pointer;
        transition: 0.3s all ease-in;
        &.selected {
          pointer-events: none;
          h3 {
            color: var(--main-color);
          }
        }
        h3 {
          font-size: 20px;
          font-weight: 400;
          color: var(--title-color);
        }
        h4 {
          font-size: 14px;
          font-weight: 300;
          color: var(--title-sec-color);
        }
      }
    }
    button {
      letter-spacing: normal;
      margin-right: 8px;
      padding: 8.5px 8px;
      border: none;
      cursor: pointer;
      font-size: 15px;
      color: var(--main-color);
      text-transform: uppercase;
      font-weight: 700;
      outline: 0;
      background: transparent;
      border-radius: 3px;
      transition: 0.3s all ease-in;
      min-width: 64px;
      overflow: hidden;
      position: relative;
      &:active,
      &:hover {
        background: rgba(#4e9af7, 0.1);
      }
      &.no {
        color: var(--title-sec-color);
        &:active,
        &:hover {
          background: var(--menu-sel-color);
        }
      }
    }
  }
  .buttonCon {
    padding-top: 16px;
    padding-bottom: 4px;
    width: 100%;
    text-align: right;
  }
  form .group {
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
@media only screen and (max-width: 600px) {
  .dialog {
    width: 95% !important;
    left: 2.5%;
    height: auto;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
