import React from 'react' 


function topBar() {
  return (
    <div className='sticky bottom-0 flex justify-around items-center text-xs h-16 w-full  bg-[#404040] text-white md:text-xl'>
        <div className=' '>
            <h1>Get More | Pay Less.</h1>
        </div>
        <div>
            <h1 className=''>Look Good | Feel Great</h1>
        </div>
    </div>
  )
}

export default topBar