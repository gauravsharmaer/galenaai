"use client"
// import React from 'react'
// import Link from 'next/link'
// import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
// import { useState } from 'react'
// import { signOut, useSession } from 'next-auth/react'

// const Navbar = () => {
//     const session = useSession()
// const [menuOpen,setMenuOpen]=useState(false);

// const handleNav=()=>{
//     setMenuOpen(!menuOpen)
// }
//   return (
    
//  <nav className='fixed mx-7 shadow-xl bg-white left-[13%] w-[75%] rounded-full p-5 max-[768px]:left-[5%] ' >
//         <div className='realtive flex justify-between items-center h-full w-full px-6 2xl:px-16  '>
//             <Link href="/" className='text-orange-400'>LOGO</Link>
       

//           <div className='hidden sm:flex'>
//                 <ul className='hidden sm:flex'>
//               <Link href="/"><li className='ml-10 uppercase '>Products</li></Link>  
//                <Link href="/pricing"><li className='ml-10 uppercase '>Pricing</li></Link>  
//                <Link href="/contact"><li className='ml-10 uppercase '>Contact</li></Link>  
//                <Link href="/tutorial"><li className='ml-10 uppercase '>Tutorial</li></Link>  
//                 </ul>
//           </div>
//           <div className='hidden sm:flex bg-orange-400 px-3 py-1 rounded-full text-white'>
//             <Link href="/dashboard">DashBoard</Link>
//           </div>
//           {
//             session.status === "authenticated" &&(
//                 <div className='hidden sm:flex'><button onClick={signOut}>Logout</button></div> 
//             )
//           }

//           <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24 px-4'>
//           <AiOutlineMenu size={25}/>

//           </div>
//         </div>

//         <div className={
//             menuOpen
//             ? "fixed top-0 w-[80%] sm:hidden h-30 bg-white ease-in duration-500 right-10 "
//             : "fixed top-0  left-[-100%] mt-8 bg-orange-300 ease-in duration-500 "
//         }>
//         <div className='flex justify-around mt-5 '>
//         <div className='pt-10 pl-9 text-orange-400'>
//             <Link href="/" >LOGO</Link>
//         </div>
//         <div className='flex w-full item-center justify-end mt-10 '>
//                 <div onClick={handleNav} className='cursor-pointer'>
//                     <AiOutlineClose size={25}/>
//                 </div>
//             </div>
//         </div>
           
//             <div className='flex-col py-3 pl-20 pb-10'>
//                 <ul>
//                     <Link href="/">
//                         <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer'>
//                            Products 
//                         </li>
//                     </Link>
//                     <Link href="/pricing">
//                         <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer'>
//                             Pricing
//                         </li>
//                     </Link>
//                     <Link href="/contact">
//                         <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer'>
//                             Contact
//                         </li>
//                     </Link>
//                     <Link href="/tutorial">
//                         <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer'>
//                          Tutorial
//                         </li>
//                     </Link>
//                     <Link href="/dashboard">
//                         <li onClick={()=> setMenuOpen(false)} className='p-1 cursor-pointer bg-orange-400  rounded-full text-center mr-4 relative right-3 font-bold text-white'>
//                            DashBoard
//                         </li>
//                     </Link>

//                     {
//             session.status === "authenticated" &&(
//                 <li className='py-4 cursor-pointer'><button onClick={signOut}>Logout</button></li> 
//             )
//           }
//                 </ul>
//             </div> 
//         </div>
//     </nav>
    
   
//   )
// }

// export default Navbar




import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed mx-7 shadow-xl bg-white left-[13%] w-[75%] rounded-full p-5 max-[768px]:left-[5%]">
      <div className="relative flex justify-between items-center h-full w-full px-6 2xl:px-16">
        <Link href="/" className="text-orange-400">
          LOGO
        </Link>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 uppercase">Products</li>
            </Link>
            <Link href="/pricing">
              <li className="ml-10 uppercase">Pricing</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase">Contact</li>
            </Link>
            <Link href="/tutorial">
              <li className="ml-10 uppercase">Tutorial</li>
            </Link>
          </ul>
        </div>
        <div className="hidden sm:flex bg-orange-400 px-3 py-1 rounded-full text-white">
          <Link href="/dashboard">Dashboard</Link>
        </div>
        {session.status === 'authenticated' && (
          <div className="hidden sm:flex">
            <button onClick={signOut}>Logout</button>
          </div>
        )}

        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24 px-4">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? 'fixed top-0 w-[80%] sm:hidden h-30 bg-white ease-in duration-500 right-10'
            : 'fixed top-0  left-[-100%] mt-8 bg-orange-300 ease-in duration-500'
        }
      >
        <div className="flex justify-around mt-5">
          <div className="pt-10 pl-9 text-orange-400">
            <Link href="/">LOGO</Link>
          </div>
          <div className="flex w-full item-center justify-end mt-10">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
        </div>

        <div className="flex-col py-3 pl-20 pb-10">
          <ul>
            <Link href="/">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Products
              </li>
            </Link>
            <Link href="/pricing">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Pricing
              </li>
            </Link>
            <Link href="/contact">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Contact
              </li>
            </Link>
            <Link href="/tutorial">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Tutorial
              </li>
            </Link>
            <Link href="/dashboard">
              <li
                onClick={() => setMenuOpen(false)}
                className="p-1 cursor-pointer bg-orange-400 rounded-full text-center mr-4 relative right-3 font-bold text-white"
              >
                Dashboard
              </li>
            </Link>

            {session.status === 'authenticated' && (
              <li className="py-4 cursor-pointer">
                <button onClick={signOut}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
