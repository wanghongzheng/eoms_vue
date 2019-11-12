<template>
    <div>
        <div class="head">
            <el-button style="padding-right: 4px" type="text"
                       v-on:click="goBack">
                <i class="el-icon-back" style="color:#fff;"></i>
            </el-button>
            <label>基本信息</label>
            <el-button style="float:right;padding-right: 4px;color:#fff;"
                 type="text" v-on:click="goBack">
                确定
            </el-button>
        </div>
        <div class="content">
            <div class="baseInfo1">
                <label class="title">完成状态</label>
                <label class="op">
                    <el-switch v-model="form.value1">
                    </el-switch>
                </label>
            </div>
            <div class="baseInfo1">
                <label class="title">报备状态</label>
                <label class="op">
                    <el-switch v-model="form.value2">
                    </el-switch>
                </label>
            </div>
            <div class="baseInfo" style="padding-top: 20px;">
                <label class="title">运维人员</label>
                <label class="op">
                    <el-select v-model="form.selctedValue"  filterable placeholder="请选择" style="width:100%">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                autocomplete="off">
                        </el-option>
                    </el-select>
                </label>
            </div>
            <div class="baseInfo">
                <label class="title">处理时间</label>
                <label class="op">
                    <el-date-picker
                        v-model="form.handleTime"
                        type="datetime"
                        placeholder="选择日期时间"
                        style="width:100%"
                        format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"
                        default-time = "23:59:59"
                        @change="dateChangeHandleTime">
                    </el-date-picker>
                </label>
            </div>
            <div class="baseInfo">
                <label class="title">报备时间</label>
                <label class="op">
                    <el-date-picker
                        v-model="form.uploadTime"
                        type="datetime"
                        placeholder="选择日期时间"
                        style="width:100%"
                        format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"
                        default-time = "23:59:59"
                        @change="dataChangeUploadTime">
                    </el-date-picker>
                </label>
            </div>
            <div class="baseInfo">
                <label class="title">故障原因</label>
                <label class="op">
                    <el-input v-model="form.faultReson" placeholder="请输入内容"></el-input>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        value1: false,
        value2: true,
        selctedValue: '1',
        handleTime: '',
        uploadTime: '',
        faultReson: ''
      },
      options: [{
        value: '1',
        label: '张正'
      }, {
        value: '2',
        label: '李明'
      }]
    }
  },
  methods: {
    goBack () {
      console.log('go back')
      this.$router.go(-1)
    },
    dateChangeHandleTime (val) { // 处理时间
      console.log(val)
      this.form.handleTime = val
    },
    dataChangeUploadTime (val) {
      this.form.uploadTime = val
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
    .baseInfo {
        padding:5px 15px 10px 15px;
        display: flex;
        font-size:14px;
        clear: both;
        .title{
            float:left;
            flex:1;
            margin-top: 5px;
        }
        .op{
            flex:3;
            float:right;
        }
        .title1{
            float:left;
            margin-top: 5px;
        }
        .op1{
            float:right;
        }
    }
    .baseInfo1 {
        padding:15px 15px 15px 15px;
        display: block;
        font-size:14px;
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
