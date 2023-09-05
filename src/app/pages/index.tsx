import React from 'react'
import './index.scss'
import Menu from './components/Menu'
import Herder from './components/Header'
import Content from './components/Content'
const DocsList = () => {
  return (
    <main>
      <header>
        <Herder />
      </header>
      <section className='container'>
        <Menu />
        <Content />
      </section>
    </main>
  )
}

export default DocsList
