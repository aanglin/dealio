import Link from "next/link";
import Nav from "./nav"
import { Dancing_Script} from 'next/font/google'


const design = Dancing_Script({ weight: '700', subsets: ['latin'] })

function SideBar() {
 

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
        <Nav />
      
      </div>
    </div>
    </div>
  );
}

export default SideBar;
