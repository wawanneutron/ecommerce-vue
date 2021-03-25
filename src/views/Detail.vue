<template>
  <div>
    <section class="mt-global store-breadcrumbs">
      <div class="row">
        <div class="col-12">
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item  active">Product Details</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
    <section class="store-gallery">
      <div class="row">
        <div class="col-lg-8">
          <main>
            <img
              :src="photos[photoActive].url"
              :key="photos[photoActive].url"
              class="img-store w-100"
            />
          </main>
        </div>
        <div class="col-lg-2">
          <div class="row">
            <div
              class="col-5 col-md-3 col-lg-12"
              v-for="(photo, index) in photos"
              :key="index"
            >
              <main @click="changeActive(index)">
                <img
                  class="w-100"
                  :src="photo.url"
                  :class="{ active: index == photoActive }"
                />
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "detail",
  data: () => ({
    photoActive: 0,
    photos: [
      {
        id: 1,
        url: "/images/pic_detail1.jpg",
      },
      {
        id: 2,
        url: "/images/pic_detail2.png",
      },
      {
        id: 3,
        url: "/images/pic_detail3.jpg",
      },
      {
        id: 4,
        url: "/images/pic_detail5.jpg",
      },
    ],
  }),
  methods: {
    changeActive(id) {
      this.photoActive = id;
    },
  },
};
</script>
