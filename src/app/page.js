"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";


const Home = () => {

  const [qamode,setQamode]=useState(true);
  const [clinical ,setClinical]=useState(false)
  const handleqa=()=>{
    setClinical(false)
    setQamode(true)
  }
  const handleclinical=()=>{
    setClinical(true)
    setQamode(false)
  }
  return (
    <>
      {/* <div>x</div> */}
      <div >
        <div className=" text-center">
          <h2 className="font-bold text-4xl max-[768px]:text-2xl">GalenAl</h2>
          <h2 className="mt-2 text-2xl max-[768px]:text-[20px] mb-11 ">
            The Al Search Engine for
            <span className="font-bold">Clinicians</span>
          </h2>
        </div>

        <div className="flex justify-around" >
          <button className="bg-white shadow-xl border-orange-400 " onClick={handleqa}>Q&A Mode</button>
          <button className="bg-white shadow-xl relative sm:right-[42%]" onClick={handleclinical}>Clinical Summary</button>
        </div>

        {qamode 
        ?
        <div className="flex-col m-11 shadow-xl mt-[20px] sm:mx-64">
          <div >
            <p className="mb-3 font-bold sm:pl-4">Question</p>
            <div className="mb-3 sm:pl-3">
              <input
                type="text"
                placeholder="What is Digoxin lV to PO conversion?"
                className="w-[100%] focus:outline-orange-400 border-gray-400 px-3 py-2 mb-3 rounded-md sm:w-[70%] sm:pl-4 bg-gray-100"
              />

             

              <div className="mb-5 px-1 sm:w-[70%] sm:pl-4">
                <p>
                  Question & Answer Mode works best when you ask full and
                  detailed questions.
                  <span className="font-bold">
                    You are not signed in. You can still search, but references
                     would not be available.
                  </span>
                </p>
              </div>

              <div className="mb-4 text-orange-400 sm:pl-4">
                <Link href="/dashboard/register">
                  <p>Sign up (free) for full access</p>
                </Link>
              </div>

              <div className="mb-4 text-orange-400 sm:pl-4">
                <Link href="/dashboard/login">
                  <p>Already have an account? Login</p>
                </Link>
              </div>

              <button className="relative left-[32%] bg-orange-400 p-3 px-8 rounded text-white mb-4 sm:left-[75%] sm:bottom-[250px]">
                SEARCH
              </button>
            </div>
          </div>
         
        </div>
        
        : 
        <div className="flex-col m-11 shadow-xl mt-[20px] sm:mx-64">
          <div >
            <p className="mb-3 font-bold sm:pl-4">Clinical Topic</p>
            <div className="mb-3 sm:pl-3">
              <input
                type="text"
                placeholder="What is Digoxin lV to PO conversion?"
                className="w-[100%] focus:outline-orange-400 border-gray-400 px-3 py-2 mb-3 rounded-md sm:w-[70%] sm:pl-4 bg-gray-100"
              />

             

              <div className="mb-5 px-1 sm:w-[70%] sm:pl-4">
                <p>
                Clinical Summary Mode works best when you ask about a clinical topic. For example, Diabetes or Metformin.
                 
                  <span className="font-bold">
                    You are not signed in. You can still search, but references
                     would not be available.
                  </span>
                </p>
              </div>

              <div className="mb-4 text-orange-400 sm:pl-4">
                <Link href="/dashboard/register">
                  <p>Sign up (free) for full access</p>
                </Link>
              </div>

              <div className="mb-4 text-orange-400 sm:pl-4">
                <Link href="/dashboard/login">
                  <p>Already have an account? Login</p>
                </Link>
              </div>

              <button className="relative left-[32%] bg-orange-400 p-3 px-8 rounded text-white mb-4 sm:left-[75%] sm:bottom-[250px]">
                SEARCH
              </button>
            </div>
          </div>
         
        </div>}
      </div>
    </>
  );
};

export default Home;
