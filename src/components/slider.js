import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Banner1 from "../../public/assets/banner1.png";
import Banner2 from "../../public/assets/banner2.jpg";

function Slider() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYXJlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwYXJlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      url: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGpld2Vscnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGpld2Vscnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGpld2Vscnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1620783770629-122b7f187703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    setCurrentIndex(randomIndex);
  }, []);

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
    <div className="flex flex-col lg:flex-row py-12 relative max-w-[1450px] w-full mx-auto overflow-hidden">
  <div className=" h-[617px] w-full m-auto object-contain relative group">
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className="w-full h-full bg-center bg-cover duration-500"
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
  <div className="flex justify-center w-full pl-56 lg:pl-0">
  <div className="lg:flex lg:flex-col lg:w-[34rem] mt-[4rem] lg:mt-12 ml-[5rem]">
    <div className="flex pr-[320px] w-[760px] h-[15rem] md:w-[1040px] md:h-auto lg:w-[55rem] lg:mr-[53px]">
      <Image src={Banner1} className="object-contain" alt="/" />
    </div>
    <div className="flex pr-[320px] mt-9 lg:pr-[300px] w-[746px] md:w-[1040px] md:h-auto lg:w-[863px] lg:h-[18rem] h-[13rem]">
      <Image src={Banner2} className="object-cover" alt="/" />
    </div>
  </div>
  </div>
</div>

//     <div className="flex py-12  relative max-w-[1450px] w-full translate-x-60">
//   <div className="flex-1 h-[617px] w-full m-auto object-contain  relative group">
//     <div
//       style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//       className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//     ></div>
//     {/* Left Arrow */}
//     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/30 text-black cursor-pointer">
//       <BsChevronCompactLeft onClick={prevSlide} size={30} />
//     </div>
//     {/* Right Arrow */}
//     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/30 text-black cursor-pointer">
//       <BsChevronCompactRight onClick={nextSlide} size={30} />
//     </div>
//     <div className="flex top-4 justify-center py-2">
//       {slides.map((slide, slideIndex) => (
//         <div
//           key={slideIndex}
//           onClick={() => goToSlide(slideIndex)}
//           className="text-2xl cursor-pointer"
//         >
//           <RxDotFilled />
//         </div>
//       ))}
//     </div>
//   </div>
//   <div className="flex flex-col w-[34rem]  mt-[4rem] ml-[5rem] ">
//     <div className="flex bg-white w-full h-[15rem] rounded-xl">
//       <Image src={Banner1}  className=" object-contain" alt="/"/>
//     </div>
//     <div className="flex bg-[#64D4D9] mt-2 ml-[59px] w-[427px] h-[15rem] rounded-xl ">
//     <Image src={Banner2}  className=" object-cover" alt="/"/>
//     </div>
    
//   </div>
// </div>
);
}

export default Slider;
