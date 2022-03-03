<template>
  <FrontNavBar></FrontNavBar>
  <div class="container">
    <div class="front">
      <h1>前台頁面</h1>
    </div>
    <router-view />
  </div>
  <!-- Footer -->
  <div class="footer d-flex justify-content-center align-items-center">
    <p class="h1 fw-bold text-white text-center mb-0">Footer</p>
  </div>
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue';

export default {
  components: {
    FrontNavBar,
  },
};
</script>

<style scoped>
.front {
  margin-top: 15vh;
  margin-bottom: 5vh;
  text-align: center;
}

.footer {
  height: 25vh;
  background-color: var(--bs-gray-900);
}
</style>
