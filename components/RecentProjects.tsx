"use client";
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className="heading">
            Decrypted {''}
            <span className="text-red-500 font-mono">Case Files</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link})=> (
                <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] mb-8 group">
                  <PinContainer title={title} href={link}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 puzzle-border bg-[#0c0e23]">
                      <div className='relative w-full h-full overflow-hidden lg:rounded-3xl'>
                        <img src="/bg.png" alt='bg-img' className="opacity-20" />
                      </div>
                      <img
                       src={img}
                       alt={title}
                       className='z-10 absolute bottom-0 grayscale group-hover:grayscale-0 transition-all duration-500'
                       />
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 font-mono text-red-500'>
                      {title}
                    </h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white/70 font-mono mt-2'>
                      {des}
                    </p>
                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className="flex items-center">
                          {iconLists.map((icon, index) =>(
                            <div key={icon} className='border border-red-500/30 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center backdrop-blur-sm' 
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`
                            }}>
                              <img 
                              src ={icon}
                              alt={icon}
                              className='p-2' />

                            </div>
                          ))}
                        </div>
                        <div className='flex justify-center' >
                           <p className='flex lg:text-xl md:text-xs text-red-400 font-mono text-sm'>Access File</p>
                          <FaLocationArrow className="ms-3" color="#EF4444" />
                        </div>
                    </div>
                  
                  </PinContainer>
                </div>
            ))}
        </div>

    </div>
  )
}

export default RecentProjects