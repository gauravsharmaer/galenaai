
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
import { useRouter } from 'next/navigation'; // Import from next/router, not next/navigation

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    return (
      <div>
        <h1 className="text-center text-orange-400">This is Dashboard</h1>
      </div>
    );
  }

  // Handle other session status (e.g., 'error')
  return <p className='text-center font-bold text-3xl text-red-500'>...Redirecting to login page</p>;
};

export default Dashboard;