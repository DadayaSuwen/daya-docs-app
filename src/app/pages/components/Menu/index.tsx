import React from 'react'
import BasicButton from '@/app/components/BasicButton'
import WithListCommon from '@/app/components/WithBasicListCommon'
import './index.scss'

const Menu = () => {
  return (
    <div className='menu-container'>
      <WithListCommon
        className='menu-container-list'
        option={{ width: '200px' }}
        data={[{ title: '123' }, { title: '12233' }, { title: '12323' }]}
      >
        {({ item }) => <BasicButton shape='round'>{item.title}</BasicButton>}
      </WithListCommon>
    </div>
  )
}

export default Menu
