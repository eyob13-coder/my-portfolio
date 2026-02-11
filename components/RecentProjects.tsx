"use client";
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from "react-icons/fa6";

import { MovingDotBeam } from './ui/MovingDotBeam';

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className="heading">
        Decrypted {''}
        <span className="text-red-500 font-mono">Case Files</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 relative z-10">
        {/* Connection Line - Center Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] hidden lg:block -translate-x-1/2 z-0 h-full">
          <MovingDotBeam orientation="vertical" duration={8} />
        </div>

        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative">

            {/* Horizontal Connector */}
            <div className={`absolute top-1/2 w-1/2 h-[2px] hidden lg:block z-0
                    ${index % 2 === 0 ? 'right-[-50%] ml-8 rotate-180' : 'left-[-50%] mr-8'}
                  `}>
              <MovingDotBeam orientation="horizontal" duration={3} delay={index * 0.5} />
            </div>
            {/* Node Dot */}
            <div className={`absolute top-1/2 w-4 h-4 rounded-full border border-red-500 bg-black z-20 hidden lg:block
                    ${index % 2 === 0 ? 'right-[-2rem] translate-x-1/2' : 'left-[-2rem] -translate-x-1/2'}
                   `}></div>

            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 puzzle-border bg-[#0c0e23]">
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl'>
                  <img src="/bg.png" alt='bg-img' className="opacity-20" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className='z-10 absolute bottom-0 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-xl'
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 font-mono text-red-500'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white/50 font-mono mt-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border border-red-500/30 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center backdrop-blur-sm'
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`
                      }}>
                      <img
                        src={icon}
                        alt={icon}
                        className='p-2' />

                    </div>
                  ))}
                </div>
                <div className='flex justify-center' >
                  <p className='flex lg:text-xl md:text-xs text-red-500 font-mono text-sm'>Access File</p>
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