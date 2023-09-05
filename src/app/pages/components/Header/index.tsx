import React from 'react'
import './index.scss'
import _ from 'lodash'
interface HeaderProps {
  renderData: {
    renderLeft: React.ReactNode
    renderCenter: React.ReactNode
    renderRight: React.ReactNode
  }
}

const Herder = (props: HeaderProps) => {
  const { renderData } = props
  return (
    <>
      <div>{renderData.renderLeft}</div>
      <div>{renderData.renderCenter}</div>
      <div>{renderData.renderRight}</div>
    </>
  )
}

export default Herder
