import React, { useState, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/Store';

function ProductCard() {
    const count = 8;
    const [visibleItem, setVisibleItem] = useState(count);

    const { data, selectedCategory, setRandomProduct } = useDataContext();

    const filteredProduct = selectedCategory === 'all' ? data : data.filter(item => item.type === selectedCategory);

    const selectRandomItems = () => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        setRandomProduct(selected);
    };
    useEffect(() => {

        selectRandomItems();
    }, [data]);

    const handleViewMore = () => {
        setVisibleItem(prevCount => prevCount + 8);
    };

    return (
        <>
            <div className='py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 min-[980px]:grid-cols-3 lg:grid-cols-4 gap-8 mb-3 '>
                    {filteredProduct.slice(0, visibleItem).map((item, index) => (
                        <div key={index} className='flex justify-center mb-3'>
                            <Link to={`/product/${item.type}?id=${item.id}`}>
                                <div className='h-[250px] px-5 bg-[#00000014] rounded flex items-center justify-center relative product-image '>
                                    <div className='p-10 max-[360px]:p-[3rem] max-[480px]:p-[6rem] max-[540px]:p-[8rem] lg:p-'>
                                        <img src={require(`../../../${item.image}`)} alt={item.name} />
                                        <button className="absolute -bottom-1 right-0 w-full bg-black text-white py-2 px-4 rounded opacity-90 product-button">
                                            <Link to={`/product/${item.type}?id=${item.id}`}> Add to Cart</Link>
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
                <hr />
                <div className='flex items-center justify-center mt-6'>
                    <button className='py-4 px-12 text-[#FAFAFA] text-base font-medium leading-6 bg-[#DB4444] rounded' onClick={handleViewMore}>View More</button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;

