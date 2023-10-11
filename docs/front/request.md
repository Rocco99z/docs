---
title: 请求规范
order: 6
---

## 请求规范

- 前后端交互采用 grpc 的方式 前端使用 remix 来编写 BFF 的工作，数据的聚合和拆解都在 BFF 里来做 也就是 `loader` 或者 `action`
- 在dev 环境与后端联调时 请先 `npm i @simba/simba-proto@latest` 安装最新proto文件
- 在 servers 里导入后根据不同的服务划分集中导出

## server 定义

- 请根据后端服务 在 `server / server.ts`文件下 生成新的grpc客户端服务
- 在`server` 文件下 新建服务文件 命名为后端grpc服务名
- 在服务文件中 对grpc 方法使用 `grpcCatchError`进行封装 添加ts类型

- grpcCatchError 为错误捕捉 日志打印 统一后端返回的数据结构 返回 data code response

```js
const { data, response } = await findSkuLangPageList({
  pageSize: 10,
  pageNum: 1,
  ...filterData,
});
```

- loader中有多个 请求 请使用promis.all
- action 中有多种操作 请在手动submit 时传入\_action 进行switch判断

## 页面使用

- 所有的 初始化查询数据 都在`loader` 里进行， 增删改表单提交等操作 都在 `action`里进行
- 页面组件只做数据展示 不进行任何数据的操作
- 减少变量声明 统一使用解构语法

```js
export async function loader({ request, params }: LoaderArgs) {
  //单个接口直接使用
  const { data, response } = createCheckoutCounter({ paymentOrderNum: "22" });
  return { data, response };
  //多个接口需要解构重命名
  const [BackOfficeOrderList, AllDeviceName, ] = await Promise.all([
    getBackOfficeOrderList({
      pageSize: Number(pageSize) || 10,
      pageNum: Number(pageNum) || 1,
      ...tempFilterData,
    }),
    findAllDeviceName({}),
  ])
  return {
    orderList:BackOfficeOrderList.data,
    deviceName:AllDeviceName.data,
    error: BackOfficeOrderList.response || AllDeviceName.response||,
  };
}
```
