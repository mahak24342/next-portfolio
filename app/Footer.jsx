"use client"
import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once:true}}  variants={{visible:{opacity:1,y:-50},
    hidden:{opacity:0,y:0},
    }} transition={{duration:0.6
    }} className='mt-4'>
        <motion.div  initial="hidden" whileInView="visible" viewport={{once:true}}  variants={{visible:{opacity:1,y:-50},
    hidden:{opacity:0,y:0},
    }} transition={{duration:0.6
    }} className=' text-center flex flex-col p-3 sm:flex-row gap-2 justify-center text-white w-screen bg-black'>
            <h2>MAHAK</h2>
            <p>@ 2023 .All Rights Reserved ..</p>
        </motion.div>
    </motion.div>
  )
}

export default Footer