import React from 'react'
import { sideBarData } from '../assets/const'
import SubMenu from './SubMenu'
function FilterSideBar() {
  return (
    <div className='filter-sidebar'>
      <div className='filter-sidebar__list'>
        {sideBarData.map((item) => {
          return (
            <div className='filter-sidebar__list-item' key={item.id}>
              <SubMenu item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterSideBar
