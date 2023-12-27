import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Port = () => {

       const portfolios = [
          {
            id: 1,
            src: "/34.webp",
            preview:"https://hkh-opal.vercel.app/"
          },
          {
            id: 2,
            src: "/9.png",
            preview:"https://https-github-com-mahak24342-blogger-git.vercel.app/"
          },
          {
            id: 3,
            src: "/8.png",
            preview:"https://recipe-puce-tau.vercel.app/"
          },
          {
            id: 4,
            src: "/6.png",
            preview:"https://nft-9xtg.vercel.app/"
          },
          {
            
            id: 5,
            src: "/p.jpg",
            preview:"https://apple-kohl.vercel.app/"
          },
          {
            id: 6,
            src: "/7.webp",
            preview:"https://myntraa21.vercel.app/"
          },
        ];
    return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8  sm:mt-10 sm:pt-5  mt-64 pt-20'>
                <p className='text-4xl font-bold inline mt-16 border-b-4 border-gray-500'> Portfolio</p>
 <p>Check Out some of My Work Right Here</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0 '>
                {portfolios.map(({id,src,preview})=>(
                      <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                      <div className='flex items-center justify-center '>
                          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Github</button>
                    <Link href={preview}>
                    
                          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Preview
  
                          </button>
                          </Link>
                      </div>
                  </div>

                ))} 
              
            </div>
        </div>
    </div>
  )
}

export default Port