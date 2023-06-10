"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  signIn } from "next-auth/react";
import regimg from "public/regimg.jpg"
import GoogleIcon from '@mui/icons-material/Google';
const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div >
    
<Image src={regimg} alt="pic" width={500} priority={false} className="px-4 rounded-3xl sm:w-[100rem] sm:h-[30rem]"/>
      <h1 className="text-center relative bottom-[20rem] font-bold text-white text-5xl">welcome</h1>
      
      <div className="flex-col bg-white shadow-xl mx-8 pl-3 absolute top-[17rem] rounded-lg sm:left-[30%] sm:w-[30%] ">
      <h2 className="text-center font-bold text-2xl mb-3 text-orange-400 mt-4" >Registeration</h2>
      <form onSubmit={handleSubmit} className="flex-col">
        <input
          type="text"
          placeholder="Username"
         className="bg-gray-100 focus:outline-orange-400 p-4 pr-16 mb-3 pl-3 sm:pr-44"
         
        />
        <input
          type="text"
          placeholder="Email"
         
          className="bg-gray-100 focus:outline-orange-400 p-4 mb-3 pr-16 sm:pr-44"
          required
          
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-100 focus:outline-orange-400 p-4 pr-16 mb-6 sm:pr-44"
          required
         
        />
     <div className="text-center bg-orange-400 mx-20 pt-4 rounded-lg font-bold text-white mb-4 sm:pl-3">   <button className="mb-5">Sign Up</button></div>
      <div> 
       <button
        onClick={() => {
          signIn("google");
        }}
        className="pl-16 absolute sm:left-20 hover:text-orange-400"
      >
        Login with Google <span className="text-orange-400">  <GoogleIcon></GoogleIcon></span>
        
         
      </button></div>
        {error && "Something went wrong!"}
      </form>
      <br/>
      <span className="pl-36 sm:pl-44 ">OR </span>
      <br/>
      <Link href="/dashboard/login" className="pl-6 mb-5 mt-4 sm:pl-28 hover:text-orange-400">
        Login with an existing account
      </Link>
    </div>
      </div>
      
  );
};

export default Register;