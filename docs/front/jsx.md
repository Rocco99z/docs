---
title: 代码规范
order: 7
---

#### 基本规则

- 所有项目全部使用 **函数式组件**
- 全部使用 es6 以上语法 统一使用声明式
- 当数据可能为空时请用 `可选链操作符(?.)` 避免报错崩溃现象
- 页面 hooks 置顶，`同逻辑的操作`写在一起按区域划分 ，不同区域中间用注释或换行隔开，
- 多个同关联状态使用一个 **useState**

```js
export default function Pay() {
  const { payData } = useLoaderData<typeof loader>() || {}
  const navigate = useNavigate()

  //分页
  const [page, setPage] = useState({ pageNum: 1, pageSize: 10 })
  const handleTablePageChange =()=>{}
  useEffect()...

  //表单
  const [form, setForm] = useState({ a: 1, b: 10 })
  const handleFormSubmit =()=>{}
  useEffect()...
}

```

- 所有的**非空判断或者类型判断**，统一使用<kbd>lodash</kbd>、日期时间处理统一使用<kbd>moment</kbd>、数字处理使用<kbd>numeral</kbd>
- 条件判断和循环最多嵌套三层, **不可两个三元运算符嵌套**
- jsx 单条件使用 `&&`

```js
{a ? <div>2</div>:''}    ❌
{a && <div>2</div>}    ✅

```
