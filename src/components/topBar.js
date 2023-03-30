import Link from "next/link";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Dancing_Script} from 'next/font/google'
import { MdPersonPin } from 'react-icons/md'
import { Context } from "./context"


const design = Dancing_Script({ weight: '700', subsets: ['latin'] })

function SideBar() {
  const {selectedProducts} = useContext(Context)

  return (
    <div className="pb-28">
    <div className="fixed flex justify-evenly items-center text-xl  pl-4 bg-[#64D4D9] w-full h-[5rem] z-50">
      <div className="flex items-center">
        <div className="flex  text-5xl text-[#195759]">
        <h1 className={design.className}>Dealio</h1>
        </div>
        <ul className='flex pl-2'>
        <li><Link href={'#jewelery'} className="inline-block">Jewelery</Link></li>
        <li> <Link href={'#electronics'}className="inline-block">Electronics</Link></li>
        <li> <Link href={'#women Clothing'}className="inline-block">Womens</Link></li>
        <li><Link href={'#men'}className="inline-block">Mens</Link></li>
        </ul>
        <Link href={'/signIn'} className="flex items-center px-24">
        <MdPersonPin size={30} className="text-[#195759]"/>
        <h1 className="px-3 cursor-pointer text-[#195759]">Sign In</h1>
        </Link>
        <Link href={'/checkout'} className="flex justify-center items-center">
        <AiOutlineShoppingCart size={30} className="flex items-center text-[#195759]"/>
        <h1 className="px-3 cursor-pointer text-[#195759]">Cart <span className="text-white">{selectedProducts.length}</span></h1>
        </Link>
      
      </div>
    </div>
    </div>
  );
}

export default SideBar;
