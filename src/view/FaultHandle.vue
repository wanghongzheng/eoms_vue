<template>
    <div>
        <div class="head">
            <el-button style="padding-right: 4px" type="text"
                       v-on:click="goBack">
                <i class="el-icon-back" style="color:#fff;"></i>
            </el-button>
            <label>故障处理</label>
        </div>
        <div class="content">
            <div class="baseInfo">
                <label class="title">设备基本信息</label>
                <label class="op">
                    请设置
                    <el-button style="padding-right: 4px" type="text"
                               v-on:click="goBack">
                        <i class="el-icon-arrow-right" style="color:green;font-weight: bold;"></i>
                    </el-button>
                </label>
            </div>
            <div class="baseInfo">
                <label class="title">更新部件</label>
                <label class="op">
                    请选择
                    <el-button style="padding-right: 4px" type="text"
                               v-on:click="goBack">
                        <i class="el-icon-arrow-right" style="color:green;font-weight: bold;"></i>
                    </el-button>
                </label>
            </div>
            <div class="baseInfo">
                <label>故障信息</label>
                <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                        <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt="">
                        <span class="el-upload-list__item-actions">
                            <span
                                class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)">
                              <i class="el-icon-zoom-in"></i>
                             </span>
                            <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)">
                              <i class="el-icon-download"></i>
                            </span>
                            <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)">
                              <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false
            };
        },
        components: {

        },
        methods: {
            goBack() {
                console.log('go back');
                this.$router.go(-1);
            },
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            }
        }
    }
</script>
<style lang="scss">
    .el-upload .el-upload--picture-card{
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 96px;
        height: 96px;
        line-height: 96px;
        vertical-align: top;
    }
</style>
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
        }
        .op{
            float:right;
        }
    }
</style>