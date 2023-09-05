import React from 'react'
import _ from 'lodash'

interface WithBasicListCommonProps<T> {
  children: (props: { item: T }) => React.ReactNode
  data: T[]
  className?: string
  option?: {
    width?: number | string
  }
}

const optionDefault = {
  width: 100,
  className: ''
}

const WithBasicListCommon = <T,>(props: WithBasicListCommonProps<T>) => {
  const { children, data, option = optionDefault, className } = props
  const { width } = option

  return (
    <div className={className} style={{ width }}>
      {data.map(item => {
        return children({ item })
      })}
    </div>
  )
}

export default WithBasicListCommon
