import React, { useContext } from 'react'
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { Context } from "./context"

function Nav() {
    const {selectedProducts} = useContext(Context)
  return (
    <div className='flex px-32'>
        <Link href={'/'} className="flex justify-center items-center ">
        <AiOutlineHome size={30} className="inline-block text-[#195759]"/>
        <h1 className="inline-block pl-3  cursor-pointer text-[#195759]">Home</h1>
        </Link>
        <Link href={'/checkout'} className="flex pl-44 justify-center items-center">
        <AiOutlineShoppingCart size={30} className="inline-block items-center text-[#195759]"/>
        <h1 className="pl-3 cursor-pointer text-[#195759]">Cart <span className="text-white">{selectedProducts.length}</span></h1>
        </Link>
    </div>
  )
}

export default Nav