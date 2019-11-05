# eoms_vue

一、路由使用原理

1.声明路由规则：
const routes = [
    {
        path:'/',component:Main
    },
    {
        path:'/main',component:Main
    },
    {
        path:'/message',component:Message
    }
];
path:"跳转的浏览器地址"；

component:"路径所对应的组件"

先定义路径所对应的组件，浏览器指定到相应的路由下就会自动跳转到所对应的组件（完成了路由功能）

2.创建router实例：
const router = new Router({
    routes
});
创建router实例，并把routes传递进入;

3.注册router：
//创建Vue并挂载，注册路由
var vm = new Vue({
    el:'#container',
    router
});
把router注册到指定的挂载点下
4.路由对应的组件显示
 <router-link to="/main">首页</router-link>
 <router-link to="/message">消息页</router-link>
  <router-view></router-view>
如何让我在点击不同的按钮进不同的路由「不是的组件呢？」，这里就要使用到 <router-link to="路由配置中的路径">比如首页<router-link />，从名字就可以看出来就是路由链接到那个路径，路径会匹配出相应的组件显示在 router-view 中
    
