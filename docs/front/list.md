---
title: 目录规范
order: 2
---

## 目录概览

```bash
- app
  ├── components                 * 项目多处复用共用组件
      ├── Dialog.tsx             * 组件
      └── index.tsx              * 集中导出
  ├── build
  ├── hooks                      * hooks
  ├── layout                     * 后台项目的布局 包括面包屑 菜单
  ├── routers                    * 页面
  ├── servers                    * grpc服务api
  ├── styles                     * 样式
  ├── utils                      * 工具
  ├── type.d.ts                  * ts
  └── root.tsx
- build                          * 服务端包
- proto                          * proto文件
- public                         * 客户端包
  ├── assets                     * 静态文件 存放图片 字体
  ├── build
  └── locales                    * 国际化
```

- componenst 、 hooks 、servers、utils 都需要 `index.ts` 做集中导出
- routers 下路由才用 `remix v2` 规范 ，
- assets 下存放所有静态文件，不可放在其他目录，按 icon 、bg 、img 划分,引入时直接使用 **/assets/icon/\*\*.webp** 不需使用 require
