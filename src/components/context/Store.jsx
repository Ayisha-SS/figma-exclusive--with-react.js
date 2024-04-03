import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const Context = ({ children }) =>{
    const [ data, setData] = useState([
        {
            id:1,
            image:"assests/images/keyboard/asus-1.jpg",
            name:"Asus Wireless Keyboard and Mouse Set(W10)",
            type:"keyboard",
            quantity:3,
            price:1049
        },
        {
            id:2,
            image:"assests/images/gaming/sony-1.jpg",
            name:"Sony DualSense Wireless Controller white",
            type:"gaming",
            quantity:3,
            price:5990
        },
        {
            id:3,
            image:"assests/images/headphones/boat-1.jpg",
            name:"boAt Rockerz 450 Bluetooth with Mic",
            type:"headphone",
            quantity:3,
            price:1499,
        },
        {
            id:4,
            image:"assests/images/camera/meike-1.jpg",
            name:"Meike 85mm wide Aperture Nikon Cameras",
            type:"camera",
            quantity:3,
            price:22900
        },
        {
            id:5,
            image:"assests/images/watches/apple-1.jpg",
            name:"Apple Watch SE(2nd Gen)",
            type:"smartwatch",
            quantity:3,
            price:28900,
        },
        {
            id:6,
            image:"assests/images/laptop/mac-1.jpg",
            name:"Apple M3 Macbook",
            type:"laptop",
            quantity:3,
            price:114900
        },
        {
            id:7,
            image:"assests/images/headphones/jbl-1.webp",
            name:"JBL TUNE 770NC",
            type:"headphone",
            quantity:3,
            price:6499,
        },
        {
            id:8,
            image:"assests/images/computer/asus-1.webp",
            name:"Asus ViVo Aio V222",
            type:"computer",
            quantity:3,
            price:28990,
        },
        {
            id:9,
            image:"assests/images/phone/galaxy-1.webp",
            name:"Samsung Galaxy S24 ultra SA AI",
            type:"phone",
            quantity:3,
            price:129999,
        },
        {
            id:10,
            image:"assests/images/laptop/dell-1.avif",
            name:"XPS 13 2-in-1 Laptop",
            type:"laptop",
            quantity:3,
            price:172490
        },
        {
            id:11,
            image:"assests/images/gaming/op-1.webp",
            name:"Gaming Controller(op-WLGC01)",
            type:"gaming",
            quantity:3,
            price:1499
        },
        {
            id:12,
            image:"assests/images/keyboard/mini-1.webp",
            name:"MX KEYS MINI",
            type:"keyboard",
            quantity:3,
            price:1049
        },
        {
            id:13,
            image:"assests/images/phone/phone-1.jpg",
            name:"onePlus 12",
            type:"phone",
            quantity:3,
            price:69999,
        },
        {
            id:14,
            image:"assests/images/watches/galaxy-1.jpg",
            name:"Samsung Galaxy Watch 4",
            type:"smartwatch",
            quantity:3,
            price:10999
        },
        {
            id:15,
            image:"assests/images/computer/lenova-1.jpg",
            name:"Lenovo ThinkCenter 19' A10 Desktop",
            type:"computer",
            quantity:3,
            price:13924
        },
        {
            id:16,
            image:"assests/images/keyboard/bubble-1.jpg",
            name:"Bubble Pro Wireless Keyboard with Touchpad",
            type:"keyboard",
            quantity:3,
            price:1049
        },
        {
            id:17,
            image:"assests/images/laptop/lenova-1.avif",
            name:"ThinkPad E14-13th Gen Intel",
            type:"laptop",
            quantity:3,
            price:48491
        },
        {
            id:18,
            image:"assests/images/camera/nikon-1.jpg",
            name:"Nikon D7500 20.9MP Digital SLR",
            type:"camera",
            quantity:3,
            price:86449,
        },
        {
            id:19,
            image:"assests/images/phone/redmi-1.webp",
            name:"Redmi 12 5G",
            type:"phone",
            quantity:3,
            price:14999
        },
        {
            id:20,
            image:"assests/images/computer/hp-1.webp",
            name:"HP-All-in-one PC Intel pentium",
            type:"computer",
            quantity:3,
            price:32490,
        },
        {
            id:21,
            image:"assests/images/watches/huawei-1.webp",
            name:"Huawei Smart Watch 4 Pro",
            type:"smartwatch",
            quantity:3,
            price:64367
        },
        {
            id:22,
            image:"assests/images/camera/sports-1.jpg",
            name:"4K Sports Camera 2199",
            type:"camera",
            quantity:3,
            price:2199,
        },
        {
            id:23,
            image:"assests/images/gaming/zerbo-1.jpg",
            type:"gaming",
            name:"Zerbonics",
            quantity:3,
            price:2299
        },
        {
            id:24,
            image:"assests/images/headphones/razer-1.webp",
            name:"Razer Blackshark V2X",
            type:"headphone",
            quantity:3,
            price:3569,
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <DataContext.Provider value={{ data, setData, selectedCategory, setSelectedCategory }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () =>{
   return  useContext(DataContext)
};

export default DataContext;