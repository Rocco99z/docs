---
title: NewFilterForm 新平台筛选表单 新UI
group:
  title: 后台
toc: none
---

# NewFilterForm - 新平台筛选表单

<p>新平台筛选表单 新UI 点击更多查询出现弹框 外置input 通过externalInput 属性传递进行onchange和onkeydown实时查询   </p>
<p>更多查询弹框会再点击待loading消失 也就是接口返回成功200后自动关闭</p>
<p>配置了长度宽度自适应</p>

# 基本使用

<code src="./demos/demo1.tsx" ></code>

## API

| Name            | Description                                | Type             | Default |
| --------------- | ------------------------------------------ | ---------------- | ------- |
| externalInput   | 外部内容搜索项                             | InputProps       |         |
| children        | 更多查询弹框内容搜索项                     |                  |         |
| loading         | loading                                    |                  |         |
| onFinish        | 提交表单事件 value为内置和弹框所有表单内容 | (value) => void; |         |
| modalWidth      | 弹框宽度                                   |                  |
| modalLabelWidth | modaol筛选labelwidth                       |                  |
| onReset         | 重置事件                                   |                  |         |
| confirmResult   | 自动去除时间戳，如为200或0 关闭弹框        |                  |         |
