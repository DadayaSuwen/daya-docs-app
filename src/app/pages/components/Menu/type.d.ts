// Menu 组件的类型定义文件
import { WithBasicListCommonProps, MenuDataType } from '@/app/components/WithBasicListCommon/type'

export interface MenuProps {
  data: MenuDataType[]
  className?: string
  option?: {
    // 列表宽度
    width?: number | string
    // 列表上下间距
    gap?: number
  }
}
