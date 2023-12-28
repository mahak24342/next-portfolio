"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion"

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3,ease:"easeInOut",}} className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <motion.div  initial={{opacity:0,y:-25}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.5,
        }}  >
        <h1 className="text-xl font-signature ml-2">MA
        <span className="text-blue-500 font-bold">HAK</span></h1>
      </motion.div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <motion.li  initial={{opacity:0,y:-25}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.3+
          id*0.1,}} 
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <motion.li initial={{opacity:0,y:-25}} animate={{opacity:1,y:0}} transition={{duration:0.3,ease:"easeInOut" ,delay:0.3+
            id*0.1,}} 
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default NavBar;