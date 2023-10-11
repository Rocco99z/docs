---
title: BaseForm 基础表单
group:
  title: 后台
toc: none
---

# BaseForm - 基础表单

<p>在表单的基础上默认添加了底部按钮，和提交按钮loading，统一了labelWidth,继承了antd，form的所有属性，可直接使用</p>

## 基本使用

<code src="./demos/demo1.tsx" ></code>

## 自定义按钮 和 更改按钮文字

<code src="./demos/demo2.tsx" ></code>

## API

| Name       | Description                        | Type                                | Default |
| ---------- | ---------------------------------- | ----------------------------------- | ------- |
| labelWidth | label 宽度                         | ` string ｜ number`                 | 70      |
| loading    | 提交按钮 loading                   | `boolean`                           | `--`    |
| submitter  | 表单底部提交按钮和取消按钮可自定义 | `boolean ｜ (() => React.ReactDOM)` |
