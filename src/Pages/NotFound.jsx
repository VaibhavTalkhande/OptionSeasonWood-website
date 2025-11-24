import React from 'react'

const NotFound = () => {
  return (
    <div  className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <h1 className='text-6xl font-bold text-[#001f3f] mb-4'>404</h1>
        <p className='text-2xl mb-8'>Page Not Found</p>
        <a href="/" className='text-[#f05a28] underline'>Go to Home</a>
    </div>
  )
}

export default NotFound