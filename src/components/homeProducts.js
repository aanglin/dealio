import Image from 'next/image'
import React from 'react'


function homeProducts({title, description, price, image}) {
  return (
    <div className="w-72 px-6 hover:shadow-2xl">
    <div className="p-5">
      <Image
      id='pic'
        src={image}
        width={1920}
        height={1080}
        className="w-[15rem] h-1/2"
        alt="/"
      />
    </div>
    <div>
      <h2 className=" p-1 pt-2 text-lg font-extrabold">{title}</h2>
      </div>
        <p className="pt-1 text-sm leading-4">
          {description}
        </p>
      <div className="flex mt-2 pb-4">
          <div className="text-2xl font-bold grow">
        ${price}
      </div>
      <button className="bg-emerald-400 py-1 px-2 rounded-xl text-white">add to cart</button>
    </div>
  </div>
  )
}

export default homeProducts