"use client"
import Image from 'next/image'
import React from 'react'
import { FaGithub ,FaLinkedin} from 'react-icons/fa'
import Link from 'next/link';
import { motion } from "framer-motion"

const Head = () => {
   
  return (
    < div name="home" className='h-max w-full bg-gradient-to-b from-black to-gray-800'>
<div className='max-w-screen-lg mx-auto flex flex-col itmes-center justify-center h-full px-4 md:flex-row'>

    <div className='flex flex-col justify-center mt-20 h-full'>
        <motion.h2  initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.6,
        }}  className='text-white text-3xl  sm:text-4xl'>Hello There</motion.h2>
        <motion.h2 initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.6,
        }}  className='sm:text-4xl text-xl text-blue-500 '> Mahak This Side</motion.h2>
        <motion.h2 initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.6,
        }}  
        className='text-white text-5xl sm:text-7xl font-bold'>

       
        I am a Frontend Developer
        </motion.h2>
       
        <motion.p 
        initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.6,
    }} 
        className='text-gray-500 py-4 max-w-md '>I have experiences of building projects with reactjs nextjs tailwind javascript</motion.p>
    <div>
        <a href='porwalmahak784@gmail.com'>
        <motion.button initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.6,
        }}  className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Contact</motion.button>
</a>
    </div>
    </div>
    <motion.div initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:1.6,
        }}  className='flex flex-col gap-10'>
        <Image src="/1.jpg" width={350} height={350} className=''/>
       <div className='flex  items-center h-max justify-center'>
        <Link href="https://github.com/mahak24342" >
        <FaGithub size={40} color='black'/></Link>
        <Link href="https://www.linkedin.com/in/mahak-porwal-43b3b420b">
        <FaLinkedin  size={40} color='black'/></Link>
        </div>
    </motion.div>
   
</div>

    </div>
  )
}

export default Head