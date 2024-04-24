import React, { createContext, useContext, useState } from "react";
import { useMemo,useEffect } from "react";
const DataContext = createContext();

export const Context = ({ children }) =>{
    const [ data, setData] = useState([
        {
            id:1,
            image:"assests/images/keyboard/asus-1.png",
            img2:"assests/images/keyboard/asus-2-removebg-preview.png",
            img3:"assests/images/keyboard/asus-3-removebg-preview.png",
            img4:"assests/images/keyboard/asus-4-removebg-preview.png",
            name:"Asus Wireless Keyboard and Mouse Set(W10)",
            type:"keyboard",
            quantity:3,
            price:1049
        },
        {
            id:2,
            image:"assests/images/gaming/sony-1-removebg-preview.png",
            img2:"assests/images/gaming/sony-2-removebg-preview.png",
            img3:"assests/images/gaming/sony-3-removebg-preview.png",
            img4:"assests/images/gaming/sony-4-removebg-preview.png",
            name:"Sony DualSense Wireless Controller white",
            type:"gaming",
            quantity:3,
            price:5990
        },
        {
            id:3,
            image:"assests/images/headphones/boat-1-removebg-preview.png",
            img2:"assests/images/headphones/boat-2.jpg",
            img3:"assests/images/headphones/boat-3.jpg",
            img4:"assests/images/headphones/boat-4.jpg",
            name:"boAt Rockerz 450 Bluetooth with Mic",
            type:"headphone",
            quantity:3,
            price:1499,
        },
        {
            id:4,
            image:"assests/images/camera/meike-1-removebg-preview.png",
            img2:"assests/images/camera/meike-2-removebg-preview.png",
            img3:"assests/images/camera/meike-3-removebg-preview.png",
            img4:"assests/images/camera/meike-4-removebg-preview.png",
            name:"Meike 85mm wide Aperture Nikon Cameras",
            type:"camera",
            quantity:3,
            price:22900
        },
        {
            id:5,
            image:"assests/images/watches/apple-1.png",
            img2:"assests/images/watches/apple-2.png",
            img3:"assests/images/watches/apple-3.png",
            img4:"assests/images/watches/apple-4.jpg",
            name:"Apple Watch SE(2nd Gen)",
            type:"smartwatch",
            quantity:3,
            price:28900,
        },
        {
            id:6,
            image:"assests/images/laptop/mac-1-removebg-preview.png",
            img2:"assests/images/laptop/mac-2-removebg-preview.png",
            img3:"assests/images/laptop/mac-3-removebg-preview.png",
            img4:"assests/images/laptop/mac-4-removebg-preview.png",
            name:"Apple M3 Macbook",
            type:"laptop",
            quantity:3,
            price:114900
        },
        {
            id:7,
            image:"assests/images/headphones/jbl-1.png",
            img2:"assests/images/headphones/jbl-2.jpg",
            img3:"assests/images/headphones/jbl-3.jpg",
            img4:"assests/images/headphones/jbl-4.jpg",
            name:"JBL TUNE 770NC",
            type:"headphone",
            quantity:3,
            price:6499,
        },
        {
            id:8,
            image:"assests/images/computer/asus-1.png",
            img2:"assests/images/computer/asus-2.jpg",
            img3:"assests/images/computer/asus-3.jpg",
            img4:"assests/images/computer/asus-4.jpg",
            name:"Asus ViVo Aio V222",
            type:"computer",
            quantity:3,
            price:28990,
        },
        {
            id:9,
            image:"assests/images/phone/galaxy-1-removebg-preview.png",
            img2:"assests/images/phone/galaxy-2.png",
            img3:"assests/images/phone/galaxy-3.png",
            img4:"assests/images/phone/galaxy-4.png",
            name:"Samsung Galaxy S24 ultra SA AI",
            type:"phone",
            quantity:3,
            price:129999,
        },
        {
            id:10,
            image:"assests/images/laptop/dell-1.png",
            img2:"assests/images/laptop/dell-2.png",
            img3:"assests/images/laptop/dell-3.png",
            img4:"assests/images/laptop/dell-4.png",
            name:"XPS 13 2-in-1 Laptop",
            type:"laptop",
            quantity:3,
            price:172490
        },
        {
            id:11,
            image:"assests/images/gaming/op-1.webp",
            img2:"assests/images/gaming/op-2-removebg-preview.png",
            img3:"assests/images/gaming/op-3-removebg-preview.png",
            img4:"assests/images/gaming/op-4-removebg-preview.png",
            name:"Gaming Controller(op-WLGC01)",
            type:"gaming",
            quantity:3,
            price:1499
        },
        {
            id:12,
            image:"assests/images/keyboard/mini-1.jpg",
            img2:"assests/images/keyboard/mini-2.jpg",
            img3:"assests/images/keyboard/mini-3.jpg",
            img4:"assests/images/keyboard/mini-4.jpg",
            name:"MX KEYS MINI",
            type:"keyboard",
            quantity:3,
            price:1049
        },
        {
            id:13,
            image:"assests/images/phone/phone-1-removebg-preview.png",
            img2:"assests/images/phone/phone-2.png",
            img3:"assests/images/phone/phone-3.png",
            img4:"assests/images/phone/phone-4.png",
            name:"onePlus 12",
            type:"phone",
            quantity:3,
            price:69999,
        },
        {
            id:14,
            image:"assests/images/watches/galaxy-1.png",
            img2:"assests/images/watches/galaxy-2.jpg",
            img3:"assests/images/watches/galaxy-3.jpg",
            img4:"assests/images/watches/galaxy-4.jpg",
            name:"Samsung Galaxy Watch 4",
            type:"smartwatch",
            quantity:3,
            price:10999
        },
        {
            id:15,
            image:"assests/images/computer/lenova-1.png",
            img2:"assests/images/computer/lenova-2.jpg",
            img3:"assests/images/computer/lenovo-3.png",
            img4:"assests/images/computer/lenovo-4.png",
            name:"Lenovo ThinkCenter 19' A10 Desktop",
            type:"computer",
            quantity:3,
            price:13924
        },
        {
            id:16,
            image:"assests/images/keyboard/bubble-1.png",
            img2:"assests/images/keyboard/bubble-2.jpg",
            img3:"assests/images/keyboard/bubble-3.jpg",
            img4:"assests/images/keyboard/bubble-4.jpg",
            name:"Bubble Pro Wireless Keyboard with Touchpad",
            type:"keyboard",
            quantity:3,
            price:1049
        },
        {
            id:17,
            image:"assests/images/laptop/lenova-1.png",
            img2:"assests/images/laptop/lenova-2.png",
            img3:"assests/images/laptop/mac-3-removebg-preview.png",
            img4:"assests/images/laptop/lenova-4.jpg",
            name:"ThinkPad E14-13th Gen Intel",
            type:"laptop",
            quantity:3,
            price:48491
        },
        {
            id:18,
            image:"assests/images/camera/nikon-1-removebg-preview.png",
            img2:"assests/images/camera/nikon-2-removebg-preview.png",
            img3:"assests/images/camera/nikon-3-removebg-preview.png",
            img4:"assests/images/camera/nikon-4-removebg-preview.png",
            name:"Nikon D7500 20.9MP Digital SLR",
            type:"camera",
            quantity:3,
            price:86449,
        },
        {
            id:19,
            image:"assests/images/phone/redmi-1-removebg-preview.png",
            img2:"assests/images/phone/redmi-2.png",
            img3:"assests/images/phone/redmi-3.png",
            img4:"assests/images/phone/redmi-4.jpg",
            name:"Redmi 12 5G",
            type:"phone",
            quantity:3,
            price:14999
        },
        {
            id:20,
            image:"assests/images/computer/hp-1.png",
            img2:"assests/images/computer/hp-2.jpg",
            img3:"assests/images/computer/hp-3.jpg",
            img4:"assests/images/computer/hp-4.jpg",
            name:"HP-All-in-one PC Intel pentium",
            type:"computer",
            quantity:3,
            price:32490,
        },
        {
            id:21,
            image:"assests/images/watches/huawei-1.png",
            img2:"assests/images/watches/huawei-2.png",
            img3:"assests/images/watches/huawei-3.png",
            img4:"assests/images/watches/huawei-4.png",
            name:"Huawei Smart Watch 4 Pro",
            type:"smartwatch",
            quantity:3,
            price:64367
        },
        {
            id:22,
            image:"assests/images/camera/sports-1-removebg-preview.png",
            img2:"assests/images/camera/sports-2-removebg-preview.png",
            img3:"assests/images/camera/sports-3.jpg",
            img4:"assests/images/camera/sports-4.jpg",
            name:"4K Sports Camera 2199",
            type:"camera",
            quantity:3,
            price:2199,
        },
        {
            id:23,
            image:"assests/images/gaming/zerbo-1-removebg-preview.png",
            img2:"assests/images/gaming/zerbo-2-removebg-preview.png",
            img3:"assests/images/gaming/zerbo-3-removebg-preview.png",
            img4:"assests/images/gaming/zerbo-4-removebg-preview.png",
            name:"Zerbonics",
            type:"gaming",
            quantity:3,
            price:2299
        },
        {
            id:24,
            image:"assests/images/headphones/razer-1.png",
            img2:"assests/images/headphones/razer-2.jpg",
            img3:"assests/images/headphones/razer-3.jpg",
            img4:"assests/images/headphones/razer-4.jpg",
            name:"Razer Blackshark V2X",
            type:"headphone",
            quantity:3,
            price:3569,
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ randomItem, setRandomItem ] = useState([]);

    const setRandomProduct = (randomProduct) => {
        setRandomItem(randomProduct);
    };

    const search = (term) => {
        setSearchTerm(term.toLowerCase().trim());
    };

    // const filteredData = data.filter(item => {
    //     return item.name.toLowerCase().includes(searchTerm) || searchTerm === '';
    // });

    const filteredData = useMemo(() => {
        return data.filter(item => {
            return item.name.toLowerCase().includes(searchTerm) || searchTerm === '';
        });
    }, [data, searchTerm]);

    useEffect(() => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        setRandomItem(selected);
    }, [data]); 

const info = {
    data:filteredData,
    setData,
    selectedCategory,
    setSelectedCategory,
    search,
    searchTerm,
    randomItem,
    setRandomItem,
    setRandomProduct
}

    return (
        <DataContext.Provider value={info}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () =>{
   return  useContext(DataContext)
};

export default DataContext;