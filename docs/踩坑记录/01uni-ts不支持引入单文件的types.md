# uni TS 不支持引入单文件的types

在写简历项目时

以前是

```ts
export interface IRowContent {
  type?: string
  isWrap?: boolean
  label: string
  text: string
  link?: boolean
  align?: string
  labelWidth?: number
  labelBold?: boolean
  isTitle?: boolean
  textWidth?: number
}
```

然后 .vue 里导入

```ts
withDefaults(defineProps<IRowContent>(), {
  // ...
})
```

但是这么报错，所以就把 types 删掉了，直接写。
虽然不报错了，总感觉有坑

## 报错

```ts
import type { IRowContent } from './types'
// interface IRowContent {
//   type?: string
//   isWrap?: boolean
//   label: string
//   text: string
//   link?: boolean
//   align?: string
//   labelWidth?: number
//   labelBold?: boolean
//   isTitle?: boolean
//   textWidth?: number
// }

withDefaults(defineProps<IRowContent>(), {
  type: 'labelText',
  link: false,
  align: 'left',
  labelBold: false,
  isWrap: false,
  isTitle: false,
  labelWidth: 100,
})
```

## 放在同一个文件下就OK

```ts
withDefaults(defineProps<{
  type?: string
  isWrap?: boolean
  label: string
  text: string
  link?: boolean
  align?: string
  labelWidth?: number
  labelBold?: boolean
  isTitle?: boolean
  textWidth?: number
}>(), {
  type: 'labelText',
  link: false,
  align: 'left',
  labelBold: false,
  isWrap: false,
  isTitle: false,
  labelWidth: 100
})

// 或者

interface IRowContent {
  type?: string
  isWrap?: boolean
  label: string
  text: string
  link?: boolean
  align?: string
  labelWidth?: number
  labelBold?: boolean
  isTitle?: boolean
  textWidth?: number
}

withDefaults(defineProps<IRowContent>(), {
  type: 'labelText',
  link: false,
  align: 'left',
  labelBold: false,
  isWrap: false,
  isTitle: false,
  labelWidth: 100,
})
```


