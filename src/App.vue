<template>
  <div id="app">
    <!-- <p>
      <router-link to="/index" class="r1">首页</router-link>
      <router-link to="/message" class="r1">消息页</router-link>
    </p>-->
    <router-view class="routerClass"></router-view>
  </div>
</template>

<script></script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  overflow: hidden;
}
.routerClass {
  position: absolute;
  width: 100%;
  overflow: hidden;
  transition: all 0.8s ease;
}
</style>
