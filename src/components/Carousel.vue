<template>
  <div class="img-carousel" data-aos="zoom-in">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(banner, index) in banners"
        :key="index"
        :caption="banner.title"
        :text="banner.subtitle"
        :img-src="banner.url"
        width="100%"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data: () => ({
    slide: 0,
    sliding: null,
    banners: [
      {
        id: 1,
        title: "Discount 50%",
        subtitle: "Dapatkan harga sepcial hanya di Toko kami",
        url: "images/banner.jpg",
      },
      {
        id: 2,
        title: "Discount 35%",
        subtitle: "Waktu Indonesia Belanja",
        url: "images/banner2.jpg",
      },
      {
        id: 3,
        title: "Discount 75%",
        subtitle: "HARBOLNAS",
        url: "images/BannerTshirtCoding.jpg",
      },
    ],
  }),
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
