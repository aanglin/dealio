import Link from 'next/link'
import React from 'react' 

function topBar() {
  return (
    <div className='sticky bottom-0 flex w-full text-sm h-12 bg-[#404040] text-white  md:text-lg justify-between items-center px-32  '>
        <div>
            <h1>Get More | Pay Less.</h1>
        </div>
        <div>
          <Link href={'/'}>Home</Link>
          <Link href={'/checkout'}>Cart 0</Link>
        </div>
        <div>
            <h1>Look Good | Feel Great</h1>
        </div>
    </div>
  )
}

export default topBar