import React from 'react'
import BasicButton from '@/app/components/BasicButton'
import WithListCommon from '@/app/components/WithBasicListCommon'
import './index.scss'
import { MenuProps } from './type'

const Menu = (props: MenuProps) => {
  const { data, option } = props

  return (
    <div className='menu-container'>
      <WithListCommon className={`menu-container-list gap-${option?.gap}`} option={option} data={data}>
        {({ item }) => <BasicButton shape='round'>{item.title}</BasicButton>}
      </WithListCommon>
    </div>
  )
}

export default Menu
