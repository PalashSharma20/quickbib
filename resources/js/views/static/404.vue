<template>
  <div id="container">
    <h1>404</h1>
    <h2>There isn't anything here</h2>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--main-color);
  padding: 200px;
  h1 {
    font-size: 16rem;
    color: #fff;
  }

  h2 {
    font-size: 6rem;
    color: var(--main-color);
    opacity: 0.5;
  }
}
@media only screen and (max-width: 600px) {
  #container {
    padding: 50px;
    h1 {
      font-size: 96px;
    }
    h2 {
      font-size: 48px;
    }
  }
}
</style>
