import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-black h-[300px] flex justify-center items-center flex-col'>
      <div>Movie App</div>
    <div className='mb-10 '> 
        <div className='text-white text-3xl font-thin'>All rights reserved   </div>
      <div className='text-white mt-4 px-12 font-sm'>@Mihir Bhalerao   </div>
        <a href="https://github.com/mihirb1234"  target='_blank' ><span className='text-white mt-4 px-16 font-sm '>My Github</span></a>
    </div>
    </div>
  )
}

export default Footer