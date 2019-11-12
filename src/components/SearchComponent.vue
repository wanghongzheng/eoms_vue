<template>
  <div class="formItem">
    <div class="el-drawer__body">
      <el-form :model="form">
        <el-form-item label="开始时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.beginTime"
            type="datetime"
            placeholder="选择日期时间"
            style="width:100%"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
            @change="dateChangeBeginTime"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="结束时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.endTime"
            type="datetime"
            placeholder="选择日期时间"
            style="width:100%"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="23:59:59"
            @change="dateChangeEndTime"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="任务类型" :label-width="formLabelWidth">
          <el-select
            v-model="form.value"
            filterable
            placeholder="请选择"
            style="width:100%"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              autocomplete="off"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="demo-drawer__footer">
      <el-button @click="$emit('update:visible', false)">取 消</el-button>
      <el-button type="primary" @click="submitData" :loading="loading">{{
        loading ? "提交中 ..." : "确 定"
      }}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      beginTime: new Date(),
      endTime: new Date(),
      options: [
        {
          value: "1",
          label: "任务1"
        },
        {
          value: "2",
          label: "任务2"
        },
        {
          value: "3",
          label: "任务3"
        },
        {
          value: "4",
          label: "任务4"
        },
        {
          value: "5",
          label: "任务5"
        },
        {
          value: "6",
          label: "任务6"
        }
      ],
      form: {
        beginTime: "",
        endTime: "",
        value: "1"
      },
      formLabelWidth: "80px"
    };
  },
  props: ["visible"],
  methods: {
    dateChangeBeginTime(val) {
      console.log(val);
      this.form.beginTime = val;
    },
    dateChangeEndTime(val) {
      console.log(val);
      this.form.endTime = val;
    },
    submitData() {
      this.$confirm("确认关闭？")
        .then(_ => {
          this.$emit("submitInfo", this.form);
          console.info(_);
        })
        .catch(_ => {
          console.info(_);
        });
    }
  }
};
</script>
<style scoped lang="scss">
.formItem {
  margin: 20px;
  label {
    margin-right: 10px;
  }
  el-select,
  el-date-picker {
    //float:right;
  }
}
</style>
<style lang="scss">
.demo-drawer__footer {
  float: right;
}
</style>
