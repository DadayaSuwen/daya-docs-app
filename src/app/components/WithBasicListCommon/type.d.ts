// 列表渲染参数
export type MenuDataType = {
  title: string
  id: number
  onClick: () => void
}

export interface WithBasicListCommonProps {
  children: (props: { item: MenuDataType }) => React.ReactNode
  data: MenuDataType[]
  className?: string
  style?: React.CSSProperties
  option?: {
    width?: number | string
  }
}
