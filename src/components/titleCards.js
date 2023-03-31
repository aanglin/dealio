import Image from 'next/image'
import React from 'react'

function titleCards() {
  return (
    <div className='flex p-4 pl-[15rem] cursor-pointer'>
        <div className='flex flex-col justify-center items-center  w-[20rem] h-[20rem] hover:shadow-xl'>
            <Image src={'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'} width={1920} height={1080} className="w-[9rem] h-1/2" alt='/'/>
            <h1 className='text-lg pt-2'>Jewelery</h1>
        </div>
        <div className='flex flex-col justify-center items-center  w-[20rem] h-[20rem] hover:shadow-xl'>
            <Image src={'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'} width={1920} height={1080} className="w-[9rem] h-1/2" alt='/'/>
            <h1 className='text-lg pt-2'>Electronics</h1>
        </div>
        <div className='flex flex-col justify-center items-center  w-[20rem] h-[20rem] hover:shadow-xl'>
            <Image src={'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'} width={1920} height={1080} className="w-[9rem] h-1/2" alt='/'/>
            <h1 className='text-lg pt-2'>Mens</h1>
        </div>
        <div className='flex flex-col justify-center items-center  w-[20rem] h-[20rem] hover:shadow-xl'>
            <Image src={'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'} width={1920} height={1080} className="w-[9rem] h-1/2" alt='/'/>
            <h1 className='text-lg pt-2'>Womens</h1>
        </div>
    </div>
  )
}

export default titleCards