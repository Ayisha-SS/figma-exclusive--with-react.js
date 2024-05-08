import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useDataContext } from '../../context/Store';

function NavContent() {

const {search} = useDataContext();
const handleSearch = (e) => {
    search(e.target.value);
}

const [searchToggle, setSearchToggle] = useState(false);

const toggleSearch = () => {
    setSearchToggle(!searchToggle);
}

  return (
    <div className='flex items-center gap-3'>    
        
    { searchToggle ? (
        <div className={`flex items-center relative ${searchToggle ? 'search': ''}`}>
        <input 
            type="text" 
            placeholder='What are you looking for? ' 
            className={`bg-[#00000014] text-sm rounded py-2 pl-4 pr-16 max-[480px]:pr-10 ${searchToggle ? 'flex':'hidden'}`}
            onChange={handleSearch}
        />
        <CiSearch className='absolute right-[10px] size-6 ' onClick={toggleSearch}/>
        </div>
    ) : (
        <span> 
            <CiSearch 
            className='size-6 cursor-pointer search-icon '
            onClick={toggleSearch} />
        </span>
    )}
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