import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Spotlight() {

const data = [
    {
      id:1,
      category:"Phone",
      image:"assests/images/phone/wallpaper.jpg"
    },
    {
      id:2,
      category:"Laptop",
      image:"assests/images/laptop/wallpaper.jpg"
    },
    {
      id:3,
      category:"Computer",
      image:"assests/images/computer/wallpaper.jpg"
    },
    {
      id:4,
      category:"Smart Watch",
      image:"assests/images/watches/banner.jpg"
    },
    {
      id:5,
      category:"Keyboard",
      image:"assests/images/keyboard/banner.jpg"
    },
    {
      id:6,
      category:"Camera",
      image:"assests/images/camera/banner.jpg"
    },
    {
      id:7,
      category:"Shoe",
      image:"assests/images/shoe/banner.webp"
    },
    {
      id:8,
      category:"Headphone",
      image:"assests/images/headphones/headphones.jpg"
    },
];

const settings = {
  dots:true,
  infinite:true,
  speed:500,
  slidesToShow:1,
  slidesToScroll:1,
  autoplay:true,
}

  return (
    <div className='py-10 '>
      <Slider {...settings} >
        {data.map((item,index) => 
        // <Link to={`/product/${item.type}?id=${item.id}`}>
        <div key={index} className='w-full h-[453px] '>
          <div className='w-fit h-[fit]'>
            <img src={require(`../../../${item.image}`)} alt={item.category} className="w-full h-full object-cover"/>
          </div>
        </div>
        // </Link>
        )}
      </Slider>
    </div>
  )
}

export default Spotlight