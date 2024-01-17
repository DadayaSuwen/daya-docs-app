'use client'

import React from 'react'
import BasicButton from '@/app/components/BasicButton'
import WithListCommon from '@/app/components/WithBasicListCommon'
import './index.scss'
import { MenuProps } from './type'

const Menu = (props: MenuProps) => {
  const { data, style } = props

  return (
    <div className='menu-container'>
      <WithListCommon className={`menu-container-list`} style={style} data={data}>
        {({ item }) => (
          <BasicButton onClick={item.onClick} key={item.title} shape='round'>
            {item.title}
          </BasicButton>
        )}
      </WithListCommon>
    </div>
  )
}

export default Menu
