import Image from "next/image";
import React, { useContext } from "react";
import { Context } from "./Context";

function homeProducts({ _id, title, description, price, image }) {
  const { setSelectedProducts } = useContext(Context);
  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id]);
  }
  return (
      <div className="w-72 p-10 px-6 hover:shadow-2xl rounded-xl">
      <div className="p-5 ">
        <Image
        id='pic'
          src={image}
          width={1920}
          height={1080}
          className="object-contain"
          alt="/"
        />
      </div>
      <div>
        <h2 className=" p-1 pt-2 text-lg font-extrabold">{title}</h2>
        </div>
          <p className="pt-1 text-sm leading-4 line-clamp-3">
            {description}
          </p>
        <div className="flex mt-2 pb-4">
            <div className="text-2xl font-bold grow">
          ${price}
        </div>
        <button onClick={addProduct} className="bg-emerald-400 py-1 px-2 rounded-xl text-white">add to cart</button>
      </div>
    </div>
  );
}

export default homeProducts;
