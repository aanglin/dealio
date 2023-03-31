import Nav from "./nav"
import { Dancing_Script} from 'next/font/google'


const design = Dancing_Script({ weight: '700', subsets: ['latin'] })

function CheckBar() {
  return (
    <div className="pb-28">
    <div className="fixed flex justify-between  items-center text-xl  pl-4 bg-[#64D4D9] w-full h-[5rem] z-50">
      <div className="flex items-center">
        <div className="flex  text-5xl text-[#195759]  ">
        <h1 className={design.className}>Dealio</h1>
        </div>
        <div className="">
        <Nav />
        </div>
      
      </div>
    </div>
    </div>
  );
}

export default CheckBar;
