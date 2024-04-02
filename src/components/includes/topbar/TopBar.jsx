import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

function TopBar() {
  return (
    <div className='bg-black font-roboto'>
<<<<<<< HEAD
        <div className='py-1 wrapper flex justify-around items-center'>
            <h3 className='text-sm text-white capitalize text-center'>Summer Sale for all swim suits and free express delivery - OFF 50%</h3>
=======
        <div className='flex justify-between items-center py-1 wrapper text-center'>
            <h3 className='text-sm text-white capitalize'>Summer Sale for all swim suits and free express delivery - OFF 50%</h3>
>>>>>>> c0c41f5bc970ff3c3fe2ffd36bd4dec30d84f96b
            <div className=' p-2'>
                <span className='text-sm text-white flex gap-1 items-center'>English <FaAngleDown/></span>
            </div>
        </div>

    </div>
  )
}

export default TopBar