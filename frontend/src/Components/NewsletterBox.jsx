import React from 'react'

const NewsletterBox = () => {
    const OnSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-300 mt-3'>
            subscribe us and get the latest arrival previously then others
        </p>
        <form onSubmit={OnSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' />
         <button type='submit' className='bg-black text-white  text-xs py-4 px-10'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox