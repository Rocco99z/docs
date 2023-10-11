---
title: 状态管理
order: 5
---

#### 状态管理

remix 的数据流全部通过 loader 和 action 以及路由的方式,并不需要 redux，mobx 这种状态管理工具,所有的数据都是通过 loader 到服务端去取也不用考虑持久化数据的问题，所以数据传递的问题通过内置的 api 即可解决。严格按照一下数据流执行。

##### 路由传参

简单少量的参数 可直接通过 `$`形式 路由传参 在 loader 的 params 里获取

#### 嵌套路由传参

1、使用 loader 数据 : 通过 `const data = useRouteLoaderData("routes/home")` 传入对应路由的 key 获取
1.1、也可以使用 [useMatches](https://remix.run/docs/en/1.15.0/hooks/use-matches) 获取当前路由所有夫路由的数据

2、使用 上一个页面 action 接口返回的数据 : 少量数据可直接路由传参 **非嵌套路由也使用此方法**

```js
夫路由页面
export async function action({ request, params }: ActionArgs) {
.......
  return redirect(`/pay?payId=${payId}&price=${price}&payEndTime=${payEndTime}&a=${a}`)
}
子路由页面
export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url)
  const payId = url.searchParams.get("payId")
}
```

3、使用夫路由的 客户端状态: 通过 [useOutletContext](https://reactrouter.com/en/6.10.0/hooks/use-outlet-context)

4、更多情况 可 [查看](https://sergiodxa.com/articles/bubble-up-data-on-remix-routes)

#### 非嵌套路由传参

- 少量数据 用过 `$`声明路由传参 通过 redirect 或 navgiate 传递
- 大量数据通过 `嵌套路由传参：2` 的方法
