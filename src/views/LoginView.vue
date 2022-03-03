<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="text-center text-success fw-bold my-5">登入頁面</h1>
      <div class="col-4 bg-success bg-opacity-25 rounded-3 p-3">
        <!-- Form 登入表單 -->
        <form @submit.prevent="signIn">
          <div class="mb-3">
            <label for="userNameInput" class="form-label w-100 fw-bold">
              Email address
              <input
                type="email"
                id="userNameInput"
                class="form-control my-3"
                placeholder="name@example.com"
                v-model="user.username"
                required
              />
            </label>
          </div>
          <div>
            <label for="passwordInput" class="form-label w-100  fw-bold">
              Password
              <input
                type="password"
                id="passwordInput"
                class="form-control my-3"
                placeholder="Password"
                v-model="user.password"
                required
              />
            </label>
          </div>
          <button type="submit"
            class="btn btn-outline-success w-100 my-3"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 text-center text-muted fw-bold">&copy; 2021~&infin;－六角學院</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const apiUrl = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(apiUrl, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/allProducts');
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>
