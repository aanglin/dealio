import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Dancing_Script} from 'next/font/google'
import SearchBar from "./searchBar";
import { MdPersonPin } from 'react-icons/md'


const design = Dancing_Script({ weight: '700', subsets: ['latin'] })

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="fixed flex justify-evenly items-center text-xl mb-6 pl-4 bg-[#64D4D9] w-full h-[5rem] z-50">
      <div className="flex items-center">
        <div className="flex  text-5xl text-[#195759]">
        <h1 className={design.className}>Dealio</h1>
        </div>
        <ul className='flex pl-2'>
            <Link href={'#jewelery'}><li>Jewelery</li></Link>
            <Link href={'#electronics'}><li>Electronics</li></Link>
            <Link href={'#women Clothing'}><li>Womens</li></Link>
            <Link href={'#men'}><li>Mens</li></Link>
        </ul>
        <Link href={'/signIn'} className="flex items-center px-24">
        <MdPersonPin size={30} className="text-[#195759]"/>
        <h1 className="px-3 cursor-pointer text-[#195759]">Sign In</h1>
        </Link>
        <Link href={'/checkout'} className="flex justify-center items-center">
        <AiOutlineShoppingCart size={30} className="flex items-center text-[#195759]"/>
        <h1 className="px-3 cursor-pointer text-[#195759]">Cart 0</h1>
        </Link>
      
      </div>
    </div>
    
  );
}

export default SideBar;
