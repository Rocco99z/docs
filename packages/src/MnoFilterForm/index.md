---
title: MnoFilterForm MNO平台筛选表单
group:
  title: 后台
toc: none
---

# MnoFilterForm - MNO平台筛选表单

<p>mno平台筛选表单 点击更多查询出现弹框 外置查询和弹框查询、重置、from实例、initvalues、labelWidth同步 ，更多查询弹框会再点击待loading消失后自动关闭</p>

# 基本使用

<code src="./demos/demo1.tsx" ></code>

## API

| Name            | Description                                | Type             | Default |
| --------------- | ------------------------------------------ | ---------------- | ------- |
| externalForm    | 外部正常内容搜索项                         | ` boolean`       | false   |
| children        | 更多查询弹框内容搜索项                     |                  |         |
| loading         | loading                                    |                  |         |
| onFinish        | 提交表单事件 value为内置和弹框所有表单内容 | (value) => void; |         |
| width           | 弹框宽度                                   |                  |
| modalLabelWidth | modaol筛选labelwidth                       |                  |
| labelWidth      | 外置筛选labelwidth                         |                  | 70      |
