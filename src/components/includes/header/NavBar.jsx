import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  return (
    <>
        <div className='flex items-center gap-5 text-base font-roboto font-500 text-center menu-item'>
            <Link to='/home' className='underline decoration-slate-400'>Home</Link>
            <Link to='/contact' className='hover:underline decoration-slate-400'>Contact</Link>
            <Link to='/about' className='hover:underline decoration-slate-400'>About</Link>
            <Link to='/auth/signup' className='hover:underline decoration-slate-400'>Sign Up</Link>
        </div>
        <span><RxHamburgerMenu className='menu' size={25}/></span>
        <div className='flex bg-slate-100 p-10 absolute top-[120px] rounded-b-xl right-0 left-0 z-10 justify-between text-xl menu-toggle'>
            <Link to='/home' className=' decoration-slate-400'>Home</Link>
            <Link to='/contact' className='hover:underline decoration-slate-400'>Contact</Link>
            <Link to='/about' className='hover:underline decoration-slate-400'>About</Link>
            <Link to='/auth/signup' className='hover:underline decoration-slate-400'>Sign Up</Link>
        </div>
    </>
  )
}

export default NavBar
