import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <div className='flex items-center gap-5 text-base font-roboto font-500 text-center '>
            <Link to='/home' className='underline decoration-slate-400'>Home</Link>
            <Link to='/contact' className='hover:underline decoration-slate-400'>Contact</Link>
            <Link to='/about' className='hover:underline decoration-slate-400'>About</Link>
            <Link to='/auth/signup' className='hover:underline decoration-slate-400'>Sign Up</Link>
        </div>
    </>
  )
}

export default NavBar
