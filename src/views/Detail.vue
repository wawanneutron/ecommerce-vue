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
      <div class="row justify-content-between">
        <div class="col-lg-8">
          <transition name="slide-fade" mode="out-in">
            <img
              :src="photos[photoActive].url"
              :key="photos[photoActive].url"
              class="img-store w-100"
            />
          </transition>
        </div>
        <div class="col-lg-3">
          <div class="row justify-content-center">
            <div
              class="col-5 col-md-3 col-lg-12"
              v-for="(photo, index) in photos"
              :key="index"
            >
              <main @click="changeActive(index)">
                <img
                  class="w-100 img-thumbnail"
                  :src="photo.url"
                  :class="{ active: index == photoActive }"
                />
              </main>
            </div>
          </div>
        </div>
      </div>
      <section class="store-heading">
        <div class="row row-d">
          <div class="col-lg-6">
            <div class="product-header">Nike Jordan</div>
            <div class="subtitle">Tenang gak sampe jual ginjal</div>
            <div class="price">$897</div>
            <b-form-rating
              class="mb-2"
              variant="warning"
              v-model="rating"
            ></b-form-rating>
          </div>
          <div class="col-lg-3">
            <button
              class=" btn btn-success"
              v-b-popover.hover.top="'tambahkan ke keranjang'"
              title="adding to cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <section class="description">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="detail">Detail Product</div>
            <span class="text-descripsi" v-if="!readMoreActivited">
              {{ longText.slice(0, 200) }}
              <span class="readmore-shadow">{{ longText.slice(0, 35) }}</span>
            </span>
            <span
              v-if="readMoreActivited"
              v-html="longText"
              class="text-descripsi"
            ></span>
            <a
              class="readmore "
              v-if="!readMoreActivited"
              @click="readmoreActive"
              >Lihat selengkapnya
            </a>
            <a class="readmore " v-else @click="shortText"
              >Lihat Lebih Sedikit</a
            >
          </div>
        </div>
        <b-tabs class="content-store" content-class="mt-3">
          <b-tab title="Ukuran" active><p>I'm the second tab</p></b-tab>
          <b-tab title="Diskusi"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            hic?</b-tab
          >
          <b-tab title="Review"><p>I'm the second tab</p></b-tab>
        </b-tabs>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "detail",
  data: () => ({
    rating: 3,
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
    ],
    readMoreActivited: false,
    longText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum provident porro deserunt illo numquam distinctio odit. A aut distinctio quasi error minima et? Nulla blanditiis minus inventore illo praesentium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sapiente nostrum consectetur? Facere maiores dicta nihil velit! Voluptatem quos ducimus, nisi dicta molestias, atque vel ea, consequuntur laboriosam minima  ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum provident porro deserunt illo numquam distinctio odit. A aut distinctio quasi error minima et? Nulla blanditiis minus inventore illo praesentium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sapiente nostrum consectetur? Facere maiores dicta nihil velit! Voluptatem quos ducimus, nisi dicta molestias, atque vel ea, consequuntur laboriosam minim facere.`,
  }),

  methods: {
    changeActive(id) {
      this.photoActive = id;
    },
    readmoreActive() {
      this.readMoreActivited = true;
    },
    shortText() {
      this.readMoreActivited = false;
    },
  },
};
</script>
