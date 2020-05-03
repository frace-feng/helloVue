<template>
  <div id="app">
    <el-tabs v-model="tab" @tab-click="handleClick">
      <el-tab-pane label="hello" name="/"></el-tab-pane>
      <el-tab-pane label="music" name="/music"></el-tab-pane>
    </el-tabs>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <router-link to="/music" v-if="$router.currentRoute.path !='/music'">Go to music</router-link>
    <el-button @click="back" v-show="$router.currentRoute.path !='/'">返回</el-button>-->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      tab: this.$router.currentRoute.path
    };
  },
  methods: {
    back: function() {
      console.log(this.$router.currentRoute.path);
      this.$router.go(-1);
    },
    handleClick: function(tab) {
      // console.log(tab);
      // console.log(event);
      this.$router.push(tab.name);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
