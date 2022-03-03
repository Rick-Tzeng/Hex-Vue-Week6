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
            <router-link class="nav-link text-white" to="/admin/allProducts">
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/admin/orders">
              客戶訂單
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white" @click.prevent="signOut">
              登出
            </a>
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
    };
  },
  methods: {
    addIsActiveClass() {
      this.hamburger.classList.toggle('is-active');
    },
    signOut() {
      this.$emit('sign-out');
    },
  },
  mounted() {
    this.hamburger = this.$refs.hamburger;
  },
};
</script>

<style src='../assets/css/frontnavbar.css' scoped></style>
