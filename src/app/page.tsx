import React from 'react'
import { ConfigProvider } from 'antd'
import App from '@/app/pages/index'
import theme from './theme/themeConfig'

export default function Home() {
  return (
    <ConfigProvider componentSize='middle' theme={theme}>
      <App />
    </ConfigProvider>
  )
}
