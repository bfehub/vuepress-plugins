module.exports = {
  root: true,
  extends: '@bfehub/eslint-config-vue',
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  globals: {
    __VUEPRESS_VERSION__: 'readonly',
    __VUEPRESS_DEV__: 'readonly',
    __VUEPRESS_SSR__: 'readonly',
    __VUE_HMR_RUNTIME__: 'readonly',
    __VUE_OPTIONS_API__: 'readonly',
    __VUE_PROD_DEVTOOLS__: 'readonly',
  },
}
