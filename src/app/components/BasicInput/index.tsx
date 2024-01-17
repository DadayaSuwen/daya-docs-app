'use client'

import React from 'react'
import { Input } from 'antd'
import './index.scss'
import { SearchOutlined } from '@ant-design/icons'

interface BasicButtonProps extends React.ComponentProps<typeof Input> {
  children?: React.ReactNode
}

function BasicInput(props: BasicButtonProps) {
  const { children } = props
  return (
    <Input {...props} className='basic-input rounded-full' suffix={<SearchOutlined />}>
      {children}
    </Input>
  )
}

export default BasicInput
