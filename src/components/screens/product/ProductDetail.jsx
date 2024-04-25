import React, { useState,useEffect } from 'react'
import { CiHeart, CiStar } from "react-icons/ci";
import { useDataContext } from '../../context/Store';
import { useLocation } from 'react-router-dom'; 
import { PiEyeLight } from "react-icons/pi";
import { Link } from 'react-router-dom';


function ProductDetail() {

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const { data, randomItem, setRandomItem } = useDataContext();

    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const [ count, setCount ] = useState(1);

    const decreaseCount = () => {
        if(count > 1){
            setCount(count - 1);
        }
    };

    const increaseCount = () => {
            setCount(count + 1);
    };
    
   
    useEffect(() => {
        if (data) {
          const filteredItems = data.filter((item) => item.id !== parseInt(id));
          const randomItems = filteredItems.slice(0, 4);
          setRandomItem(randomItems);
        }
      }, [data, id]);

    
      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

        const product = data.find((item) => item.id === parseInt(id));
  return (
    <>
        <div className='py-10'>
            <div className='wrapper'>
                <div>
                    <h4 className='text-sm leading-5 font-normal text-[#000]'>Account / { product.type} / <span className='text-[#000]'>{product.name}</span></h4>
                </div>
                <div className='flex py-10 mb-12'>
                    <div className='flex '>
                        <div className='flex flex-col gap-4 items-center justify-center'>
                            {[product.image, product.img2, product.img3, product.img4].map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-[#00000014] w-[170px] h-[138px] rounded cursor-pointer flex items-center justify-center"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <div className='w-[50%]'>
                                        <img src={require(`../../../${image}`)} alt={`Product Image ${index}`} />
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='bg-[#00000014] rounded flex items-center justify-center w-[500px] h-[600px] ml-6  xl:h-[500px]'>
                            <div className='w-[90%]'>
                                <img src={require(`../../../${selectedImage || product.image}`)} alt={product.name} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col px-12 w-[50%]'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-2xl leading-6 font-semibold'>{product.name}</h3>
                            <div className='flex gap-4 items-center'>
                            <span className='flex items-center'>
                                <CiStar color='yellow'/>
                                <CiStar color='yellow'/>
                                <CiStar color='yellow'/>
                                <CiStar />
                                <CiStar />
                            </span>
                                <span className='text-sm leading-5 font-normal opacity-[50%]'>(120 Reviews)</span>
                                <span className=' opacity-[50%]'>|</span>
                                <span className='text-sm leading-5 font-normal  text-black'>In Stock</span>
                            </div>
                            <h4 className='text-2xl leading-6 font-normal '>$ {product.price * count}</h4>
                            <span className='text-sm leading-5 font-normal mb-4 text-[#000] '>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</span>
                        </div>
                        <hr className='w-[80%]'/>
                        <div className='flex flex-col gap-8 mt-4'>
                            <div className='flex gap-6 items-center'>
                                <span className='text-xl leading-5 font-normal'>Size:</span>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>XS</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>S</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>M</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>L</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>XL</button>
                            </div>
                            <div className='flex gap-4 mb-3'>
                                <div className='flex items-center'>
                                    <div className='px-4 py-2 rounded-l border border-[#5e5d5d] cursor-pointer' onClick={decreaseCount}>-</div>
                                    <div className='px-8 py-2 border border-[#5e5d5d] '>{count}</div>
                                    <div className='px-4 py-2 rounded-r border border-[#5e5d5d] cursor-pointer' onClick={increaseCount}>+</div>
                                </div>
                                <div>
                                    <button className='bg-[#DB4444] text-[#FAFAFA] py-[10px] px-[48px] rounded'>Buy Now</button>
                                </div>
                                <span className='border rounded w-10 h-10 flex items-center justify-center border-[#000]'>
                                    <CiHeart size={20}/>
                                </span>
                            </div>
                            {/* <div className='w-[340px] h-[180px]'>
                                <img src={require(`../../../assests/images/Frame 911.png`)} alt="Service" />
                            </div> */}

                            <div className='border-[1px] border-black rounded w-[70%] '>
                                <div className='flex p-4 gap-2 border-b-[1px] border-b-black'>
                                    <div>
                                        <img src={require(`../../../assests/images/icon-delivery.png`)} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-base font-medium leading-6'>Free Delivery</p>
                                        <a className='text-xs font-medium underline xl:whitespace-nowrap'>Enter your postal code for Delivery Availability</a>
                                    </div>
                                </div>
                                <div className='flex p-4 gap-2'>
                                    <div>
                                        <img src={require(`../../../assests/images/Icon-return.png`)} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-base font-medium leading-6'>Return Delivery</p>
                                        <span className='text-xs font-medium '>Free 30 Days Delivery Returns.<a className='underline'>Details</a> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='pb-10'>
                    <div className='flex items-center'>
                        <svg width={40} height={40}>
                            <rect width="20" height="40"  rx="4" ry="4" fill="#DB4444" />
                        </svg>
                        <h5 className='text-base font-semibold text-[#DB4444] leading-5'>Related Items</h5>
                    </div>
                    <div className='py-10'>  
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-3'>
                        { randomItem.map((item,index)=>(
                        <div key={index} className='flex justify-center mb-3'>
                            <Link to={`/product/${item.type}?id=${item.id}`}>
                                <div className='w-[270px] h-[250px] bg-[#00000014] rounded flex items-center justify-center relative product-image'>
                                    <div className='w-[80%]'>
                                        <img src={require(`../../../${item.image}`)} alt={item.name} />
                                            <button className="absolute -bottom-1 right-0 w-full bg-black text-white py-2 px-4 rounded opacity-90 product-button">
                                                Add to Cart
                                            </button>                
                                    </div>
                                    <div className='flex flex-col gap-2 absolute top-3 right-5'>
                                        <CiHeart className='bg-[#fff] rounded-full w-[30px] h-[30px] p-1' />
                                        <PiEyeLight className='bg-[#fff] rounded-full w-[30px] h-[30px] p-1' />
                                    </div>
                                </div>
                                <div className='flex flex-col mt-4 '>
                                    <h3 className='text-base leading-6 font-medium mb-1 hover:underline hover:text-blue-600'>{item.name}</h3>
                                    <div className='flex gap-3'>
                                        <span className='text-base leading-6 font-medium text-[#DB4444]'>${item.price}</span>
                                        <span className='flex items-center'>
                                            <CiStar color='yellow' />
                                            <CiStar color='yellow' />
                                            <CiStar color='yellow' />
                                            <CiStar />
                                            <CiStar />
                                        </span>
                                        <span>({item.quantity})</span>
                                    </div>
                                </div>
                            </Link>
                        </div>     
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail;