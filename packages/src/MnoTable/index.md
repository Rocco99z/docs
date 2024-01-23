---
title: MnoTable MNO表格
group:
  title: 后台
toc: none
---

# MnoTable - 高级表格

<p>此表格 为mno平台设计风格，更改了表格和分页的样式，添加了操作为下拉展开的形式，antd 的 Table 所有api都可使用，现在表格的操作可直接通过 action 属性配置，无需在columns.ts文件里配置，减少传递引入接口api的问题,添加了cloumns 里不写render会默认检测值是否为空 ，为空展示‘-’</p>

# 基本使用

<code src="./demos/demo1.tsx" ></code>

## API

| Name  | Description            | Type       | Default |
| ----- | ---------------------- | ---------- | ------- |
| index | 表格第一列是否需要序号 | ` boolean` | false   |
