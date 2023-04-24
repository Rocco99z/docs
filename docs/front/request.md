---
title: 请求规范
order: 6
---

## 请求规范

- 前后端交互采用 grpc 的方式 前端使用 remix 来编写 BFF 的工作，数据的聚合和拆解都在 BFF 里来做 也就是 `loader` 或者 `action`
- 项目已配置命令 npm run dev 时会自动将 proto 文件转位 ts 存放在 `app/gen`下
- 在 servers 里导入后根据不同的服务划分集中导出

## server 定义

- 所有的`状态码返回判断`和 `副作用` 在 server 文件下按服务分类处理后集中导出，最终只返回 `页面需要的data 和 error` ，减少页面 `loader`和 `action`代码过多问题
- 给接口方法关联 proto 编译后生成 ts 类型

```js
/** 收银台 */
const createCheckoutCounter = async (request: PartialMessage<CreateCheckOutCounterRequest>) => {
  const { code, message, data, error } = grpcCatchError(
    await PaymentClient.createCheckoutCounter({ paymentOrderNum: "222" }),
  )
  if (code === 201 ) ....
  const temp = data.filter .....

  return {data:temp ,error }
}
```

- grpcCatchError 为错误捕捉 当状态码 40* 50*时将 message 返回至 error

## 页面使用

- 所有的 初始化查询数据 都在`loader` 里进行， 增删改表单提交等操作 都在 `action`里进行
- 页面组件只做数据展示 不进行任何数据的操作
- 减少变量声明 统一使用解构语法

```js
export async function loader({ request, params }: LoaderArgs) {
  //单个接口直接使用
  const { data, error } = createCheckoutCounter({ paymentOrderNum: "22" });
  return { data, erro };
  //多个接口需要解构重命名
  const { data: checkoutCounterData, error: checkoutCounterError } =
    createCheckoutCounter({ paymentOrderNum: "22" });

  const { data: payFlowData, error: payFlowError } = createPayFlow({
    paymentOrderNum: "22",
  });
  return {
    payFlowData,
    checkoutCounterData,
    error: payFlowError || checkoutCounterError,
  };
}
```
