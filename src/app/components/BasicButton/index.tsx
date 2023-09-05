import React from 'react'
import { Button } from 'antd'
import './index.scss'

interface BasicButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

function BasicButton(porps: BasicButtonProps) {
  const { children } = porps
  return (
    <Button {...porps} className='basic-button'>
      {children}
    </Button>
  )
}

export default BasicButton
