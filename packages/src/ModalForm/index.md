---
title: ModalForm 弹框表单
group:
  title: 后台
toc: none
---

# ModalForm - 弹框表单

<p>本质是用modal包裹form，如果要定义页脚需要使用 submitter.render 来进行自定义。ModalForm 提供了 trigger 来减少 state 的使用，如果你需要使用 state 来控制可以使用 open 和 onOpenChange 来控制打开与关闭，继承了modal和form的属性，Modal 的 props使用modalProps，form的可直接书写</p>

## 基本使用

<code src="./demos/demo1.tsx" ></code>

## 栅格布局

<code src="./demos/demo2.tsx" edit></code>

## API

| Name         | Description                        | Type                                | Default |
| ------------ | ---------------------------------- | ----------------------------------- | ------- |
| trigger      | 用于触发 modal 打开按钮            | ` jsx`                              |         |
| loading      | 提交按钮 loading                   | `boolean`                           | `--`    |
| submitter    | 表单底部提交按钮和取消按钮可自定义 | `boolean ｜ (() => React.ReactDOM)` |
| title        | 弹框的标题                         | `ReactNode`                         |
| width        | 弹框的宽度                         | `number`                            |
| onFinish     | 提交表单事件                       | `(value: any) =>void`               |
| open         | 受控的打开关闭,如需要手动控制可用  | `boolean`                           |
| onOpenChange | 打开关闭的事件                     | `(open: boolean) => void`           |
| modalProps   | 弹框的属性                         | `同 antd ModalProps`                |
