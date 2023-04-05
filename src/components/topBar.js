import Link from "next/link";
import React, { useContext } from 'react'
import { Dancing_Script} from 'next/font/google'
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { Context } from "./context"


const design = Dancing_Script({ weight: '700', subsets: ['latin'] })

function TopBar() {
  const {selectedProducts} = useContext(Context)
  return (
    <div className="pb-28">
    <div className="fixed flex justify-start items-center text-xl  pl-4 bg-[#64D4D9] w-full h-[5rem] z-50">
      <div className="flex items-center">
        <div className="flex text-3xl text-[#195759] md:pl-3 sm:text-5xl">
        <h1 className={design.className}>Dealio</h1>
        </div>
        <ul className='pl-2 hidden lg:flex'>
        <li><Link href={'#jewelery'} className="inline-block">Jewelery</Link></li>
        <li> <Link href={'#electronics'}className="inline-block">Electronics</Link></li>
        <li> <Link href={'#ladies'}className="inline-block">Womens</Link></li>
        <li><Link href={'#guys'}className="inline-block">Mens</Link></li>
        </ul>
        <div className='flex'>
        <Link href={'/'} className="flex px-11 items-center md:pl-[23rem] lg:p-36">
        <AiOutlineHome size={30} className="text-[#195759]"/>
        <h1 className="cursor-pointer text-[#195759]">Home</h1>
        </Link>
        <Link href={'/checkout'} className="flex justify-center items-center">
        <AiOutlineShoppingCart size={30} className="flex items-center text-[#195759]"/>
        <h1 className="px-3 cursor-pointer text-[#195759]">Cart <span className="text-white">{selectedProducts.length}</span></h1>
        </Link>
    </div>
      </div>
    </div>
    </div>
  );
}

export default TopBar;
