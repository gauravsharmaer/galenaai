"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from 'next-auth/react';

const Home = () => {
  const [reply, setReply] = useState('');//
  const [input, setInput] = useState('');//


  const [qamode, setQAMode] = useState(true);
  const [clinical, setClinical] = useState(false);
  const [auth,setAuth]=useState(true)
  const { data: session, status } = useSession();
      
useEffect(()=>{
if(status === "authenticated"){
  setAuth(false)
}

if(input.length === 0){
  setReply("")
}
},[status,input])
  const handleQAMode = () => {
    setClinical(false);
    setQAMode(true);
  };

  const handleClinicalMode = () => {
    setClinical(true);
    setQAMode(false);
  };


  //
  // const handlesearch= async () => {
   
  //   const apiKey =`${process.env.OPENAI_API_KEY}`
  //   const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
  //   const payload = {
  //     model: 'gpt-3.5-turbo',
  //     messages: [
  //       { role: 'system', content: 'You are a doctor.' },
  //       { role: 'user', content: input },
  //     ],
  //   };
  
  //   try {
  //     const response = await fetch(apiEndpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${apiKey}`
  //       },
  //       body: JSON.stringify(payload),
  //     });
     
  //     if (!response.ok) {
  //       throw new Error('Network response was not OK');
  //     }

  //        const gptdata = await response.json()
  //     setReply(gptdata.choices[0].message.content)
     
  //     console.log(reply)
  
     
  //   }
  //    catch (error) {
  //     console.error(error);
  //   }
    
  // };


const handlesearch = async () =>{
const options ={
  method: "POST",
  body: JSON.stringify({message: input}),
  headers: {
    "Content-Type": "application/json"
  }
}
const response = await fetch("/api/openai",options)
const data = await response.json()
console.log("data",data)
setReply(data)
}


  return (
    <>
      <div>
        <div className="text-center">
          <h2 className="font-bold text-4xl max-[768px]:text-2xl">GalenAl</h2>
          <h2 className="mt-2 text-2xl max-[768px]:text-[20px] mb-11">
            The Al Search Engine for <span className="font-bold">Clinicians</span>
          </h2>
        </div>

        <div className="flex justify-around">
          <button className="bg-white shadow-xl border-orange-400" onClick={handleQAMode}>
            Q&A Mode
          </button>
          <button className="bg-white shadow-xl relative sm:right-[42%]" onClick={handleClinicalMode}>
            Clinical Summary
          </button>
        </div>

        {qamode ? (
          <div className="flex-col m-11 shadow-xl mt-[20px] sm:mx-64">
            <div>
              <p className="mb-3 font-bold sm:pl-4">Question</p>
              <div className="mb-3 sm:pl-3">
                <input
               type="text"
          value={input}//
          onChange={(e) => setInput(e.target.value)}//
                  placeholder="What is Digoxin lV to PO conversion?"
                  className="w-[100%] focus:outline-orange-400 border-gray-400 px-3 py-2 mb-3 rounded-md sm:w-[70%] sm:pl-4 bg-gray-100"
                />


  

                <div className="mb-5 px-1 sm:w-[70%] sm:pl-4">
                  <p>
                    Question & Answer Mode works best when you ask full and detailed questions.{" "}
                   {auth ? <span className="font-bold">
                      You are not signed in. You can still search, but references would not be available.
                    </span> : ""}
                    
                  </p>
                </div>

                {auth ? <div className="mb-4 text-orange-400 sm:pl-4">
                  <Link href="/dashboard/register">
                    <p>Sign up (free) for full access</p>
                  </Link>
                </div>
:""}  

{auth ?<div className="mb-4 text-orange-400 sm:pl-4">
                  <Link href="/login">
                    <p>Already have an account? Login</p>
                  </Link>
                </div> : ""}


                
                <button
                onClick={handlesearch}//
                 className="relative left-[32%] bg-orange-400 mb-2 mt-2  p-3 px-8 rounded text-white sm:left-[30%] ">
                  SEARCH
                </button>
              </div>

               <p className="text-center p-5 ">{reply}</p> 
            </div>
          </div>
        ) : (
          <div className="flex-col m-11 shadow-xl mt-[20px] sm:mx-64">
            <div>
              <p className="mb-3 font-bold sm:pl-4">Clinical Topic</p>
              <div className="mb-3 sm:pl-3">
                <input
                
               type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
                  placeholder="What is Digoxin lV to PO conversion?"
                  className="w-[100%] focus:outline-orange-400 border-gray-400 px-3 py-2 mb-3 rounded-md sm:w-[70%] sm:pl-4 bg-gray-100"
                />

                <div className="mb-5 px-1 sm:w-[70%] sm:pl-4">
                  <p>
                    Clinical Summary Mode works best when you ask about a clinical topic. For example, Diabetes or
                    Metformin.{" "}
                    {auth ? <span className="font-bold">
                      You are not signed in. You can still search, but references would not be available.
                    </span> : ""}
                    
                  </p>
                </div>
            

       
              {auth ? <div className="mb-4 text-orange-400 sm:pl-4">
                  <Link href="/dashboard/register">
                    <p>Sign up (free) for full access</p>
                  </Link>
                </div>
:""}  

{auth ?<div className="mb-4 text-orange-400 sm:pl-4">
                  <Link href="/login">
                    <p>Already have an account? Login</p>
                  </Link>
                </div> : ""}
                
           
                <button
                 onClick={handlesearch}//
                 className="relative left-[32%] bg-orange-400 bottom-2 p-3 px-8 rounded text-white  sm:left-[35%]  ">
                  SEARCH
                </button>
              </div>

              <p className="text-center p-5 ">{reply}</p> 
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
