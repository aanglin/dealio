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
    <div className="flex relative justify-start items-center text-xl  pl-4">
      <AiOutlineMenu
        size={25}
        className="relative cursor-pointer"
        onClick={toggleMenu}
      />

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-1/2 h-screen z-50 bg-[#f2f2f2] sm:w-1/6 md:w-[38%] lg:w-1/6`}
      >
        <div className="text-xl pl-2">
          <ul className="flex flex-col p-3">
          <Link
            href="/"
            className="block mt-4 sm:inline-block sm:mt-0 hover:text-blue-400 mr-4"
          >
            <li className="p-5">
            Home
            </li>
          </Link>
          <Link
            href="search"
            className="block mt-4 sm:inline-block sm:mt-0 hover:text-blue-400 mr-4"
          >
            <li className="p-5">
            Departments
            </li>
          </Link>
          <Link
            href="favorites"
            className="block mt-4 sm:inline-block sm:mt-0 hover:text-blue-400"
          >
            <li className="p-5">
            My Orders
            </li>
          </Link>
          </ul>
        </div>
      </div>

      {showOverlay && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {isOpen && (
        <AiOutlineClose
          size={25}
          className="relative left-[120px] cursor-pointer z-50 sm:left-60"
          onClick={toggleMenu}
        />
      )}
      <div className="flex items-center">
        <div className="flex px-20 text-5xl">
        <h1 className={design.className}>Dealio</h1>
        </div>
        <div className="w-[1000px] pl-32">
            <SearchBar />
        </div>
        <div className="flex items-center px-24">
        <MdPersonPin size={30}/>
        <h1 className="px-3 cursor-pointer">Sign In</h1>
        </div>
      <div className="flex items-center ">
        <AiOutlineShoppingCart size={30} />
        <h1 className="px-3 cursor-pointer">Cart</h1>
      </div>
      </div>
    </div>
    
  );
}

export default SideBar;
