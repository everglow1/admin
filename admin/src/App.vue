<template>
  <div id="app">
    <div class="header">
      <p>学生学籍管理系统</p>
    </div>
    <!-- <router-link to="/">主页</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/add">添加用户</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  /* #app {
    background: rgb(2, 133,188)
  } */
  .header {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    background: rgb(230, 230, 230);
  }
</style>
