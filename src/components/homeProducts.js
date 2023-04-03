import Image from "next/image";
import React, { useContext } from "react";
import { Context } from "./context";

function homeProducts({ _id, title, description, price, image }) {
  const { setSelectedProducts } = useContext(Context);
  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id]);
  }
  return (
      <div className="flex flex-col justify-center items-center rounded-xl  w-[25rem] h-[30rem] hover:shadow-xl">
      <div className="p-5 ">
        <Image
        id='pic'
          src={image}
          width={1920}
          height={1080}
          className="object-contain w-[200px] h-[200px]"
          alt="/"
        />
      </div>
      <div className="">
        <h2 className=" p-2 pt-2 text-lg font-extrabold">{title}</h2>
        </div>
          <p className="p-3 pt-1 text-sm leading-2 line-clamp-5">
            {description}
          </p>
        <div className="flex mt-2 pb-4 justify-center items-center ">
            <div className="text-2xl font-bold px-12">
          ${price}
        </div>
      </div>
      <div className="w-full pb-5 px-3">
        <button onClick={addProduct} className="w-full bg-emerald-400  py-1 px-2 rounded-xl text-white ">add to cart</button>
        </div>
    </div>
  );
}

export default homeProducts;
