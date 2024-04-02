import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function NavContent() {
  return (
    <div className='flex items-center gap-3'>
        <div className=' flex items-center '>
            <input type="text" placeholder='What are you looking for?' className='bg-[#00000014] text-sm rounded py-2 pl-4 pr-16'/>
            <CiSearch className='box-content absolute right-[210px]  size-6'/>
        </div>
        <div>
            <span>
                <CiHeart className='size-7'/>
            </span>
        </div>
        <div>
            <span>
                <IoCartOutline className='size-7'/>
            </span>
        </div>
    </div>
  )
}

export default NavContent