import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'


const Fotter = () => {
  return (
    <footer className="w-full mb[100px] pb-10 md:mb-5" id="contact">
       <div className="flex flex-col items-center">
        <h1 className='heading lg:max-w-[45vw]'>
        Ready to take <span className='text-purple-100'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let's discuss how I can help you yo achive your goals.</p>
        <a href="mailto:eyobgeremew618@gmail,com">
          <MagicButton
          title="Let's get in touch."
          icon={<FaLocationArrow/>}
          position='right'
          />
        </a>
       </div>
       <div className='dlex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'> Copyright © 2025 Eyob. G</p>
       </div>
       <div className='flex items-center md:gap-3 gap-6'>
        {socialMedia.map((profile) =>(
          <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border bprder-black-300'>
           
           <a href={profile.link} target="_blank" rel="noopener noreferrer">
           <img
            src={profile.img}
            alt="profile"
            width={20}
            height={20}
            />
           </a>
            

          </div>
        ))}
       </div>
    </footer>
  )
}

export default Fotter