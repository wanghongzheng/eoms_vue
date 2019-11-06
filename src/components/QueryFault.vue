<template>
    <div>
        <div class="head">
            <i class="el-icon-back"></i>
            <label>故障列表</label>
            <i class="el-icon-refresh" style="float:right;margin-right:15px;"></i>
            <i class="el-icon-search" style="float:right;"></i>
        </div>
        <div class="content">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>
                        <i class="el-icon-success" style="color:#008000;"></i>
                        镇江市联程化学工业有限公司
                    </span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        <i class="el-icon-caret-bottom" style="color:#008000;"></i>
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
                         <i class="el-icon-success" style="color:#008000;"></i>
                         镇江市联程化学工业有限公司
                    </span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        <i class="el-icon-caret-bottom" style="color:#008000;"></i>
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
                         <i class="el-icon-success" style="color:#008000;"></i>
                         镇江市联程化学工业有限公司
                    </span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        <i class="el-icon-caret-bottom" style="color:#008000;"></i>
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
    </div>
</template>
<script>
    export default {
        methods: {
            goBack() {
                console.log('go back');
            }
        }
    }
</script>
<style scoped lang="scss">
    .head{
        background:#3f51b5;
        color:#fff;
        padding:20px 15px;
        i{
            padding-right:0px;
            padding-left:10px;
        }
    }
    .text {
        font-size: 14px;
        margin-bottom: 18px;
        .item{
            display:block;
            .leftLabel{

            }
            .rightLabel{
                float:right;
                font-weight:bold;
            }
        }
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
        height:calc(100vh - 62px);
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>