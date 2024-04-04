import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Spotlight() {

const data = [
    {
      category:"Phone",
      image:"assests/images/phone/wallpaper.jpg"
    },
    {
      category:"Laptop",
      image:"assests/images/laptop/wallpaper.jpg"
    },
    {
      category:"Computer",
      image:"assests/images/computer/wallpaper.jpg"
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
        <div key={index} className='w-[950px] h-[456px] '>
            <img src={require(`../../../${item.image}`)} alt={item.category} />
        </div>
        )}
      </Slider>
    </div>
  )
}

export default Spotlight