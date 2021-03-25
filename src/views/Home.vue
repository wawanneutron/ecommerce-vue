<template>
  <div>
    <Carousel></Carousel>
    <div class="page-content">
      <section class="header-title" data-aos="fade-up">
        <div class="row">
          <span class="text-product-category">Trend Categories</span>
        </div>
        <div class="row">
          <router-link class="show-all" to="/category"
            >Show all categories</router-link
          >
        </div>
      </section>
      <section class="store-trend-categories">
        <div class="row">
          <div
            class="col-6 col-md-3 col-lg-2"
            data-aos="fade-up"
            v-for="(category, index) in categories"
            :key="index"
          >
            <router-link to="/category" class="component-categories d-block">
              <div class="categories-image">
                <img :src="category.url" class="w-100" />
              </div>
              <p class="categories-text">{{ category.name }}</p>
            </router-link>
          </div>
        </div>
      </section>
      <section class="header-title" data-aos="fade-up">
        <div class="row">
          <span class="text-product-category">New Products</span>
        </div>
        <div class="row">
          <router-link class="show-all" to="/category"
            >Show All New Products</router-link
          >
        </div>
      </section>
      <section class="store-new-products" data-aos="fade-up">
        <div class="row">
          <div
            class="col-6 col-md-3 col-lg-3 col-product"
            v-for="(product, index) in products"
            :key="index"
          >
            <router-link to="/details" class="component-product">
              <div class="product-thumbnail">
                <img :src="product.url" class=" w-100" alt="" />
              </div>
              <div class="product-text">
                <p>{{ product.name }}</p>
              </div>
              <div class="product-price">
                <p>{{ product.price }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  components: {
    Carousel: () => import("@/components/home/Carousel.vue"),
  },
  data: () => ({
    categories: [
      {
        id: 1,
        name: "Babyes",
        url: "/images/categories-babyes.svg",
      },
      {
        id: 2,
        name: "Furniture",
        url: "/images/categories-furnitures.svg",
      },
      {
        id: 3,
        name: "Getgets",
        url: "/images/categories-gedgets.svg",
      },
      {
        id: 4,
        name: "Makeup",
        url: "/images/categories-makeup.svg",
      },
      {
        id: 5,
        name: "Sneakers",
        url: "/images/categories-sneakers.svg",
      },
      {
        id: 6,
        name: "Tools",
        url: "/images/categories-tools.svg",
      },
    ],
    products: [
      {
        id: 1,
        name: "Apple Watch",
        price: "$457",
        url: "/images/image1.jpg",
      },
      {
        id: 2,
        name: "Nike Jordan",
        price: "$847",
        url: "/images/image2.jpg",
      },
      {
        id: 3,
        name: "Chair Green",
        price: "$45",
        url: "/images/image3.jpg",
      },
      {
        id: 4,
        name: "Full Collor",
        price: "$247",
        url: "/images/image4.jpg",
      },
      {
        id: 5,
        name: "Books",
        price: "$87",
        url: "/images/image5.jpg",
      },
      {
        id: 6,
        name: "DJI Mavic 4 pro",
        price: "$982",
        url: "/images/image6.jpg",
      },
      {
        id: 7,
        name: "Nike Air pro",
        price: "$241",
        url: "/images/image7.jpg",
      },
      {
        id: 8,
        name: "Dool Beard",
        price: "$65",
        url: "/images/image8.jpg",
      },
    ],
  }),
};
</script>
