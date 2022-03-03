<template>
  <h3 class="fw-bold text-center mt-5">填寫購買資料</h3>
  <div class="row justify-content-center mb-5">
    <div class="col-md-6 border p-3">
      <Form v-slot="{ errors }" @submit="createOrder" ref="form">
        <div class="mb-3">
          <label for="email" class="form-label w-100">Email
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage
              name="email"
              class="invalid-feedback"
            ></ErrorMessage>
          </label>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label w-100">收件人姓名
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage
              name="姓名"
              class="invalid-feedback"
            ></ErrorMessage>
          </label>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label w-100">收件人電話
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="min:8|max:10|required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage
              name="電話"
              class="invalid-feedback"
            ></ErrorMessage>
          </label>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label w-100">收件人地址
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage
              name="地址"
              class="invalid-feedback"
            ></ErrorMessage>
          </label>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label w-100">留言
            <textarea
              name="message"
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </label>
        </div>

        <div class="text-end">
          <button
            type="submit"
            class="btn btn-danger"
            :disabled="
            Object.keys(errors).length > 0 || cartData.carts.length === 0"
          >
            送出訂單
          </button>
        </div>
      </Form>
    </div>
  </div>
  <Toast ref="toast" />
</template>

<script>
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Toast from '@/components/ToastTip.vue';

Object.keys(AllRules).forEach((rule) => {
  if (rule !== 'default') {
    defineRule(rule, AllRules[rule]);
  }
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale('zh_TW');

export default {
  props: ['cartData'],
  emits: ['get-cart'],
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    Toast,
  },
  methods: {
    // 建立訂單 v
    createOrder() {
      const apiUrl = `
        ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order
      `;
      const order = this.form;

      this.$http.post(apiUrl, { data: order })
        .then((res) => {
          this.$refs.form.resetForm();
          this.form.message = '';
          this.$emit('get-cart'); // 建立訂單完成後必須重新抓取購物車的資料庫
          this.$refs.toast.openToast(res, '訂單訊息', false);
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
  },
  mounted() {
    this.$refs.form.resetForm();
  },
};
</script>
