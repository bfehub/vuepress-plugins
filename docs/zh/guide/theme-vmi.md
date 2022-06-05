# 主题参考

这套主题修改于 `vuepress` 的官方的 `theme-default`。现在没有做太多配置上的更改，所以配置参考 [默认主题](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html) 的配置。你可以使用任何的主题，以上的插件和主题没有强绑定。

## 使用

```sh
npm i -D @bfehub/vuepress-theme-vmi
```

```js
const { defaultTheme } = require('@bfehub/vuepress-theme-vmi')

module.exports = {
  theme: defaultTheme({
    // 在这里进行配置
  }),
}
```
