---
title: 简介
order: 1

nav:
  title: 文档
  order: 1
  path: /docs
---

## SimbaComponents 的理念

该组件库是基于 Ant Design5 和 Ant Design Mobile 进行二次封装一些业务组件和重型组件，来使前端有快速高
效搭建中后台应用和 H5 页面的能力。

## 设计思路

加快开发速度，使代码简介方便阅读，把常用复用行高的逻辑提取封装成公共组件，减少变量的声明，繁琐的判断，以及相同页面需要cv等重复性的劳动



### 目录概览


```bash
- .dumi              * dumi 的相关配置，主要是主题等
- .github            * github 的 action 和相关的 issue 配置
- docs               * 存放公用的文档
- packages           * 我们维护的包, 如果你想贡献代码，这里是你最需要关注的
- tests              * 编写测试用例的地方
- .fatherrc.ts       * 编译脚手架的配置
- .umirc.js          * dumi 的核心配置

```
### 开发工作流

我们使用了 [monorepo](https://danluu.com/monorepo/) 的方式来管理我们的仓库，仓库中包含多个独立的包，
以便于更改可以一起联调，这样可以一起跑测试用例，如果变更出现问题，我们可以很快的定位到问题。

[`pnpm-workspace.yaml`](https://pnpm.io/zh/pnpm-workspace_yaml) 可以帮助我们在多个包中共享依赖。

`component`文件下为后台或web场景组件
`component-mobile`文件下为前台h5场景组件

