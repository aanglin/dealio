import React, { useEffect, useState } from 'react'
import CheckBar from '../components/checkBar'
import { Context} from '../components/context'
import { useContext } from 'react'
import Image from 'next/image'

function Checkout() {
  const {selectedProducts, setSelectedProducts} = useContext(Context);
  const [productsInfos, setProductsInfos] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');

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

let deliveryPrice = 6.99;
let subTotal = 0;

if (selectedProducts?.length) {
  if (!productsInfos) {
    console.log('productsInfos is not defined!');
    // Load productsInfos here if it's not already loaded
  } else {
    for (let id of selectedProducts) {
      const product = productsInfos.find(p => p._id === id);
      if (product) {
        subTotal += Number(product.price || 0);
      }
    }
  }
}

subTotal = subTotal.toFixed(2); // round to 2 decimal places

if (subTotal > 25) {
  deliveryPrice *= 1.02; // add 2% to deliveryPrice
  deliveryPrice = deliveryPrice.toFixed(2);
} 
if (subTotal > 50) {
  deliveryPrice *= 1.53; 
  deliveryPrice = deliveryPrice.toFixed(2);
} 
if (subTotal > 100) {
  deliveryPrice *= 2.04; 
  deliveryPrice = deliveryPrice.toFixed(2);
} 

const total = (Number(subTotal) + parseFloat(deliveryPrice)).toFixed(2); // calculate total and round to 2 decimal places

  return (
    <div className='overflow-hidden'>
    <CheckBar />
    {!productsInfos.length && (
      <div className='p-5 font-bold'>No products are in your shopping cart!!</div>
    )}
    {productsInfos.length && productsInfos.map(productInfo => (
      <div key={productInfo._id} className='flex mb-5 '>
        <div className='p-3 shrink-0 w-24'>
          <Image src={productInfo.image} width={1920} height={1080} alt="/" />
        </div>
        <div>
          <h3 className='font-bold text-lg pr-5 p-1 m-1'>{productInfo.title}</h3>
          <p className='w-[20rem] pr-7 md:w-[45rem] text-sm'>{productInfo.description}</p>
          <div className='flex'>
            <div className='grow font-bold'>
              ${productInfo.price}
              </div>
              <div className='pr-9 md:pr-0'>
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
    <form action="/api/checkout" method='POST' className='md:pl-16'>
        <div className='flex flex-col p-4 w-[27rem] md:w-[82%]'>
          <input name="name" value={name} onChange={e => setName(e.target.value) } className='bg-gray-100 w-[92%] md:w-1/2 rounded-lg px-4 py-2 mb-3' type="text" placeholder='Name' />
          <input name="address" value={address} onChange={e => setAddress(e.target.value) } className='bg-gray-100 w-[92%] md:w-1/2 rounded-lg px-4 py-2 mb-3' type="text" placeholder='Street Address' />
          <input name="city" value={city} onChange={e => setCity(e.target.value) } className='bg-gray-100 w-[92%] md:w-1/2 rounded-lg px-4 py-2 mb-3' type="text" placeholder='City and Zip Code' />
          <input name="email" value={email} onChange={e => setEmail(e.target.value) } className='bg-gray-100 w-[92%] md:w-1/2 rounded-lg px-4 py-2 mb-3' type="email" placeholder='Email' />
        </div>
        <div className='mt-4 pl-5  w-[31rem] md:w-[82%]'>
          <div className='flex my-3 w-1/2'>
            <h3 className='grow font-bold'>Subtotal</h3>
            <h3 className='font-bold'>${subTotal}</h3>
          </div>
          <div className='flex my-3 w-1/2'>
            <h3 className='grow font-bold'>Delivery</h3>
            <h3 className='font-bold'>${deliveryPrice}</h3>
          </div>
          <div className='flex my-3 w-1/2 border-t pt-3 border-dashed border-emerald-200'>
            <h3 className='grow font-bold'>Total</h3>
            <h3 className='font-bold'>${total}</h3>
          </div>
            <input type="hidden" name='products' value={selectedProducts.join(',')} />
        <button type='submit' className='bg-emerald-500  py-2 rounded-lg text-white w-[22rem] md:w-1/2 my-4 shadow-lg hover:shadow-emerald-100'>Pay ${total}</button>
          </div>
        </form>
        </div>
       
  )
}

export default Checkout