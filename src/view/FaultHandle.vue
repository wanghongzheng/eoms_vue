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
        <label>故障信息<span>(最多上传3张图片)</span></label>
        <div style="margin-top:10px;">
          <el-upload
            action="#"
            list-type="picture-card"
            accept="image/*"
            :file-list="productImgs"
            :http-request="uploadSectionFile"
            :on-preview="handlePictureCardPreview"
            :on-change="handleLimit"
            :on-exceed="handleExceed"
            :limit="3"
            multiple
            :class="{ disabled: uploadDisabled }"
            ref="upload"
          >
            <i class="el-icon-plus" style="width:96px;height:96px;"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i
                    class="el-icon-delete"
                    style="vertical-align:top;margin-top:4px;margin-right:2px;"
                  ></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogPicVisible" width="80%">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
        <div style="margin-top:10px;">
          <el-button type="primary" @click="upload()">上 传 </el-button>
          <el-button type="primary" @click="viewPicture()">查看图片</el-button>
        </div>
        <div style="margin-top:10px;display:none;">
          <el-button type="primary" @click="test()">图片滑动测试</el-button>
          <el-button type="primary" @click="testUploadFile()"
            >测试上传文件插件</el-button
          >
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
      productImgs: [],
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
    test() {
      this.$router.push("/faultHandle/TestComponent");
    },
    testUploadFile() {
      this.$router.push("/faultHandle/UploadFileComponent");
    },
    handleRemove(file) {
      console.log(file);
      var fileList = this.$refs.upload.uploadFiles;
      var index = fileList.findIndex(fileItem => {
        return fileItem.uid === file.uid;
      });
      fileList.splice(index, 1);
      this.uploadDisabled = false;
    },
    handlePictureCardPreview(file) {
      console.info("测试吧");
      this.dialogImageUrl = file.url;
      this.dialogPicVisible = true;
    },
    handleExceed(files, fileList) {
      // 图片上传超过数量限制
      this.$message.error("上传图片不能超过6张!");
      console.log(files, fileList);
    },
    handleUploadRoadClose() {
      this.currentDialogVisible = false;
      this.uploadFile = [];
      this.$refs.upload.clearFiles();
      this.$refs.upload.uploadFiles.length = 0;
      this.$emit("update:dialogVisible", this.currentDialogVisible);
      this.$message.info("已取消文件上传！");
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
.baseInfo1 .el-upload--picture-card {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 98px;
  height: 98px;
  line-height: 98px;
  vertical-align: top;
}
.baseInfo1 .el-upload-list--picture-card .el-upload-list__item {
  width: 98px;
  height: 98px;
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
  span {
    font-size: 12px;
    float: right;
    //margin-right: 10px;
  }
  .title {
    float: left;
    margin-top: 5px;
  }
  .op {
    float: right;
  }
}

.baseInfo1 .el-upload-list--picture-card .el-upload-list__item-actions span {
  display: inline-block;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-color: red;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.baseInfo1 .el-upload-list--picture-card .el-upload-list__item-actions {
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: 0;
  cursor: default;
  text-align: right;
  color: #fff;
  opacity: 1;
  font-size: 20px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  //margin-top: -15px;
}
.baseInfo1 .el-upload-list--picture-card .el-upload-list__item-actions {
  background: transparent;
}
</style>
