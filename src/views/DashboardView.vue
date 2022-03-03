<template>
  <AdminNavBar @sign-out="signOut"></AdminNavBar>
  <div class="container">
    <div class="back">
      <h1>後台頁面</h1>
    </div>
    <router-view v-if="isLogin"/>
  </div>
</template>

<script>
import AdminNavBar from '@/components/AdminNavBar.vue';

export default {
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    AdminNavBar,
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        const apiUrl = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(apiUrl)
          .then(() => {
            this.isLogin = true;
          })
          .catch((err) => {
            console.dir(err.response.data.message);
            this.$router.push('/login');
          });
      } else {
        this.$router.push('/login');
      }
    },
    signOut() {
      document.cookie = 'hexToken=;expires=;';
      this.$router.push('/login');
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style scoped>
.back {
  margin-top: 15vh;
  margin-bottom: 5vh;
  text-align: center;
}
</style>
