import React from 'react'
import _ from 'lodash'
import { WithBasicListCommonProps } from './type'

const optionDefault = {
  width: 100,
  className: ''
}

const WithBasicListCommon = (props: WithBasicListCommonProps) => {
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
