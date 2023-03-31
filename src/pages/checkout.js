import React, { useEffect, useState } from 'react'
import CheckBar from '../components/CheckBar'
import { Context} from '../components/context'
import { useContext } from 'react'
import Image from 'next/image'

function Checkout() {
  const {selectedProducts, setSelectedProducts} = useContext(Context);
  const [productsInfos, setProductsInfos] = useState([]);

  useEffect(() => {
    const oneId = [...new Set(selectedProducts)];
    if (oneId.length > 0) {
fetch('/api/products?ids='+oneId.join(','))
.then(response => response.json())
.then(json => setProductsInfos(json));
    }
  }, [selectedProducts]);

function addProducts(id) {
setSelectedProducts(prev => [...prev,id])
}

function minusProducts(id) {
const pos = selectedProducts.indexOf(id);
if (pos !== -1){
  setSelectedProducts(prev => {
    return prev.filter((value,index) => index !== pos)
  });
}
}
  return (
    <div>
    <CheckBar />
    {!productsInfos.length && (
      <div className='p-5 font-bold'>No products are in your shopping cart!!</div>
    )}
    {productsInfos.length && productsInfos.map(productInfo => (
      <div key={productInfo._id} className='flex mb-5'>
        <div className='p-3 shrink-0 w-24'>
          <Image src={productInfo.image} width={1920} height={1080} alt="/" />
        </div>
        <div className='pl-4'>
          <h3 className='font-bold text-lg'>{productInfo.title}</h3>
          <p className='w-[45rem] text-sm'>{productInfo.description}</p>
          <div className='flex'>
            <div className='grow font-bold'>
              ${productInfo.price}
              </div>
              <div>
              <button onClick={() => minusProducts(productInfo._id)} className='border border-emerald-500 px-2 rounded-lg text-emerald-500'>-</button>
              <span className='px-2'>
                {selectedProducts.filter(id => id === productInfo._id).length}
                </span>
                <button onClick={() => addProducts(productInfo._id)} className='bg-emerald-500 px-2 rounded-lg text-white'>+</button>
              </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Checkout