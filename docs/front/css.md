---
title: CSS规范
order: 4
---

#### CSS 规范

所有项目采用[TailwindCss](https://www.tailwindcss.cn/docs) 进行 css 书写

- 不再使用在 tsx 中 直接写 style 的内联方式，影响代码阅读，组件每次渲染都会重新创建对象。

- 修改 antd 样式 在`styles`文件定义 css 文件 进行更改后 在所需的页面使用 links 引入
- tailwind 自带的 单位 颜色无法满足 可使用自定义 ，如过差距不是很大可以忽略
- 减少开发成本 可将项目常用的 单位 颜色 放在 `tailwind.config.js` 的 theme 下定义 直接覆盖还是 extend 根据情况考虑,减少重复定义 **eg:mineFlow: "24px 24px 0 0" , card: "24px",`可以直接使用 rounded-t-card**
- 使用了 `postcss-px-to-viewport`适配的项目 可直接写 `h-[100px]`的书写方式 会编译成 vw
- TailwindCss class 过多并且可复用 可使用 `@apply` 在单独 css 文件封装 后 links 引入使用
- **注意：使用了 postcss-px-to-viewport 的项目 @apply text-[50px] 会无法适配 按以下写法可正常适配编译成 vw**

```
  @apply flex items-center justify-end;
  font-size: 28px;
```
