<template>
  <div id="app">
    <p>
      <router-link to="/index" class="r1">首页</router-link>
      <router-link to="/message" class="r1">消息页</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.r1{
  margin:10px;
}

</style>
