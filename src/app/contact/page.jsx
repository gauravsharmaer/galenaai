
import React from 'react'
import Image from 'next/image'
import curved8 from "public/curved8.jpg"
export const metadata ={
  title: "Contact page",
  description: 'Description of  about sPage title'
}
const Contact = () => {


    
  return (
    <div>
        <div className=' bg-white shadow-xl mx-[25px] sm:w-[60%] relative sm:top-5 sm:ml-16 '>
            <h1 className='text-center font-bold text-2xl text-orange-400 mb-8'>Contact Us</h1>
            <p className='text-center text-lg mb-10 sm:px-16' >To get a demo using your own use case please email hello@mg.galenai.co or contact using the below form.</p>


            <form className='flex-col justify-center align-center px-9'>
      <label htmlFor="name" className=' text-orange-400 sm:mb-16 font-bold relative sm:bottom-12'
      >Name:</label>
      <input type="text" id="name" name="name" placeholder='Full Name' className='mb-5 p-3 bg-gray-100 sm:mr-32 sm:px-10 sm:mb-11 text-white focus:outline-orange-400'/>

      <label htmlFor="email" className=' text-orange-400 font-bold relative sm:bottom-12 sm:mb-4'>Email:</label>
      <input type="email" id="email" name="email" placeholder='your_name@your-organization.com' className='mb-5 p-3 bg-gray-100 sm:px-10 focus:outline-orange-400'/>

      <label htmlFor="message" className=' text-orange-400 font-bold relative sm:bottom-40 focus:border-orange-400'>How can we help you?</label>
      <textarea id="message" name="message" placeholder='Describe your problem in at least 250 characters' className='mb-5 p-7 bg-gray-100 px-3 sm:pb-11 sm:px-56 relative sm:right-32 focus:outline-orange-400'/>

      <button type="submit" className='mt-4  bg-orange-400 mb-5 text-center p-3 rounded text-white font-bold sm:mt-10 relative sm:left-[20rem]'>SEND MESSAGE</button>
    </form>

  

        </div>
       <Image
      src={curved8}
      width={1000}
      height={60}
      alt="Picture of the author"
      className='hidden  relative sm:flex sm:left-[34%] sm:bottom-[40rem] sm:z-[-999] rounded-full'
    />
    </div>
  )
}

export default Contact