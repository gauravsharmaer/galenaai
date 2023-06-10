
import React from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import Link from 'next/link';

export const metadata ={
  title: "Pricing page",
  description: 'Description of  about pricing page'
}
const Pricing = () => {
  return (
    <div >
          <div className='bg-orange-400 flex-col align-center justify-center text-center gap-2 py-14 mx-4 rounded-md mb-7 sm:p-52'>
            <button className='text-orange-400 pb-2 text-xl bg-white px-2 py-1 rounded-md mb-2'>PRICING</button>
            <h2 className='text-white font-bold pb-2 text-2xl'>See our pricing</h2>
            <p className='text-white text-lg px-1'>We offer premium integration support for organizations.</p>
          </div>


<div className='bg-white text-orange-400 text-center mx-6 py-7 relative bottom-16 rounded-lg sm:w-[25%] sm:bottom-36 sm:left-48'>
    <h3>
      Trial Account
    </h3>
    <h2 className='mb-2 font-bold text-xl sm:text-2xl'>FREE</h2>
   <p className='font-light mb-2'><AiOutlineCheck size={25} className='relative top-6 left-14'/> 5 queries/week</p>
   <p  className='font-light mb-2'><AiOutlineCheck size={25} className='relative top-6 left-14'/> Free forever</p>
   <p  className='font-light mb-3'><AiOutlineCheck size={25} className='relative top-6 left-14'/> Email Support</p>
   <button className='text-white bg-orange-400 px-28 py-2 rounded-md'><Link href="/">GET STARTED</Link></button>
</div>


<div className='bg-white text-orange-400 text-center mx-6 py-7 relative  rounded-lg sm:w-[30%] sm:left-[37%] sm:bottom-[32rem] ' >
    <h3>
      Starter
    </h3>
    <h2 className=' font-bold text-xl sm:text-2xl'>$9.99</h2>
    <p className='mb-4'>per month</p>
   <p className='font-light mb-2'><AiOutlineCheck size={25} className='relative top-6 left-14'/>Unlimited questions</p>
   <p  className='font-light mb-2'><AiOutlineCheck size={25} className='relative top-6 left-14'/>All products available</p>
   <p  className='font-light mb-7'><AiOutlineCheck size={25} className='relative top-6 left-14'/>Cancel anytime</p>
   <button className='text-white bg-orange-400 px-28 py-2 rounded-md'>
   <Link href="/">   SUBSCRIBE</Link>
</button>
</div>




<div className='bg-white text-orange-400 text-center mx-6 py-7 relative  rounded-lg sm:w-[30%] sm:left-[63%] sm:bottom-[54rem]'>
    <h3>
      organizations
    </h3>
    <h2 className='mb-3 font-bold text-xl sm:text-2xl'>Contact Us</h2>

   <p className='font-light mb-2 sm:mb-0 '><AiOutlineCheck size={25} className='relative top-6 left-14' />API available</p>
   <p  className='font-light mb-2 sm:mb-0'><AiOutlineCheck size={25} className='relative top-6 left-7 sm:left-14'/> Premium integration support</p>
   <p  className='font-light mb-3 sm:mb-0'><AiOutlineCheck size={25} className='relative top-6 left-14'/> Bring your own Data</p>
   <p  className='font-light mb-3'><AiOutlineCheck size={25} className='relative top-6 left-14'/> Per use pricing</p>
   <button className='text-white bg-orange-400 px-28 py-2 rounded-md'>
   <Link href="/contact"> CONTACT</Link>
  </button>
</div>

    </div>

  )
}

export default Pricing