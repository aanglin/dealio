import Link from 'next/link'
import React from 'react'

function title() {
  return (
    <div className='flex justify-center items-center  pt-[8rem] '>
        <ul className='flex pt-2'>
            <Link href={'#jewelery'}><li>Jewelery</li></Link>
            <Link href={'#electronics'}><li>Electronics</li></Link>
            <Link href={'#women_clothing'}><li>Womens</li></Link>
            <Link href={'#men'}><li>Mens</li></Link>
        </ul>
    </div>
  )
}

export default title