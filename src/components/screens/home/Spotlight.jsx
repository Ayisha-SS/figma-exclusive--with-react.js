import React from 'react'

function Spotlight() {

const data = [
    {
      category:"Phone",
      image:"assests/images/phone/banner.avif"
    },
    {
      category:"Laptop",
      image:"assests/images/laptop/images.jpg"
    },
    {
      category:"Computer",
      image:"assests/images/computer/banner.webp"
    },
    {
      category:"Smart Watch",
      image:"assests/images/watches/banner.jpg"
    },
    {
      category:"Keyboard",
      image:"assests/images/keyboard/banner.jpg"
    },
    {
      category:"Camera",
      image:"assests/images/camera/banner.jpg"
    },
    {
      category:"Shoe",
      image:"assests/images/shoe/banner.webp"
    },
    {
      category:"Headphone",
      image:"assests/images/headphones/banner.avif"
    },
]

  return (
    <div className='py-10'>
        {data.map((item,index) => 
        <div key={index} className='w-[50%]'>
            <img src={require(`../../../${item.image}`)} alt={item.category} />
        </div>
        )}
    </div>
  )
}

export default Spotlight