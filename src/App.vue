<template>
  <div id="app" class="container-fluid">
    <Navbar></Navbar>
    <div v-if="carouselHome + carouselCategory">
      <Carousel></Carousel>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
    Carousel: () => import("@/components/home/Carousel.vue"),
  },
  computed: {
    //hanya menampilkan carousel di path tertentu
    carouselHome() {
      return this.$route.path === "/";
    },
    carouselCategory() {
      return this.$route.path === "/category";
    },
  },
};
</script>
