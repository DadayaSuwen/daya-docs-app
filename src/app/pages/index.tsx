'use client'

import React from 'react'
import './index.scss'
import Input from '@/app/components/BasicInput'
import { MenuOutlined } from '@ant-design/icons'
import Menu from './components/Menu'
import Header from './components/Header'
import Content from './components/Content'
import Image from 'next/image'

const DocsList = () => {
  const headerList = {
    renderLeft: (
      <div>
        <Image src='/assets/next.svg' alt='Logo' width={100} height={50} />
      </div>
    ),
    renderCenter: (
      <div>
        <Input placeholder='Search' style={{ width: '20vw', minWidth: '200px' }} size='large' />
      </div>
    ),
    renderRight: <MenuOutlined />
  }

  return (
    <main>
      <Header className='header flex justify-between items-center mx-28' renderData={headerList} />
      <section className='mian container flex justify-between mx-28'>
        <Menu
          style={{ maxHeight: '400px', width: '200px', gap: 20 }}
          data={[
            {
              title: '列表1',
              id: 1,
              onClick: () => {
                console.log(1)
              }
            },
            {
              title: '列表2',
              id: 2,
              onClick: () => {
                console.log(1)
              }
            },
            {
              title: '列表3',
              id: 3,
              onClick: () => {
                console.log(1)
              }
            }
          ]}
        />
        <div className='container'>
          <Content />
        </div>
      </section>
    </main>
  )
}

export default DocsList
