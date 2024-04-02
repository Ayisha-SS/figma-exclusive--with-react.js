import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Category() {

const data = [
    {
        name:"All",
        image:"assests/images/all.png"
    },
    {
        name:"Phone",
        image:"assests/images/phone/Category-CellPhone.png"
    },
    {
        name:"Computers",
        image:"assests/images/computer/Category-Computer.png"
    },
    {
        name:"SmartWatch",
        image:"assests/images/watches/Category-SmartWatch.png"
    },
    {
        name:"Camera",
        image:"assests/images/camera/Category-Camera.jpg"
    },
    {
        name:"HeadPhones",
        image:"assests/images/headphones/Category-Headphone.png"
    },
    {
        name:"Gaming",
        image:"assests/images/gaming/Category-Gamepad.png"
    },
    {
        name:"Laptop",
        image:"assests/images/laptop/Category-Laptop.jpg"
    },
    {
        name:"Keyboard",
        image:"assests/images/keyboard/Category-Keyboard.png"
    },
    
];

const [ slide, setSlide ] = useState(0);
const handleNext = () => {
    if(slide < data.length - 6) {
        setSlide(slide + 2);
    }
};

const handlePrevious = () => {
    if(slide > 0) {
        setSlide(slide - 2);
    }
};

  return (
    <>
        <div className='pb-10'>
            <div className='mb-20'>
                <div className='flex items-center mb-5'>
                    <svg width={40} height={40}>
                        <rect width="20" height="40"  rx="4" ry="4" fill="#DB4444" />
                    </svg>
                    <h5 className='text-base font-semibold text-[#DB4444] leading-5'>Categories</h5>
                </div>
                <div className='flex justify-between'>
                    <h4 className='text-[36px] font-semibold leading-10'>Browse By Category</h4>
                    <div className='flex gap-2'>
                    <FaArrowLeft 
                        className='bg-[#00000014] rounded-full w-[35px] h-[35px] p-2'
                        onClick={handlePrevious}
                        disabled={slide === 0}
                    />
                    <FaArrowRight 
                        className='bg-[#00000014] rounded-full p-2 w-[35px] h-[35px]'
                        onClick={handleNext}
                    />
                    </div>
                </div>
            </div>
            <div className='flex gap-7'>

                {data.slice(slide, slide + 6).map((product, index) => (
                <div className='border border-[#000] flex flex-col p-16 rounded '>
                    <div key={index} className=' mb-3'>
                        <img src={require(`../../../${product.image}`)} alt={product.name} />
                    </div>
                    <h5 className='text-base text-center font-semibold leading-6 w-[20%]'>
                        <a href="#">{product.name}</a>
                    </h5>
                </div>
                ))}  
            </div>
        </div>
    </>
  )
}

export default Category