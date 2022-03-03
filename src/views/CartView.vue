<template>
  <h2 class="fw-bold">我的購物車</h2>
  <div class="mt-5 mb-2 text-end">
    <button type="button" class="btn btn-outline-danger"
      @click="deleteAllCart" :disabled="cartData.carts.length === 0">
      清空購物車
    </button>
  </div>
  <table class="table table-striped table-hover text-center align-middle">
    <thead>
      <tr>
        <th class="table-dark" v-for="label in labels" :key="label">{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cartData.carts">
        <tr v-for="item in cartData.carts" :key="item.id">
          <td style="width:10%">
            <button type="button" class="btn btn-outline-danger"
              @click="removeCartItem(item.id, item.product.title)"
              :disabled="item.id === selectedItemId">
              刪除
            </button>
          </td>
          <td style="width:15%">{{ cartData.carts.indexOf(item) + 1 }}</td>
          <td style="width:25%">{{ item.product.title }}</td>
          <td style="width:15%">
            <select class="form-select" v-model="item.qty"
              @change="updateCartItem(item)"
              :disabled="item.id === selectedItemId">
              <option :value="num" v-for="num in 99" :key="num + item.id">
                {{ num }}
              </option>
            </select>
          </td>
          <td style="width:20%">
            <div v-if="!item.product.price" class="h5">
              {{ item.product.origin_price }} 元 / {{ item.product.unit }}
            </div>
            <div v-else class="h5">
              {{ item.product.price }} 元 / {{ item.product.unit }}
            </div>
          </td>
          <td style="width:15%" class="text-end">
            <div class="h5">{{ item.total }}</div>
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr v-if="cartData.total === cartData.final_total">
        <td colspan="5" class="h4 fw-bold text-end">總計</td>
        <td class="h4 text-end">{{ cartData.total }}</td>
      </tr>
      <tr v-else>
        <td colspan="5" class="h4 fw-bold text-success text-end">折扣價</td>
        <td class="h4 text-success text-end">{{ cartData.final_total }}</td>
      </tr>
    </tfoot>
  </table>
  <OrderForm :cart-data="cartData" @get-cart="getCart" />
  <Toast ref="toast" />
</template>

<script>
import OrderForm from '@/components/OrderForm.vue';
import Toast from '@/components/ToastTip.vue';

export default {
  data() {
    return {
      labels: ['', '項次', '商品名稱', '數量', '單價／單位', '小計'],
      cartData: {
        carts: [],
      },
      loader: {},
      selectedItemId: '',
    };
  },
  components: {
    OrderForm,
    Toast,
  },
  watch: {
    cartData() {
      this.$mitter.emit('updateCartNum', this.cartData);
    },
  },
  methods: {
    // 取得購物車列表 v
    getCart() {
      this.loader = this.$loading.show();
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart
      `;

      this.$http.get(apiUrl)
        .then((res) => {
          this.cartData = res.data.data;
          this.loader.hide();
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    // 更新購物車 v
    updateCartItem(item) {
      this.selectedItemId = item.id;
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}
      `;

      this.$http.put(apiUrl, { data })
        .then((res) => {
          this.getCart();
          this.selectedItemId = '';
          this.$refs.toast.openToast(res, item.product.title, false);
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    // 刪除購物車物品 v
    removeCartItem(id, title) {
      this.selectedItemId = id;
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}
      `;

      this.$http.delete(apiUrl)
        .then((res) => {
          this.getCart();
          this.selectedItemId = '';
          this.$refs.toast.openToast(res, title, false);
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    // 清空購物車 v
    deleteAllCart() {
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts
      `;

      this.$http.delete(apiUrl)
        .then((res) => {
          this.getCart();
          this.$refs.toast.openToast(res, '購物車', false);
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
