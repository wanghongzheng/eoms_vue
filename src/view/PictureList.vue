<template>
  <div>
    <div class="head">
      <el-button style="padding-right: 4px" type="text" v-on:click="goBack">
        <i class="el-icon-back" style="color:#fff;"></i>
      </el-button>
      <label>故障图片</label>
    </div>
    <div class="content">
      <PictureComponent
        e
        v-for="(item, index) in testData"
        :data="item.imagesList"
        :max-show="20"
        :key="index"
        :time="item.timeDescribe"
        style="margin-bottom:25px;"
      />
    </div>
  </div>
</template>
<script>
import PictureComponent from "../components/PictureComponent";
export default {
  data() {
    return {
      testData: [
        {
          timeDescribe: "今天",
          imagesList: [
            {
              id: 0,
              url:
                "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
              time: "2019-11-12 06:00:00",
              checkbox: false
            },
            {
              id: 1,
              url:
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
              time: "2019-11-12 06:00:00",
              checkbox: false
            },
            {
              id: 2,
              url:
                "https://bpic.588ku.com/element_origin_min_pic/19/04/09/a277bb5712ad1039f972929340cb86b3.jpg",
              time: "2019-11-12 06:00:00",
              checkbox: false
            }
          ]
        },
        {
          timeDescribe: "昨天",
          imagesList: [
            {
              id: 0,
              url:
                "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
              time: "2019-11-11 06:00:00",
              checkbox: false
            },
            {
              id: 1,
              url:
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
              time: "2019-11-11 06:00:00",
              checkbox: false
            },
            {
              id: 2,
              url:
                "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
              time: "2019-11-11 06:00:00",
              checkbox: false
            },
            {
              id: 3,
              url:
                "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
              time: "2019-11-11 06:00:00",
              checkbox: false
            },
            {
              id: 4,
              url:
                "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
              time: "2019-11-11 06:00:00",
              checkbox: false
            }
          ]
        },
        {
          timeDescribe: "2019-11-11",
          imagesList: [
            {
              id: 0,
              url:
                "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
              time: "2019-11-10 06:00:00",
              checkbox: false
            },
            {
              id: 1,
              url:
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
              time: "2019-11-10 06:00:00",
              checkbox: false
            }
          ]
        }
      ]
    };
  },
  components: { PictureComponent },
  methods: {
    goBack() {
      this.$router.go(-1);
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
.content {
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  background: #f7f7f7;
}
</style>
