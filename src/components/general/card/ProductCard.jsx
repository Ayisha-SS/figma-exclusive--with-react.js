import React, {  useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
// import DataContext from '../../context/Store';
import { useDataContext } from '../../context/Store';

function ProductCard() {

    const count = 8;
    const [visibleItem, setVisibleItem ] = useState(count);

    // const { data } = useContext(DataContext);
    const {data, selectedCategory } = useDataContext();

    const filteredProduct = selectedCategory === 'all' ? data : data.filter(item => item.type === selectedCategory)

    const handleViewMore = () => {
        setVisibleItem(prevCount => prevCount + 8)
    }

  return (
    <>
        <div className='py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-3 '>
                {/* {data.slice(0, visibleItem).map((item,index) =>  */}
                {filteredProduct.slice(0, visibleItem).map((item,index) => 
                
                <div key={index} className='flex flex-col  justify-center mb-3'>
                    <Link to={`/product/${item.type}?id=${item.id}`}>
                        <div className='w-[270px] h-[250px] bg-[#00000014] rounded flex items-center justify-center relative'>
                            <div className='w-[80%]'>
                                <img src={require(`../../../${item.image}`)} alt={item.name} />
                            </div>
                            <div className='flex flex-col gap-2 absolute top-3 right-5'>
                                <CiHeart className='bg-[#fff] rounded-full w-[30px] h-[30px] p-1'/>
                                <PiEyeLight className='bg-[#fff] rounded-full w-[30px] h-[30px] p-1'/>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4 w-[50%]'>
                            <h3 className='text-base leading-6 font-medium mb-1'>{item.name}</h3>
                            <div className='flex gap-3'>
                                <span className='text-base leading-6 font-medium text-[#DB4444]'>${item.price}</span>
                                <span>*****</span>
                                <span>({item.quantity})</span>
                            </div>
                        </div>
                    </Link>
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