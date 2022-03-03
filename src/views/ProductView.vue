<template>
  <h1 class="fw-bold">{{ product.title }}</h1>
  <div class="row mb-5 g-5">
    <div class="col-md-6">
      <img :src="product.imageUrl" class="img-fluid img-thumbnail"
        style="object-fit: cover"
        :alt="product.title" />
    </div>
    <div class="col-md-6">
      <h5>
        <span class="badge bg-primary rounded-pill">
          {{ product.category }}
        </span>
      </h5>
      <p>商品描述：{{ product.description }}</p>
      <p>商品內容：{{ product.content }}</p>
      <div v-if="!product.price" class="h4 my-5">
        {{ product.origin_price }} 元 / {{ product.unit }}
      </div>
      <div v-else class="text-end my-5">
        <del class="text-muted">
          原價 {{ product.origin_price }}
          元 / {{ product.unit }}
        </del>
        <div>
          現在只要<span class="h4 text-danger">{{ product.price }}</span>
          元 / {{ product.unit }}
        </div>
      </div>
      <div class="text-end">
        <label for="numOfQty" class="form-label mt-3">購買數量
          <input type="number" id="numOfQty" class="form-control
            text-center fw-bold" min="1" v-model.number="qty"
            oninput="
            this.value = !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1"
            :disabled="product.id === selectedItemId"/>
        </label>
      </div>
      <div class="text-end mt-4">
        <button type="button" class="btn btn-danger"
          @click="addToCart(product.id, qty)"
          :disabled="product.id === selectedItemId">
            🛒 加入購物車
        </button>
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
      qty: 1,
      product: {},
      loader: {},
      selectedItemId: '',
    };
  },
  components: {
    Toast,
  },
  methods: {
    getProduct() {
      this.loader = this.$loading.show();
      const { id } = this.$route.params;
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}
      `;
      this.$http.get(apiUrl)
        .then((res) => {
          this.product = res.data.product;
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
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
