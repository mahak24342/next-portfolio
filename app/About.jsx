"use client"
import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div initial={{opacity:0,y:5}} whileInView="visible" viewport={{once:true}} animate={{opacity:1,y:0}} variants={{visible:{opacity:1,y:-50},
    hidden:{opacity:0,y:0},
    }} transition={{duration:0.3,
    }}  name="about" className='w-full h-max mt-12  bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-max'>
            <div className='pb-8 mt-44 '>
                <motion.p  className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</motion.p>
            </div>
            <motion.p  className='text-xl  p-5 '> I'm Mahak, a passionate and innovative frontend developer dedicated to crafting immersive digital experiences. With a keen eye for design and a love for clean, efficient code, 
  <br/>
  I bring a unique blend of creativity and technical expertise to every project.</motion.p>
    
    <motion.a  href="https://drive.google.com/file/d/11eunLAxwjec0gJUzVx9W5Ld51iBMP5c0/view?usp=drivesdk" className=' text-white w-fit  h-max px-1 py-2 my-8 mx-auto hover:scale-110 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500  '> DownLoad Resume</motion.a>
  
    </div>
    </motion.div>
  )
}

export default About