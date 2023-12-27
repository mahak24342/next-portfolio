import Image from 'next/image'
import React from 'react'
import { FaGithub ,FaLinkedin} from 'react-icons/fa'
const Head = () => {
  return (
    < div name="home" className='h-full w-full bg-gradient-to-b from-black to-gray-800'>
<div className='max-w-screen-lg mx-auto flex flex-col itmes-center justify-center h-full px-4 md:flex-row'>

    <div className='flex flex-col justify-center mt-20 h-full'>
        <h2 className='text-white text-3xl  sm:text-4xl'>Hello There</h2>
        <h2 className='sm:text-4xl text-xl text-blue-500 '> Mahak This Side</h2>
        <h2 className='text-white text-5xl sm:text-7xl font-bold'>

       
        I am a Frontend Developer
        </h2>
       
        <p className='text-gray-500 py-4 max-w-md '>I have experiences of building projects with reactjs nextjs tailwind javascript</p>
    <div>
        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Portfolio</button>

    </div>
    </div>
    <div className='flex flex-col gap-10'>
        <Image src="/1.jpg" width={350} height={350} className=''/>
       <div className='flex  items-center mb-5 justify-center'>
        <FaGithub size={40} color='black'/>
        <FaLinkedin  size={40} color='black'/>
        </div>
    </div>
   
</div>

    </div>
  )
}

export default Head