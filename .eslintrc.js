module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 解決 label-has-for 的問題
    // 參考來源：https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/label-has-for.md
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        components: ['Label'],
        controlComponents: ['Field'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
};
