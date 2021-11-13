<template>
  <div id="app">
    <router-view/>
    <notifications group="foo" position="bottom right"/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "assets/scss/_shared.scss";

body{
  margin: 0px;
  background: $primary-color;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
