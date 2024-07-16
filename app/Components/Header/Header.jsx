import React from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'

const Header = () => {
  return (
    <div className='sticky z-50 top-0 left-0 w-full bg-white'>
        <Nav1/>
        <Nav2/>
    </div>
  )
}

export default Header