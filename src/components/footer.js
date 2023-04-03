import React from 'react' 


function topBar() {
  return (
    <div className='sticky bottom-0 flex justify-between items-center text-xs h-16 pr-32 bg-[#404040] text-white md:text-xl  '>
        <div className=' px-[4rem]'>
            <h1>Get More | Pay Less.</h1>
        </div>
        <div>
            <h1 className=''>Look Good | Feel Great</h1>
        </div>
    </div>
  )
}

export default topBar