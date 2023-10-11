---
title: ProTable 高级表格
group:
  title: 后台
toc: none
---

# ProTable - 高级表格

<p>antd 的 Table 所有api都可使用，在此之上添加了序号，操作栏的导入导出。现在表格的操作可直接通过 action 属性配置，无需在columns.ts文件里配置，减少传递引入接口api的问题</p>


# 基本使用
<code src="./demos/demo1.tsx" ></code> 

# 导入导出 配合tabs
如需在工具栏添加另外的操作按钮 可在 toolBar 的 action 里添加，导出导入已在内部做了`通知`和`loading`处理，导出只需要接口和文件名即可，导入可支持 `Upload` 全部 props 
<code src="./demos/demo2.tsx" ></code> 

## API

| Name       | Description                        | Type                                | Default |
| ---------- | ---------------------------------- | ----------------------------------- | ------- |
| index | 表格第一列是否需要序号                       | ` boolean`                 |   false    |
| action | 表格最后一列操作                     | ` (record: any) => JSX.Element[]`     |      |
| export | 导出操作   api为导出接口 fileName为导出文件名                 | ` { api: (obj?: any) => Promise<any>; fileName: string }`     |      |
