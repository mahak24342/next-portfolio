import React from 'react'

const Cont = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-gray-800  mt-16 pt-2 flex justify-center text-white w-full h-screen p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
           <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-black sm:text-white border-gray-500 '>Let Connect</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
           </div>
         <div className='flex justify-center items-center '>
            <form className='flex flex-col w-full ' action="https://getform.io/f/e6fce097-4bac-4b2e-9a53-b7537b85eb5c" method='POST'>
                <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text" name="email" placeholder='Enter Your Email' className='p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none'/>
          <textarea name="message" rows="10" placeholder='Enter Your Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
<button className=' text-white w-fit px-6 py-3 my-8 mx-auto hover:scale-110 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500  '> Let Talk</button>
            </form>
         </div>
            </div>
            
    </div>
  )
}

export default Cont