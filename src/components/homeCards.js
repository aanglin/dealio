import Image from 'next/image'
import React from 'react'

function homeCards({results}) {
  return (
    <div className='flex justify-center items-center pl-[7rem] my-[9rem] px-8 '>
        <div className='flex flex-col justify-center items-center w-96  hover:shadow-2xl'>
            <div className='pt-9'>
                <Image src={results[1].image} width={1920} height={1080} className="w-[15rem] h-1/2" alt="bracelet"/>
            </div>
            <div className='m-6'>
                <h2 className=' p-2 text-xl font-extrabold'>{results[1].title}</h2>
            </div>
            <div>
                <div className='flex justify-center text-xl font-extrabold'>
                    ${results[1].price}
                </div>
                <div className='flex justify-center pb-5'>
            <p className='truncate w-[191px] pt-5'>{results[1].description}</p>
               </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-96  hover:shadow-2xl'>
            <div className='pt-9'>
                <Image src={results[5].image} width={1920} height={1080} className="w-[14rem] h-1/2" alt="bracelet"/>
            </div>
            <div className='m-6'>
                <h2 className=' p-2 text-xl font-extrabold'>{results[5].title}</h2>
            </div>
            <div>
                <div className='flex justify-center text-xl font-extrabold'>
                    ${results[5].price}
                </div>
                <div className='flex justify-center pb-5'>
            <p className='truncate w-[191px] pt-5'>{results[5].description}</p>
               </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-96  hover:shadow-2xl'>
            <div className='pt-9'>
                <Image src={results[11].image} width={1920} height={1080} className="w-[7rem] h-1/2" alt="bracelet"/>
            </div>
            <div className='m-6'>
                <h2 className=' p-2 text-xl font-extrabold'>{results[10].title}</h2>
            </div>
            <div>
                <div className='flex justify-center text-xl font-extrabold'>
                    ${results[10].price}
                </div>
                <div className='flex justify-center pb-5'>
            <p className='truncate w-[191px] pt-5'>{results[10].description}</p>
               </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-96  hover:shadow-2xl'>
            <div className='pt-9'>
                <Image src={results[16].image} width={1920} height={1080} className="w-[7rem] h-1/2" alt="bracelet"/>
            </div>
            <div className='m-6'>
                <h2 className=' p-2 text-xl font-extrabold'>{results[16].title}</h2>
            </div>
            <div>
                <div className='flex justify-center text-xl font-extrabold'>
                    ${results[16].price}
                </div>
                <div className='flex justify-center pb-5'>
            <p className='truncate w-[191px] pt-5'>{results[16].description}</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default homeCards