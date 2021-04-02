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
              <li class="breadcrumb-item  active">Cart</li>
            </ol>
          </nav>
          <div class="text-product-header">
            <i class="fa fa-shopping-cart mr-2"></i>
            Order Details
          </div>
        </div>
      </div>
    </section>
    <section class="store-cart">
      <div class="row " data-aos="fade-up">
        <div class="col-12 table-responsive">
          <table class="table table-borderless table-cart">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Menu</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="index">
                <td class=" align-middle" style="width: 20%">
                  <img :src="cart.url" class="cart-image" />
                </td>
                <td class=" align-middle" style="width: 20%">
                  <div class="product-name">{{ cart.name }}</div>
                </td>
                <td class=" align-middle" style="width: 20%">
                  <div class="product-price">
                    Rp. {{ cart.price.toLocaleString("id-ID") }}
                  </div>
                  <div class="product-price-coret">
                    Rp. {{ cart.priceCoret.toLocaleString("id-ID") }}
                  </div>
                </td>
                <td class=" align-middle" style="width: 20%">
                  <div class="product-quantity">{{ cart.qty }}</div>
                </td>
                <td style="width: 20%" class="align-middle">
                  <a href="#" class="btn btn btn-remove-cart">Remove</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "cart",
  data: () => ({
    carts: [
      {
        id: 1,
        url: "/images/pic_detail1.jpg",
        name: "Sofat ternyaman",
        price: 2080000,
        priceCoret: 2600000,
        qty: 3,
      },
      {
        id: 2,
        url: "/images/pic_detail3.jpg",
        name: "Sofat ternyaman",
        price: 2080000,
        priceCoret: 2600000,
        qty: 3,
      },
      {
        id: 3,
        url: "/images/pic_detail5.jpg",
        name: "Sofat ternyaman",
        price: 2080000,
        priceCoret: 2600000,
        qty: 3,
      },
    ],
  }),
};
</script>
