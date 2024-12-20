import React from 'react'
import Marquee from "react-fast-marquee";


function Companies() {
  return (
    <div  className='container px-3.5  mx-auto w-full max-w-6xl  '>
      <div className='flex flex-col '>
       <div className=' text-helpfont font-roboto font-medium text-xl self-center md:self-start'>Group Brands</div>
       <Marquee  pauseOnHover='true' className=''>
       <div className='flex flex-wrap mt-5 justify-center md:justify-start hidden lg:flex '>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4  ' src='/policy-bazaar.png'/>
       </div>
       </Marquee>

       <div className='flex flex-wrap mt-5 justify-center md:justify-start  lg:hidden '>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4 my-2' src='/policy-bazaar.png'/>
        <img className='w-[120px] h-[50px] mx-4  ' src='/policy-bazaar.png'/>
       </div>
       </div>
    </div>
  )
}

export default Companies