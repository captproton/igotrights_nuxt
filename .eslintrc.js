module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  rules: {
    // Customize rules here
    'vue/multi-word-component-names': 'off', // Disable if you prefer simple component names
    'comma-dangle': ['error', 'always-multiline']
  }
};
