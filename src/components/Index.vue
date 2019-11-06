<template>
    <div class="indexClass">
        <div class="head">
            <i class="el-icon-s-unfold"></i>
            <label>环保运维平台</label>
        </div>
        <div class="content">
            <el-card class="box-card" >
                <div slot="header" class="clearfix">
                    <span>任务管理</span>
                </div>
                <div>
                    <el-row :gutter="10">
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <a class="grid-content bg-purple" v-on:click="loadPage('故障查询1')">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询1</label>
                            </a>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <a class="grid-content bg-purple" v-on:click="loadPage('故障查询2')">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询2</label>
                            </a>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <a class="grid-content bg-purple" v-on:click="loadPage('故障查询3')">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询3</label>
                            </a>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <a class="grid-content bg-purple" v-on:click="loadPage('故障查询4')">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询4</label>
                            </a>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <a class="grid-content bg-purple" v-on:click="loadPage('故障查询5')">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询5</label>
                            </a>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <a class="grid-content bg-purple" v-on:click="loadPage('故障查询6')">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询6</label>
                            </a>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <el-card class="box-card" style="margin-top:10px;">
                <div slot="header" class="clearfix">
                    <span>设备管理</span>
                </div>
                <div>
                    <el-row :gutter="10">
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <a class="grid-content bg-purple" v-on:click="loadPage('设备信息')">
                                <el-image :src="deviceInfoImage"></el-image>
                                <label>设备信息</label>
                            </a>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
  name: 'index',
    data(){
      return{
          faultImage: require('../assets/fault.png'),
          deviceInfoImage:require('../assets/info.png')
      }
    },
    methods: {
        loadPage(title){
            this.$message.success(title);
        }
    }
}
</script>

<style scoped lang="scss">
    .el-col {
        border-radius: 4px;
    }
    .box-card a{
        cursor:pointer;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        label{
            display: block;
            width: 106px;
            text-align: center;
            margin-bottom: 15px;;
        }
    }
.head{
    background:#3f51b5;
    color:#fff;
    padding:20px 15px;
    i{
        padding-right:10px;
    }
}
.indexClass{
    overflow: hidden;
}
.content{
    width:100%;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    width:100%;
}
</style>