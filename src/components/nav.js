import React, { useContext } from 'react'
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { Context } from "./Context"

function Nav() {
    const {selectedProducts} = useContext(Context)
  return (
    <div className='flex'>
        <Link href={'/'} className="flex items-center px-24">
        <AiOutlineHome size={30} className="text-[#195759]"/>
        <h1 className="px-3 cursor-pointer text-[#195759]">Home</h1>
        </Link>
        <Link href={'/checkout'} className="flex justify-center items-center">
        <AiOutlineShoppingCart size={30} className="flex items-center text-[#195759]"/>
        <h1 className="px-3 cursor-pointer text-[#195759]">Cart <span className="text-white">{selectedProducts.length}</span></h1>
        </Link>
    </div>
  )
}

export default Nav