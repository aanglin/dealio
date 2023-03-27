import React from 'react'
// import { Dancing_Script} from 'next/font/google'

// const design = Dancing_Script({ weight: '700', subsets: ['latin'] })

function topBar() {
  return (
    <div className='flex justify-between items-center h-9 px-32 bg-[#8C8C8C] text-white'>
        <div className=''>
            <h1>Get More and pay less.</h1>
        </div>
        <div>
            <h1>Look Good | Feel Great</h1>
        </div>
    </div>
  )
}

export default topBar