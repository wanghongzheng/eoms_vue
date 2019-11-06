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
                            <div class="grid-content bg-purple">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询</label>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content bg-purple">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询</label>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content bg-purple">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询</label>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content bg-purple">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询</label>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content bg-purple">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询</label>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content bg-purple">
                                <el-image :src=faultImage></el-image>
                                <label>故障查询</label>
                            </div>
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
                            <div class="grid-content bg-purple">
                                <el-image :src="deviceInfoImage"></el-image>
                                <label>设备信息</label>
                            </div>
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
    }
}
</script>

<style scoped lang="scss">
    .el-col {
        border-radius: 4px;
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