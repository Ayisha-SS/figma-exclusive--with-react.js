import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Spotlight() {

const data = [
    {
      id:1,
      type:"phone",
      image:"assests/images/phone/banner.jpg",
      name:"Samsung Galaxy S24 ultra SA AI",
      path:"/product/phone?id=9"
    },
    {
      id:2,
      type:"laptop",
      image:"assests/images/laptop/banner.jpg",
      name:"Apple M3 Macbook",
      path:"/product/laptop?id=6"
    },
    {
      id:3,
      type:"computer",
      image:"assests/images/computer/banner.jpg",
      name:"Asus ViVo Aio V222",
      path:"/product/computer?id=8"
    },
    {
      id:4,
      type:"smart Watch",
      image:"assests/images/watches/banner.jpg",
      name:"Apple Watch SE(2nd Gen)",
      path:"/product/smartwatch?id=5"
    },
    {
      id:5,
      type:"keyboard",
      image:"assests/images/keyboard/banner.jpg",
      name:"MX KEYS MINI",
      path:"/product/keyboard?id=12"
    },
    {
      id:6,
      type:"camera",
      image:"assests/images/camera/banner.jpg",
      name:"Meike 85mm wide Aperture Nikon Cameras",
      path:"/product/camera?id=4"
    },
    {
      id:7,
      type:"gaming",
      image:"assests/images/gaming/banner.jpeg",
      name:"Sony DualSense Wireless Controller white",
      path:"/product/gaming?id=2"
    },
    {
      id:8,
      type:"headphone",
      image:"assests/images/headphones/banner.jpg",
      name:"boAt Rockerz 450 Bluetooth with Mic",
      path:"/product/headphone?id=3"
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
        <div key={index} className='w-full h-[453px] rounded relative spotlight-image '>
          <div className='w-fit h-[fit] rounded'>
            <img src={require(`../../../${item.image}`)} alt={item.category} className="w-full full object-cover"/>
          </div>
          <div className='spotlight-content'>
            <h3 className='text-4xl font-black md:text-2xl max-[640px]:text-2xl min-[980px]:text-3xl'>{item.name}</h3>
            <span className='flex gap-3 mt-2'>
              <h4 className='text-3xl font-semibold md:text-xl max-[540px]:text-base max-[980px]:text-2xl'>Buy On</h4>
              <Link to={item.path} >
                <button className='text-3xl font-normal underline  max-[540px]:text-base md:text-xl max-[980px]:text-2xl'>Shop now</button>
              </Link>
              </span>

          </div>
        </div>
        )}
      </Slider>
    </div>
  )
}

export default Spotlight