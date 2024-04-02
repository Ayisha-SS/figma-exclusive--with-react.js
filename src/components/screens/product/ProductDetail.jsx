import React, { useContext } from 'react'
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import DataContext from '../../context/Store';

function ProductDetail() {

    const { id } = useParams();
    const { data } = useContext(DataContext);
    const product = data.find(item => item.id === parseInt(id));

  return (
    <>
        <div className='py-20'>
            <div className='wrapper'>
                <div>
                    <h4 className='text-sm leading-5 font-normal text-[#000] '>Account / {product.type} / <span className='text-[#000]'>Zerbonics</span></h4>
                </div>
                <div className='flex py-20 mb-12'>
                    <div className='flex items-center'>
                        <div className='flex flex-col gap-4'>
                            <div className='bg-[#00000014] w-[30%] rounded'>
                                <img src={require(`../../../assests/images/gaming/zerbo-1-removebg-preview.png`)} alt="Zerbo-1" />
                            </div>
                            <div className='bg-[#00000014] w-[30%] rounded'>
                                <img src={require(`../../../assests/images/gaming/zerbo-3.jpg`)} alt="Zerbo-3" />
                            </div>
                            <div className='bg-[#00000014] w-[30%] rounded'>
                                <img src={require(`../../../assests/images/gaming/zerbo-2.jpg`)} alt="Zerbo-2" />
                            </div>
                            <div className='bg-[#00000014] w-[30%] rounded'>
                                <img src={require(`../../../assests/images/gaming/zerbo-4.jpg`)} alt="Zerbo-4" />
                            </div>
                        </div>
                        <div className='bg-[#00000014] rounded px-12 py-28 w-fit'>
                            <div className=''>
                                <img src={require(`../../../assests/images/gaming/zerbo-1-removebg-preview.png`)} alt="Zerbo-1" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col ml-12'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-2xl leading-6 font-semibold'>Zerbonics</h3>
                            <div className='flex gap-4 items-center'>
                                <span>*****</span>
                                <span className='text-sm leading-5 font-normal opacity-[50%]'>(120 Reviews)</span>
                                <span className='border  opacity-[50%]'>|</span>
                                <span className='text-sm leading-5 font-normal opacity-[50%] text-[#00ff66]'>In Stock</span>
                            </div>
                            <h4 className='text-2xl leading-6 font-normal '>$2299</h4>
                            <span className='text-sm leading-5 font-normal mb-4 text-[#000] w-[70%]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</span>
                        </div>
                        <hr />
                        <div className='flex flex-col gap-4 mt-4'>
                            <div className='flex gap-6 items-center'>
                                <span className='text-xl leading-5 font-normal'>Size:</span>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>XS</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>S</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>M</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>L</button>
                                <button className='text-sm leading-5 font-medium border border-[#000] rounded w-8 h-8'>XL</button>
                            </div>
                            <div className='flex gap-4 mb-3'>
                                <div>
                                    <button className='w-10 h-10 rounded-l border border-[#5e5d5d]'>-</button>
                                    <span className='px-8 py-2 border border-[#5e5d5d] '>2</span>
                                    <button className='w-10 h-10 rounded-r border border-[#5e5d5d]'>+</button>
                                </div>
                                <div>
                                    <button className='bg-[#DB4444] text-[#FAFAFA] py-[10px] px-[48px] rounded'>Buy Now</button>
                                </div>
                                <span className='border rounded w-10 h-10 flex items-center justify-center border-[#000]'>
                                    <CiHeart size={20}/>
                                </span>
                            </div>
                            <div>
                                <img src={require(`../../../assests/images/Frame 911.png`)} alt="Service" />
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

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail;