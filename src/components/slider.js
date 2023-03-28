import Image from "next/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Banner1 from "../../public/assets/banner1.png";
import Banner2 from "../../public/assets/banner2.jpg";

function Slider() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2670&q=60",
    },

    {
      url: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1608347212618-87abc72d4835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc29ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0JTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2670&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1552960226-639240203497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=2670&q=60",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex  relative max-w-[1450px] w-full h-full overflow-hidden ml-[vw] translate-x-60">
  <div className="flex-1 h-[610px] w-full m-auto py-16 px-4 relative group">
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
    ></div>
    {/* Left Arrow */}
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/30 text-black cursor-pointer">
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/30 text-black cursor-pointer">
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className="flex top-4 justify-center py-2">
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className="text-2xl cursor-pointer"
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
  <div className="flex flex-col w-[34rem]  mt-[4rem] ml-[5rem] ">
    <div className="flex bg-white w-full h-[16rem] rounded-xl">
      <Image src={Banner1}  className="rounded-xl"/>
    </div>
    <div className="flex bg-[#64D4D9] mt-2 w-full h-[13rem] rounded-xl ">
    <Image src={Banner2}  className="rounded-xl"/>
    </div>
    
  </div>
</div>
);
}

export default Slider;
