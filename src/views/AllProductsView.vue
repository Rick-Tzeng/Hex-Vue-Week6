<template>
  <h2 class="fw-bold mb-5">相關產品</h2>
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 mb-5">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card h-100">
        <div class="card-header bg-transparent">
          <h5 class="card-title fw-bold">{{ product.title }}</h5>
        </div>
        <img :src="product.imageUrl" class="card-img-top"
          style="height: 300px; object-fit: cover; object-position: 50% 30%;"
          :alt="product.title">
        <div class="card-body d-flex flex-column justify-content-between">
          <p class="card-text">{{ product.description }}</p>
          <div v-if="!product.price" class="h4">
            {{ product.origin_price }} 元 / {{ product.unit }}
          </div>
          <div v-else class="text-end">
            <del class="text-muted">
              原價 {{ product.origin_price }}
              元 / {{ product.unit }}
            </del>
            <div>
              現在只要 <span class="h4 text-danger">{{ product.price }}</span>
              元 / {{ product.unit }}
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent d-flex justify-content-between">
          <router-link :to="`/product/${ product.id }`" class="btn btn-primary">
            🔎 詳細
          </router-link>
          <button type="button" class="btn btn-danger"
            @click="addToCart(product.id)"
            :disabled="product.id === selectedItemId">
            🛒 加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
  <Toast ref="toast"></Toast>
</template>

<script>
import Toast from '@/components/ToastTip.vue';

export default {
  data() {
    return {
      products: [],
      loader: {},
      selectedItemId: '',
    };
  },
  components: {
    Toast,
  },
  methods: {
    getAllProducts() {
      this.loader = this.$loading.show();
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all
      `;

      this.$http.get(apiUrl)
        .then((res) => {
          this.products = res.data.products;
          this.loader.hide();
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    addToCart(id, qty = 1) {
      this.loader = this.$loading.show();
      this.selectedItemId = id;
      const data = {
        product_id: id,
        qty,
      };
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart
      `;

      this.$http.post(apiUrl, { data })
        .then((res) => {
          this.$refs.toast.openToast(res);
          this.selectedItemId = '';
          this.loader.hide();
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });

      this.$mitter.emit('addCartNum', id);
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
