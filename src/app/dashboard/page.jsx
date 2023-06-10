
"use client"
// import React from 'react'
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";


// const Dashboard = () => {
//   const session = useSession();
//   const router = useRouter()
  
//   if (session.status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (session.status === "unauthenticated") {
//     router?.push("/dashboard/login");
//   }

//   if (session.status === "authenticated") {
//   return (
//     <div>
//     <h1 className='text-center text-orange-400'>This is Dashboard</h1></div>
//   )
// }
// }

// export default Dashboard


import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/dashboard/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className='text-center text-orange-400'>This is Dashboard</h1>
    </div>
  );
};

export default Dashboard;