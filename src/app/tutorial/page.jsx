import React from 'react'

export const metadata ={
    title: "tutorial Page",
    description: 'Description of  about sPage title'
}
const Tutorial = () => {
  return (
    <div className='m-12 sm:px-[17rem]  '>
            <div className='mb-7 text-orange-400 font-bold pr-10 text-2xl'>
            <h1>Here is a guide on how to make the most out of GalenAI</h1>
            </div>

            <div className='mb-7'>
                <h2 className='font-bold mb-5 text-xl  '>How to ask questions</h2>
                <p className='pr-8 text-lg'>GalenAI - in the default Q/A mode works best when you ask full and detailed questions. For example, it's good to start your question with something like "what is.." or "how to.."</p>
            </div>


            <div className='my-7'>
                <h2 className='font-bold mb-5 text-xl'>Search modes</h2>
                <p className='mb-3 pr-12 text-lg'>GalenAI supports two different search modes.</p>
                <ul className='list-disc text-lg'>
                    <li className='pr-4 sm:-pl[2rem]'>Q/A mode is the default mode. It works best for questions.</li>
                    <li className='pr-4'>Clinical Summary mode is best for generating summaries about clinical topics. Such as disease states or drugs. It works best when you just type in a topic. For example, "diabetes" or "metformin".</li>
                </ul>
            </div>
      

            <div className='my-7'>
                <h2 className='font-bold mb-5 text-xl'>Use Best Model (slow)</h2>
                <p className='text-lg pr-5'>This model is the most accurate, however it can be slow. It is powered by GPT-4 and all available references in our database. This mode writes the most accurate answers and gives the best references. We highly recommend that you use it for advanced questions.</p>
            </div>

            <div className='my-7'>
                <h2 className='font-bold mb-5 text-xl'>Specialized Products</h2>
                <p className='text-lg pr-5'>In addition to our main product, we also offer specialized products for specific use cases. Usually requested by organizations we work with. These should be considered as working demos. Organizations can request a specialized product for their use case.</p>
            </div>
    </div>
  )
}

export default Tutorial