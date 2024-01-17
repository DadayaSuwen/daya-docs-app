'use client'

import React from 'react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/lib/button'
import './index.scss'

interface BasicButtonProps extends ButtonProps {
  children: React.ReactNode
}

export default function BasicButton(props: BasicButtonProps) {
  const { children, className } = props
  return (
    <Button {...props} className={`${className} basic-button`}>
      {children}
    </Button>
  )
}
