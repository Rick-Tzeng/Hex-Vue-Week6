<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <router-link
        class="navbar-brand text-white fs-1 fw-bold" to="/">
        首頁 Logo
      </router-link>
      <button type="button" class="d-lg-none hamburger"
        data-bs-toggle="collapse" data-bs-target="#navigation"
        ref="hamburger" @click="addIsActiveClass">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="collapse navbar-collapse" id="navigation">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">
              關於我們
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/allProducts">
              相關產品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white position-relative" to="/cart">
              我的購物車
              <span class="badge rounded-circle bg-danger">
                {{ productNum }}
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/admin">
              登入
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hamburger: {},
      cartDataTemp: {
        carts: [],
      },
      productNum: 0,
      pIdTemp: [],
    };
  },
  methods: {
    addIsActiveClass() {
      this.hamburger.classList.toggle('is-active');
    },
  },
  mounted() {
    // 監聽並取得 CartView.vue 的 cartData
    this.$mitter.on('updateCartNum', (cartData) => {
      this.cartDataTemp = cartData;
      this.productNum = this.cartDataTemp.carts.length;
      this.pIdTemp = [];
    });
    // 監聽 AllProductsView.vue 有沒有新產品加入購物車
    this.$mitter.on('addCartNum', (id) => {
      const isNewItem = this.cartDataTemp.carts.every((item) => item.product_id !== id);
      const isNewPId = this.pIdTemp.every((pid) => pid !== id);
      if (isNewItem && isNewPId) {
        this.productNum += 1;
        this.pIdTemp.push(id);
      }
    });
    this.hamburger = this.$refs.hamburger;
  },
};
</script>

<style src='../assets/css/frontnavbar.css' scoped></style>
