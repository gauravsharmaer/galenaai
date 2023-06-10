"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {  signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import regimg from "public/regimg.jpg"
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
    
  }, [params]);


 
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
//goes to backend with name of email and password
  return (
    <div >
      {/* <h1>{success ? success : "Welcome Back"}</h1> */}
      <Image src={regimg} alt="pic" width={500} priority={false} className="px-4 rounded-3xl sm:w-[100rem] sm:h-[30rem]"/>
      <h1 className="text-center relative bottom-[20rem] font-bold text-white text-5xl">welcome</h1>



      <div className="flex-col bg-white shadow-xl mx-8 pl-3 absolute top-[17rem] rounded-lg sm:left-[30%] sm:w-[30%] ">
      <h2 className="text-center font-bold text-2xl mb-3 text-orange-400 mt-4" >Sign in</h2>
      <form onSubmit={handleSubmit} >
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
         <div className="text-center bg-orange-400 mx-20 pt-4 rounded-lg font-bold text-white mb-4 sm:pl-3">   <button className="mb-5">SIGN IN</button></div>
  
        {error && error}
      </form>
      <div> 
       <button
        onClick={() => {
          signIn("google");
        }}
        className="pl-16 absolute sm:left-20 hover:text-orange-400"
      >
        Login with Google <span className="text-orange-400">  <GoogleIcon></GoogleIcon></span>
        
         
      </button></div>
      <br/>
      <span className="pl-36 sm:pl-44">OR </span>
      <br/>
      <Link href="/dashboard/register"  className="pl-14 mb-9 mt-4 sm:pl-32 pb-6 hover:text-orange-400">
        Create new account
      </Link>

    </div>
    </div>
  );
};

export default Login;