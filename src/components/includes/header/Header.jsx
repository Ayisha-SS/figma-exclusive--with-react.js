import React from 'react'
import NavBar from './NavBar'
import NavContent from './NavContent'
import NavLogo from './NavLogo'

function Header() {
  return (
    <div className='bg-white border-b py-5'>
        <div className='wrapper flex items-center justify-between'>
            <NavLogo/>
            <NavBar/>
            <NavContent/>
        </div>
    </div>
  )
}

export default Header