// 列表渲染参数
export type MenuDataType = {
  title: string
  id: number
}

export interface WithBasicListCommonProps {
  children: (props: { item: MenuDataType }) => React.ReactNode
  data: MenuDataType[]
  className?: string
  option?: {
    width?: number | string
  }
}
