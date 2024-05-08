import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {

  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  }
  return (
    <>
        <div className='flex items-center gap-5 text-base font-roboto font-500 text-center menu-item'>
            <Link to='/home' className='underline decoration-slate-400'>Home</Link>
            <Link to='/contact' className='hover:underline decoration-slate-400'>Contact</Link>
            <Link to='/about' className='hover:underline decoration-slate-400'>About</Link>
            <Link to='/auth/signup' className='hover:underline decoration-slate-400'>Sign Up</Link>
        </div>
        <span onClick={toggleMenu}><RxHamburgerMenu className='menu' size={25}/></span>
        <div className={`flex justify-center items-center bg-slate-200 border-b-2 shadow-lg p-5 absolute w-full rounded-b-xl left-0 right-0 z-10  text-xl md:top-[110px] sm:top-[110px] max-[540px]:top-[60px] max-[480px]:text-base ${menuToggle ? 'menu-toggle':'hidden'}`}>
            <Link to='/home' className=' decoration-slate-400'>Home</Link>
            <Link to='/contact' className='hover:underline decoration-slate-400'>Contact</Link>
            <Link to='/about' className='hover:underline decoration-slate-400'>About</Link>
            <Link to='/auth/signup' className='hover:underline decoration-slate-400'>Sign Up</Link>
        </div>
    </>
  )
}

export default NavBar
