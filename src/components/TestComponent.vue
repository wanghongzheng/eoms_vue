<template>
  <div id="slider" class="slider">
    <swiper :options="swiperOption" ref="imgOverview" style="height: 100%;">
      <swiper-slide v-for="(img, index) in previewImg" :key="index">
        <div class="swiper-zoom-container">
          <img :src="img.url" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        width: window.innerWidth,
        zoom: true,
        initialSlide: 0
      },
      previewImg: [
        {
          id: 0,
          url:
            "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
          time: "2019-11-12 06:00:00"
        },
        {
          id: 1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "2019-11-12 06:00:00"
        },
        {
          id: 2,
          url:
            "https://bpic.588ku.com/element_origin_min_pic/19/04/09/a277bb5712ad1039f972929340cb86b3.jpg",
          time: "2019-11-12 06:00:00"
        }
      ]
    };
  }
};
</script>
