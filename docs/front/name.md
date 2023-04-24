---
title: 命名规范
order: 3
---

#### 命名规范

- 所有命名统一采用`语义化方式`，严禁使用拼音与英文混合的方式，使用中文译英文命名，常用名词可以缩写 error -> err。
- 不可使用数字命名 **eg：resData1 、resData2 ❌**

#### 变量命名

- 变量、常量命名采用 `小驼峰`的命名方式。
- 复杂变量以 `名词+类型` 的命名方式。eg:`menuList`。
- boolean 类型用 `isShow` `isLoading` 功能+组件 命名 **eg:ishowAddModal 、isLoadingTable**
- 接口请求手动 submit 数据用 `req` 命名 页面多个请求 用`grpc方法名 + req`
- grpc 客户端命名 遵循 proto 文件， proto 文件是 `PaymentService` 对应命名 `paymentClient`

#### 文件命名

- 除 compoonets 外文件命名全部采用小写按 `-` 中线分割 包括`文件夹` **eg:order-detail.tsx 、use-any.ts、order-detail.css**
- **confirmorder.tsx 、confirmOrder.tsx ❌**
- 超过 3 个参数以上路由传参只写一个 `$` ,页面使用 `params['*']` 引用
- compoonets 文件下 组件命名使用`大驼峰`方式,如果命名与组件库名称重复 添加 My 前缀 **eg:MyNavBar**
- 移动端弹出层 统一用 `popup` ,web 弹框统一用 `modal` **eg: home.popup.tsx 、order.modal.tsx**

#### 方法命名

- `handle + 名称(业务名/组件名）+ 动词` ,`小驼峰`方式 **eg:handlePageChange 、handleTabsChange**
- 调用接口事件 省略动词 使用业务名命名 **eg:handlePay**
- 跳转 handleTo 开头，后面接跳转到的路由名
- 自定义组件事件命名 以 `on` 开头

#### 组件命名

- 自定义组件采用 `大驼峰` 方式
- 页面路由组件 `大驼峰` 方式，名称与路由文件名相同

#### TS 命名

- TS 类型统一使用`大驼峰`形式，自定义组件使用\*\*\*\*Props **eg：FormBoxProps**
- 定义组件 类型统一用 `interface` 写在组件文件内即可 用 React.FC< \*\*\*Props>=（props:\*\*\*Props）关联
- 前端自使用的枚举 定义在`type.d` 使用时不需要解构
- 后端枚举 直接从 proto 编译的 ts 文件直接引入使用 如订单状态 支付状态等
