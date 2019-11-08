<template>
    <div>
        <div class="head">
            <el-button style="padding-right: 4px" type="text"
                       v-on:click="goBack">
                <i class="el-icon-back" style="color:#fff;"></i>
            </el-button>
            <label>基本信息</label>
        </div>
        <div class="content">
            <div class="baseInfo">
                <label class="title">完成状态</label>
                <label class="op">
                    <el-switch v-model="value1">
                    </el-switch>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: false
            }
        }
    };
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
    .baseInfo {
        padding:5px 10px 0px 10px;
        display:block;
        clear: both;
        .title{
            float:left;
            margin-top: 5px;
        }
        .op{
            float:right;
        }
    }
</style>