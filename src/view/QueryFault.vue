<template>
    <div>
        <div class="head">
            <el-button style="padding-right: 4px" type="text"
            v-on:click="goBack">
                <i class="el-icon-back" style="color:#fff;"></i>
            </el-button>
            <label>故障列表</label>
            <el-button style="float:right;padding-right: 4px" type="text" @click="drawer = true">
                <i class="el-icon-refresh" style="float:right;color:#fff;"></i>
            </el-button>
            <el-button style="float:right;padding-right: 4px" type="text" @click="drawer = true">
                <i class="el-icon-search" style="float:right;color:#fff;"></i>
            </el-button>
        </div>
        <div class="content">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>
                        <i class="el-icon-success"></i>
                        镇江市联程化学工业有限公司
                    </span>
                    <el-dropdown trigger="click" @command="handleFault" style="float: right;">
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="el-icon-caret-bottom"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item></el-dropdown-item>
                            <el-dropdown-item>故障处理</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="text">
                    <div class="item">
                        <label class="leftLabel">排放口：</label><label class="rightLabel">ZJSC-CJJC-003</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">设备名称：</label><label class="rightLabel">55i</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">最晚完成时间：</label><label class="rightLabel">2017-08-01 10:12:26</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">负责人：</label><label class="rightLabel">whz</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">运维人员：</label><label class="rightLabel">whz</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">描述：</label><label  class="rightLabel">设备排口故障</label>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>
                         <i class="el-icon-success" ></i>
                         镇江市联程化学工业有限公司
                    </span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        <i class="el-icon-caret-bottom" ></i>
                    </el-button>
                </div>
                <div class="text">
                    <div class="item">
                        <label class="leftLabel">排放口：</label><label class="rightLabel">ZJSC-CJJC-003</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">设备名称：</label><label class="rightLabel">55i</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">最晚完成时间：</label><label class="rightLabel">2017-08-01 10:12:26</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">负责人：</label><label class="rightLabel">whz</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">运维人员：</label><label class="rightLabel">whz</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">描述：</label><label  class="rightLabel">设备排口故障</label>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>
                         <i class="el-icon-success" ></i>
                         镇江市联程化学工业有限公司
                    </span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        <i class="el-icon-caret-bottom"></i>
                    </el-button>
                </div>
                <div class="text">
                   <div class="item">
                       <label class="leftLabel">排放口：</label><label class="rightLabel">ZJSC-CJJC-003</label>
                   </div>
                    <div class="item">
                        <label class="leftLabel">设备名称：</label><label class="rightLabel">55i</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">最晚完成时间：</label><label class="rightLabel">2017-08-01 10:12:26</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">负责人：</label><label class="rightLabel">whz</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">运维人员：</label><label class="rightLabel">whz</label>
                    </div>
                    <div class="item">
                        <label class="leftLabel">描述：</label><label  class="rightLabel">设备排口故障</label>
                    </div>
                </div>
            </el-card>
        </div>
        <el-drawer
                title="查询条件设置"
                size="100%"
                :visible.sync="drawer"
                :direction="direction"
                ref="drawer"
                :before-close="handleClose">
            <SearchComponent  :visible.sync="drawer" @submitInfo="submitInfo"></SearchComponent>
        </el-drawer>
    </div>
</template>
<script>
    import SearchComponent from "../components/SearchComponent"
    export default {
        data() {
            return {
                drawer: false,
                direction: 'ttb',
            };
        },
        components: {
            SearchComponent
        },
        methods: {
            goBack() {
                console.log('go back');
                this.$router.go(-1);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                        console.info(_);
                    })
                    .catch(_ => {
                        console.info(_);
                    });

            },
            handleFault(){
                this.$router.push("./faultHandle");
            },
            submitInfo(param){
                this.drawer = false;
                this.$message.success(param.beginTime +"===="+param.endTime+"==="+param.value);
            }
        }
    }
</script>
<style scoped lang="scss">
    .head{
        background:#3f51b5;
        color:#fff;
        padding:10px;
        i{
            padding-right:0px;
            padding-left:10px;
        }
    }
    .text {
        font-size: 14px;
        .item{
            display:block;
            padding:1px;
            .leftLabel{

            }
            .rightLabel{
                float:right;
                font-weight:500;
            }
        }
    }

  .el-icon-success,.el-icon-caret-bottom{
      color:#2196f3;
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
        width: 100%;
        margin-bottom:10px;
    }
    .content{
        height:calc(100vh - 60px);
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
<style lang="scss">
    .content .el-card__header{
        padding:12px 20px;
        font-size:14px;
        font-weight:bold;
    }
</style>
