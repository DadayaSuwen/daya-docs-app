import React from 'react'
import './index.scss'
import Input from '@/app/components/BasicInput'
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
        <Input placeholder='Search' style={{ width: '20vw' }} size='large' />
      </div>
    ),
    renderRight: <div>fooder</div>
  }

  return (
    <main>
      <header className='header'>
        <Header className='flex justify-between items-center mx-28' renderData={headerList} />
      </header>
      <section className='mian'>
        <Menu
          option={{ width: '200px', gap: 10 }}
          data={[
            { title: '列表', id: 1 },
            { title: '列表', id: 2 },
            { title: '列表', id: 3 }
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
