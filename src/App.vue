<template>
  <div id="app" class="container-fluid">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
  },
};
</script>
