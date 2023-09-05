import React from 'react'
import './index.scss'
import Menu from './components/Menu'
import Herder from './components/Header'
import Content from './components/Content'
const DocsList = () => {
  const headerList = {
    renderLeft: <div>left</div>,
    renderCenter: <div>center</div>,
    renderRight: <div>fooder</div>
  }

  return (
    <main>
      <header className='header'>
        <Herder renderData={headerList} />
      </header>
      <section className='mian'>
        <Menu />
        <div className='container'>
          <Content />
        </div>
      </section>
    </main>
  )
}

export default DocsList
