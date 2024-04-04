import React from 'react'

function Services() {
  return (
    <>
        <div className='py-20 px-40'>
            <div className='flex items-center gap-20 mb-10'>
                <div className='flex flex-col gap-6 items-center'>
                    <div className='w-[50%]'>
                        <img src={require(`../../../assests/images/Services (1).png`)} alt="Service" />
                    </div>
                    <div>
                        <h3 className='text-xl leading-7 font-semibold uppercase'>Free and fast delivery</h3>
                        <h5>Free delivery for all orders over $140</h5>
                    </div>
                </div>
                <div className='flex flex-col gap-6 items-center'>
                    <div>
                        <img src={require(`../../../assests/images/Services (2).png`)} alt="Service" />
                    </div>
                    <div>
                        <h3 className='text-xl leading-7 font-semibold uppercase'>24/7 customer Service</h3>
                        <h5>Friendly 24/7 customer support</h5>
                    </div>
                </div>
                <div className='flex flex-col gap-6 items-center'>
                    <div>
                        <img src={require(`../../../assests/images/Services.png`)} alt="Service" />
                    </div>
                    <div>
                        <h3 className='text-xl leading-7 font-semibold uppercase'>Money back gaurantee</h3>
                        <h5>We reurn money within 30 days</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services;