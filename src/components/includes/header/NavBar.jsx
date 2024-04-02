import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex items-center justify-between'>
<<<<<<< HEAD
        <h1 className=' w-50%'>
=======
        <h1>
>>>>>>> c0c41f5bc970ff3c3fe2ffd36bd4dec30d84f96b
            <Link to='/'>
                <img src="src\assests\images\Logo.png" alt="Logo" />
            </Link>
        </h1>
        <div className='flex items-center gap-5 text-base font-roboto font-500 text-center'>
            <Link to='home' className='underline decoration-slate-400'>Home</Link>
            <Link to='contact' className='hover:underline decoration-slate-400'>Contact</Link>
            <Link to='about' className='hover:underline decoration-slate-400'>About</Link>
            <Link to='auth/signup' className='hover:underline decoration-slate-400'>Sign Up</Link>
        </div>
    </div>
  )
}

export default NavBar