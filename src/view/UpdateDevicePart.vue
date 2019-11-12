<template>
  <div>
    <div class="head">
      <el-button style="padding-right: 4px" type="text" v-on:click="goBack">
        <i class="el-icon-back" style="color:#fff;"></i>
      </el-button>
      <label>更新部件</label>
      <el-button
        style="float:right;padding-right: 4px;color:#fff;"
        type="text"
        v-on:click="goBack"
      >
        确定
      </el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :show-header="false"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="40"> </el-table-column>
      <el-table-column
        v-for="item in theadBody"
        :align="item.align"
        :key="item.prop"
        :width="item.width"
        :prop="item.prop"
        :label="item.text"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03 10:00:00",
          name: "活性炭-55i",
          type: "55i"
        },
        {
          date: "2016-05-02 10:00:01",
          name: "手机卡",
          type: "55i"
        },
        {
          date: "2016-05-04 10:00:02",
          name: "采样风机",
          type: "55i"
        },
        {
          date: "2016-05-01 10:00:03",
          name: "空气压缩机",
          type: "55i"
        },
        {
          date: "2016-05-08 10:00:04",
          name: "蒸馏水",
          type: "55i"
        },
        {
          date: "2016-05-06 10:00:05",
          name: "氮气发生器硅胶",
          type: "55i"
        },
        {
          date: "2016-05-07 10:00:06",
          name: "氢气发生器硅胶",
          type: "55i"
        }
      ],
      multipleSelection: [],
      theadBody: [
        {
          prop: "name",
          text: "名称",
          width: "100",
          align: "left"
        },
        {
          prop: "date",
          text: "日期",
          width: "155",
          align: "center"
        },
        {
          prop: "type",
          text: "地址",
          align: "right"
        }
      ]
    };
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.go(-1);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
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
</style>
