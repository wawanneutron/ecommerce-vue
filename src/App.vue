<template>
  <div id="app" class="container-fluid">
    <Navbar></Navbar>
    <Carousel></Carousel>
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
};
</script>
