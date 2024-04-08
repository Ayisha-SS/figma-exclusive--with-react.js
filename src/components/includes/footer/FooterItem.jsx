import React, { useEffect, useState } from 'react';
import { VscSend } from "react-icons/vsc";
import { PiCopyrightThin } from "react-icons/pi";
import { GiPartyPopper } from "react-icons/gi";

function FooterItem() {

    const [email, setEmail] = useState('');
    const [showPopUp, setShowPopUp] = useState(false);

    const handleInput = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        setShowPopUp(true);
        setEmail('');

        setTimeout( () => {
            setShowPopUp(false);
        },2000)
    };

    useEffect( () => {
        if(showPopUp) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    })

  return (
    <>
        <div className='bg-[#000] py-8'>
            <div className='wrapper flex py-10 text-[#FAFAFA] justify-between'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <img src={require(`../../../assests/images/footer-logo.png`)} alt="Logo" />
                    </div>
                    <h3 className='text-xl font-medium leading-7 text-[#FAFAFA]'><a href="#">Subscribe</a></h3>
                    <h5 className='text-base leading-6 text-[#FAFAFA]'>Get 10% off your first order</h5>
                    <div className='border rounded py-3 pl-4 pr-2 text-[#FAFAFA] flex items-center'>
                       <input 
                            type="email" 
                            value={email}
                            onChange={handleInput}
                            placeholder="Enter your email" 
                            className="text-base leading-6 font-normal opacity-[40%] bg-transparent border-none focus:outline-none"
                        />
                        <span onClick={handleSubmit}><VscSend /></span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'> 
                    <h3 className='text-xl font-medium leading-7 mb-3'><a href="#">Support</a></h3>
                    <h6 className='text-base leading-6 font-normal'><a href="#">111 Bijoy sarani,Dhaka,<br/>DH 1515,Bangladesh.</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">exclusive@gmail.com</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">+88015-88888-9999</a></h6> 
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-medium leading-7 mb-3'><a href="#">Account</a></h3>
                    <h6 className='text-base leading-6 font-normal'><a href="#">My Account</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">Login / Register</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">Cart</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">Wishlist</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">Shop</a></h6>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-medium leading-7 mb-3'><a href="#">Quick Link</a></h3>
                    <h6 className='text-base leading-6 font-normal'><a href="#">Privacy Policy</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">Terms of Use</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">FAQ</a></h6>
                    <h6 className='text-base leading-6 font-normal'><a href="#">Contacts</a></h6>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-medium leading-7 mb-7'>Download App</h3>
                    <h6 className='text-sm leading-[18px] font-medium opacity-[40%] mb-4'>Save $3 with App New User Only</h6>
                    <div className='flex gap-1'>
                        <div>
                            <img src={require(`../../../assests/images/Qrcode 1.png`)} alt="QrCode" />
                        </div>
                        <div className='flex flex-col'>
                            <img src={require(`../../../assests/images/GooglePlay.png`)} alt="PlayStore" />
                            <img src={require(`../../../assests/images/AppStore.png`)} alt="AppStore" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <hr  className='text-[#FAFAFA] opacity-[10%]'/>
                <h3 className='text-[#FAFAFA] flex items-center justify-center mt-3 font-normal text-base leading-6 opacity-[30%] gap-1'><PiCopyrightThin /> Copyright Rimel 2022. All right reserved</h3>
            </div>
        </div>

        { showPopUp && (
            <div className='fixed top-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full h-full '>
                <div className='bg-[#FAFAFA] text-green-700 p-3 mt-3 text-4xl font-bold rounded-md z-50 w-[50%] h-[50%] shadow-neutral-950 flex flex-col gap-1 items-center justify-center'>
                    Newsletter added Successfully...!
                    <span className='flex gap-3'>
                        <GiPartyPopper size={50} color='black'/>
                    </span>
                </div>
            </div>
        )}
    </>
    )
}

export default FooterItem;