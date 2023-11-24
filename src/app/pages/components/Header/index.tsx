import React from 'react'
import './index.scss'
interface HeaderProps {
  renderData: {
    renderLeft: React.ReactNode
    renderCenter: React.ReactNode
    renderRight: React.ReactNode
  }
  className?: string
}

const Header = (props: HeaderProps) => {
  const { renderData, className } = props
  return (
    <section className={className}>
      <div>{renderData.renderLeft}</div>
      <div>{renderData.renderCenter}</div>
      <div>{renderData.renderRight}</div>
    </section>
  )
}

export default Header
