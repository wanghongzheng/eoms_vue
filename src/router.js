import Message from "./view/Message";
import Index from "./view/Index";
import QueryFault from "./view/QueryFault";
import FaultHandle from "./view/FaultHandle";
import FaultBaseInfo from "./view/FaultBaseInfo";
import UpdateDevicePart from "./view/UpdateDevicePart"
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
    },
    {
        path:'/faultHandle',component:FaultHandle
    },
    {
        path:'/faultHandle/FaultBaseInfo',component:FaultBaseInfo
    },
    {
        path:'/faultHandle/UpdateDevicePart',component:UpdateDevicePart
    }
];
//创建router实例
const router = new Router({
    routes
});

export default router;