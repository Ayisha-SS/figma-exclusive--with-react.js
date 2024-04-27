import React from 'react'

function Services() {
  return (
    <>
        <div className='py-20 px-20 wrapper md:pt-10'>
            <div className='flex justify-center items-center gap-20 mb- sm:gap-4 md:gap-6 min-[980px]:gap-8 lg:gap-10'>
                <div className='flex flex-col gap-6 items-center xl:whitespace-nowrap '>
                    <div className='w-[50%] md:w-[40%]'>
                        <img src={require(`../../../assests/images/Services (1).png`)} alt="Service" />
                    </div>
                    <div>
                        <h3 className='text-xl leading-7 font-semibold uppercase sm:text-sm md:text-base lg:whitespace-nowrap'>Free and fast delivery</h3>
                        <h5 className='text-center sm:text-xs md:text-[14px] max-[980px]:whitespace-nowrap lg:whitespace-nowrap'>Free delivery for all orders over $140</h5>
                    </div>
                </div>
                <div className='flex flex-col gap-6 items-center xl:whitespace-nowrap '>
                    <div className='w-[50%] md:w-[40%]'>
                        <img src={require(`../../../assests/images/Services (2).png`)} alt="Service" />
                    </div>
                    <div>
                        <h3 className='text-xl leading-7 font-semibold uppercase sm:text-sm md:text-base max-[980px]:whitespace-nowrap lg:whitespace-nowrap'>24/7 customer Service</h3>
                        <h5 className='text-center sm:text-xs md:text-[14px] max-[980px]:whitespace-nowrap '>Friendly 24/7 customer support</h5>
                    </div>
                </div>
                <div className='flex flex-col gap-6 items-center xl:whitespace-nowrap '>
                    <div className='w-[50%] md:w-[40%]'>
                        <img src={require(`../../../assests/images/Services.png`)} alt="Service" />
                    </div>
                    <div>
                        <h3 className='text-xl leading-7 font-semibold uppercase sm:text-sm md:text-base max-[980px]:whitespace-nowrap lg:whitespace-nowrap'>Money back gaurantee</h3>
                        <h5 className='text-center sm:text-xs md:text-[14px] max-[980px]:whitespace-nowrap xl:whitespace-nowrap'>We reurn money within 30 days</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services;