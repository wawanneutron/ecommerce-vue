<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    :class="{ 'navbar-hidden': !showNavbar }"
  >
    <router-link class="navbar-brand" to="/">
      <img src="../assets/images/logo.svg" alt="" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto" v-if="guest">
        <router-link class="nav-link active" to="/"
          >Home <span class="sr-only">(current)</span></router-link
        >
        <router-link class="nav-link" to="/category">Categories</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/auth">Sign up</router-link>
        <router-link class="btn btn-success btn-lg" to="/auth"
          >Sign in</router-link
        >
      </div>
      <div class="navbar-nav ml-auto" v-if="!guest">
        <router-link class="nav-link active" to="/"
          >Home <span class="sr-only">(current)</span></router-link
        >
        <router-link class="nav-link" to="/category">Categories</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
      </div>
      <ul class="navbar-nav nav-profile " v-if="!guest">
        <li class="nav-item dropdown">
          <img
            src="../assets/images/user_pc.jpg"
            alt="user"
            class="rounded-circle mr-2 profile-picture shadow"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
          />
          Hi, Wawan
          <div class="dropdown-menu">
            <router-link to="/dashboard" class="dropdown-item">
              Dashboard</router-link
            >
            <router-link to="/dashboard-account" class="dropdown-item"
              >Settings</router-link
            >
            <hr />
            <router-link to="/auth" class="dropdown-item">Logout</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link chart d-inline-block mt-2">
            <img
              src="../assets/images/shopping_empety.svg"
              alt="chart empety"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    guest: false,
    showNavbar: true,
    lastScrollPosition: 0,
  }),
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 80) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>
