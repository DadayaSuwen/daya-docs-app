// Menu 组件的类型定义文件
import { WithBasicListCommonProps, MenuDataType } from '@/app/components/WithBasicListCommon/type'

export interface MenuProps {
  data: MenuDataType[]
  className?: string
  style?: React.CSSProperties
}
