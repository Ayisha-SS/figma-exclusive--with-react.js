import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useDataContext } from '../../context/Store';

function NavContent() {

const {search} = useDataContext();
const handleSearch = (e) => {
    search(e.target.value);
}

  return (
    <div className='flex items-center gap-3'>
        <div className='flex items-center relative search'>
            <input 
                type="text" 
                placeholder='What are you looking for? ' 
                className='bg-[#00000014] text-sm rounded py-2 pl-4 pr-16'
                onChange={handleSearch}
            />
            <CiSearch className='absolute right-[10px] size-6 '/>
        </div>
            <CiSearch className='size-6 '/>
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