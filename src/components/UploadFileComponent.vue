<template>
  <div class="testUpload">
    <el-upload
      action="#"
      list-type="picture-card"
      accept="image/*"
      :limit="imgLimit"
      :file-list="productImgs"
      :multiple="isMultiple"
      :http-request="uploadSectionFile"
      :on-preview="handlePictureCardPreview"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-exceed="handleExceed"
      :on-error="imgUploadError"
      ref="upload"
    >
      <i class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i
              class="el-icon-delete"
              style="vertical-align:top;margin-top:4px;margin-right:2px;"
            ></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      productImgs: [],
      disabled: false,
      isMultiple: true,
      imgLimit: 6
    };
  },
  methods: {
    handleRemove(file) {
      // 移除图片
      console.log(file);
      var fileList = this.$refs.upload.uploadFiles;
      var index = fileList.findIndex(fileItem => {
        return fileItem.uid === file.uid;
      });
      fileList.splice(index, 1);
    },
    handlePictureCardPreview(file) {
      // 预览图片时调用
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadSectionFile(param) {
      console.info(param);
    },
    beforeAvatarUpload(file) {
      // 文件上传之前调用做一些拦截限制
      console.log(file);
      const isJPG = true;
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file) {
      // 图片上传成功
      console.log(res);
      console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleExceed(files, fileList) {
      // 图片上传超过数量限制
      this.$message.error("上传图片不能超过6张!");
      console.log(files, fileList);
    },
    imgUploadError(err, file, fileList) {
      // 图片上传失败调用
      console.log(err);
      this.$message.error("上传图片失败!");
    }
  }
};
</script>
<style lang="scss">
.testUpload {
  margin: 20px;
}
.testUpload .el-upload-list--picture-card .el-upload-list__item-actions span {
  display: inline-block;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-color: red;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.testUpload .el-upload-list--picture-card .el-upload-list__item-actions {
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
.testUpload .el-upload-list--picture-card .el-upload-list__item-actions {
  background: transparent;
}
</style>
