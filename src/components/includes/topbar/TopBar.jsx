import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

function TopBar() {
  return (
    <div className='bg-black font-roboto max-[540px]:hidden'>
        <div className='flex items-center py-1 wrapper text-center justify-around'>
          <span className='text-white flex items-center gap-2'>
            <h3 className='text-sm capitalize sm:text-[10px]'>Summer Sale for all swim suits and free express delivery - OFF 50%</h3>
            <a href="#" className='underline sm:text-sm'>ShopNow</a>
          </span>
            <div className=' p-2'>
                <span className='text-sm text-white flex gap-1 items-center '>English <FaAngleDown/></span>
            </div>
        </div>
    </div>
  )
}

export default TopBar
