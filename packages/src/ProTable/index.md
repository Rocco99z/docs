---
title: ProTable 高级表格
group:
  title: 后台
toc: none
---

# ProTable - 高级表格

<p>antd 的 Table 所有api都可使用，在此之上添加了序号。现在表格的操作可直接通过 action 属性配置，无需在columns.ts文件里配置，减少传递引入接口api的问题,添加了cloumns 里不写render会默认检测值是否为空 ，为空展示‘--’</p>

# 基本使用

<code src="./demos/demo1.tsx" ></code>

# 配合tabs

如需在工具栏添加另外的操作按钮 可在 toolBar 的 action 里添加
<code src="./demos/demo2.tsx" ></code>

## API

| Name  | Description            | Type       | Default |
| ----- | ---------------------- | ---------- | ------- |
| index | 表格第一列是否需要序号 | ` boolean` | false   |
