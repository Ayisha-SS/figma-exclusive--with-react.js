import React, {  useState,useEffect } from 'react'
import { CiHeart } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/Store';

function ProductCard() {

    const count = 8;
    const [visibleItem, setVisibleItem ] = useState(count);

    const {data, selectedCategory, setRandomProduct } = useDataContext();

    const filteredProduct = selectedCategory === 'all' ? data : data.filter(item => item.type === selectedCategory)

    const selectRandomItems = () => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        setRandomProduct(selected);
    };

    useEffect(() => {
        selectRandomItems();
    },[data]);


    const handleViewMore = () => {
        setVisibleItem(prevCount => prevCount + 8)
    }

  return (
    <>
        <div className='py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-3 '>
                {filteredProduct.slice(0,visibleItem).map((item,index) => 
                
                <div key={index} className='flex flex-col justify-center mb-3'>
                    {/* <Link to={`/product/${item.type}?id=${item.id}`}> */}
                        <div className='w-[270px] h-[250px] bg-[#00000014] rounded flex items-center justify-center relative'>
                            <div className='w-[80%]'>
                                <img src={require(`../../../${item.image}`)} alt={item.name} />
                            </div>
                            <div className='flex flex-col gap-2 absolute top-3 right-5'>
                                <CiHeart className='bg-[#fff] rounded-full w-[30px] h-[30px] p-1'/>
                                <PiEyeLight className='bg-[#fff] rounded-full w-[30px] h-[30px] p-1'/>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4 '>
                        <Link to={`/product/${item.type}?id=${item.id}`}><h3 className='text-base leading-6 font-medium mb-1 hover:underline hover:text-blue-600'>{item.name}</h3></Link>
                            <div className='flex gap-3'>
                                <span className='text-base leading-6 font-medium text-[#DB4444]'>${item.price}</span>
                                <span className='flex items-center'>
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                </span>
                                <span>({item.quantity})</span>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
                )}

            </div>
            <hr />
            <div className='flex items-center justify-center mt-6'>
                <button className='py-4 px-12 text-[#FAFAFA] text-base font-medium leading-6 bg-[#DB4444] rounded' onClick={handleViewMore}>View More</button>
            </div>
        </div>
    </>
  )
}

export default ProductCard;