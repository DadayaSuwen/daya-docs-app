'use client'

import React from 'react'
import _ from 'lodash'
import { WithBasicListCommonProps } from './type'

const WithBasicListCommon = (props: WithBasicListCommonProps) => {
  const { children, data, style, className } = props

  return (
    <div className={className} style={style}>
      {data.map(item => {
        return children({ item })
      })}
    </div>
  )
}

export default WithBasicListCommon
