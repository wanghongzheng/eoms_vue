import Message from "./components/Message";
import Index from "./components/Index";
import QueryFault from "./components/QueryFault";
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
//声明路由规则
const routes = [
    {
        path:'/',component:Index
    },
    {
        path:'/index',component:Index
    },
    {
        path:'/message',component:Message
    },
    {
        path:'/queryfault',component:QueryFault
    }
];
//创建router实例
const router = new Router({
    routes
});

export default router;