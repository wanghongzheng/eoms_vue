<template>
  <div>
    <div class="head">
      <el-button style="padding-right: 4px" type="text" v-on:click="goBack">
        <i class="el-icon-back" style="color:#fff;"></i>
      </el-button>
      <label>故障处理</label>
    </div>
    <div class="content">
      <div class="baseInfo">
        <label class="title">设备基本信息</label>
        <label class="op">
          请设置
          <el-button
            style="padding-right: 4px"
            type="text"
            v-on:click="goFaultBaseInfo"
          >
            <i
              class="el-icon-arrow-right"
              style="color:#333;font-weight: bold;"
            ></i>
          </el-button>
        </label>
      </div>
      <div class="baseInfo">
        <label class="title">更新部件</label>
        <label class="op">
          请选择
          <el-button
            style="padding-right: 4px"
            type="text"
            v-on:click="goUpdateDevicePart"
          >
            <i
              class="el-icon-arrow-right"
              style="color:#333;font-weight: bold;"
            ></i>
          </el-button>
        </label>
      </div>
      <div class="baseInfo1">
        <label>故障信息</label>
        <div style="margin-top:10px;">
          <el-upload
            action="auto"
            :http-request="uploadSectionFile"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="handleLimit"
            :limit="3"
            multiple
            :class="{ disabled: uploadDisabled }"
            ref="upload"
          >
            <i class="el-icon-plus" style="width:96px;height:96px;"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogPicVisible">
            <img height="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
        <div style="margin-top:10px;">
          <el-button type="primary" @click="upload()">上 传 </el-button>
          <!--    <el-button type="primary" @click="handleUploadRoadClose()">取  消</el-button>-->
          <el-button type="primary" @click="viewPicture()">查看图片</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      uploadFile: [],
      thisTitle: "测试",
      uploadDisabled: false,
      dialogPicVisible: false
    };
  },
  components: {},
  methods: {
    goBack() {
      console.log("go back");
      this.$router.go(-1);
    },
    goFaultBaseInfo() {
      this.$router.push("/faultHandle/FaultBaseInfo");
    },
    goUpdateDevicePart() {
      this.$router.push("/faultHandle/UpdateDevicePart");
    },
    viewPicture() {
      this.$router.push("/faultHandle/PictureList");
    },
    handleRemove(file) {
      console.log(file);
    },
    handleUploadRoadClose() {
      this.currentDialogVisible = false;
      this.uploadFile = [];
      this.$refs.upload.clearFiles();
      this.$refs.upload.uploadFiles.length = 0;
      this.$emit("update:dialogVisible", this.currentDialogVisible);
      this.$message.info("已取消文件上传！");
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleLimit(file, fileList) {
      if (fileList.length >= 3) {
        this.uploadDisabled = true;
      }
    },
    uploadSectionFile(param) {
      var uploadFileLength = this.uploadFile.length;

      const fileObj = param.file;

      if (fileObj.type === "image/jpeg") {
        this.uploadFile[uploadFileLength] = {
          imgFile: fileObj
        };
      } else if (fileObj.type === "image/png") {
        this.uploadFile[uploadFileLength] = {
          imgFile: fileObj
        };
      } else {
        this.$message.error("只能上传jpg/png文件");
      }
    },
    upload() {
      var that = this;
      that.$refs.upload.clearFiles();
      if (this.uploadFile.length === 0) {
        this.$message.warning("请选择上传图片！");
        return false;
      }
      for (var int = 0; int < this.uploadFile.length; int++) {
        var param = new FormData(); // FormData 对象
        var list = this.uploadFile[int];
        var file = list.imgFile;
        param.append("fileType", "traffic");
        param.append("myFiles", file);
        param.append("dataId", "1111");
        param.append("deviceId", "222");
        param.append("stateCode", "1");
        this.uploadDisabled = false;
        /*   uploadPicFun(param).then(res => {
                        if (res.success) {
                            this.$message.success("文件上传成功！");
                            that.currentDialogVisible = false;
                            that.$emit("update:dialogVisible", false);
                            this.uploadData.trafficId = res.data;
                            this.$emit("spot", this.uploadData.trafficId);
                        } else {
                            this.$message.error("文件上传失败！");
                            that.currentDialogVisible = true;
                            that.$emit("update:dialogVisible", true);
                        }
                        that.$refs.upload.clearFiles();
                    }); */
      }
    }
  }
};
</script>
<style lang="scss">
.baseInfo .el-upload--picture-card {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 110px;
  height: 110px;
  line-height: 110px;
  vertical-align: top;
}
.baseInfo .el-upload-list--picture-card .el-upload-list__item {
  width: 110px;
  height: 110px;
}
.disabled .el-upload--picture-card {
  display: none !important;
}
</style>
<style scoped lang="scss">
.head {
  background: #3f51b5;
  color: #fff;
  padding: 10px;
  i {
    padding-right: 0px;
    padding-left: 10px;
  }
}
.content {
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  background: #f7f7f7;
}
.baseInfo {
  margin: 10px;
  padding: 5px 10px 0px 10px;
  display: block;
  clear: both;
  height: 35px;
  background: #fff;
  .title {
    float: left;
    margin-top: 5px;
  }
  .op {
    float: right;
  }
}
.baseInfo1 {
  margin: 10px;
  padding: 10px 10px 0px 10px;
  display: block;
  clear: both;
  height: 245px;
  background: #fff;
  .title {
    float: left;
    margin-top: 5px;
  }
  .op {
    float: right;
  }
}
</style>
