import './tailwind.css'
import './global.scss'
import type { Metadata } from 'next'
import React from 'react'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'daya-docs-app',
  description: 'daya-docs-app description'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh-CN' id='daya-docs-app'>
      <body>{children}</body>
    </html>
  )
}
