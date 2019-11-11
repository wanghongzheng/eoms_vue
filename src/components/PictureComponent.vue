<template>
<div>
    <label style="display:block;margin: 10px 20px 5px;">{{time}}</label>
    <div id="star-pic-vue">
        <template v-if="data">
            <img e v-for="(item,index) in images"
                 :src="item.url"
                 :key="index"
                 id="contract_url"
                      @click="enlargePic"/>
            <template v-if="isDialogShow">
            </template>
            <el-dialog
                    :visible.sync="centerDialogVisible"
                    width= "100%"
                    modal
                    close-on-click-modal
                    custom-class="dialog"
            >
                <el-carousel :autoplay="false" arrow="always">
                    <el-carousel-item v-for="(item,index) in data" :key="index">
                        <img :src="item.url">
                    </el-carousel-item>
                </el-carousel>
            </el-dialog>
        </template>
    </div>
</div>
</template>

<script>
    export default {
        name: "PictureComponent",
        props: ["data","maxShow","time"],
        data(){
            return{
                centerDialogVisible: false,
                showPic: '',
                isDialogShow: false,
                index: 0
            }
        },
        computed: {
            images() {
                if (this.data instanceof Array && this.data.length > 2) {
                    var value = this.data;
                    return value.splice(0,this.maxShow);
                } else {
                    return this.data;
                }
            }
        },
        methods: {
            // 放大图片
            enlargePic(e){
                this.isDialogShow = true;
                this.centerDialogVisible = true;
                this.showPic = this.data[0];
                console.log(this.images+e)
            },
        }
    }
</script>

<style lang="scss">
    #star-pic-vue  .el-dialog__wrapper{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
        background: #171717;
    }
    #star-pic-vue{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: stretch;
        padding:13px;
        img{
            width: 82px;
            height: 80px;
            margin: 4px 0px 0px;
            padding-right: 2px;
        }
        .dialog {
            img{
                width: 100%;
                height: 100%;
                margin: 0;
            }
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 18px;
            opacity: 0.75;
            line-height: 300px;
            margin: 0;
            height: 100%;
            width: 100%;
        }
        .el-dialog__header{
            display: none;
        }
        .el-dialog__body {
            padding: 0 !important;
            margin: 0 !important;
            height: 400px;
        }
        .el-carousel{
            height: 100%;
        }
        .el-carousel__container {
            height: 100%;
        }
    }
</style>