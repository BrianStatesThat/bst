import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { infoList } from '@/assets/assets';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20' >
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-co lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
          </div>
          <div className='flex-1'>
          With a solid background in front-end development, IT support, and cybersecurity,
           I combine technical expertise with strong customer service experience. My years in customer service have shaped my ability to understand client needs, communicate effectively, and deliver user-centered solutions.
           I'm dedicated to creating seamless, intuitive web experiences that prioritize the needs and satisfaction of users, making technology more accessible and impactful for everyone.
          </div>

          <ul>
            {infoList.map(({icon, iconDark, title, description}, index)=>{
              <li key={index}>
                <Image src={icon} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            })}
          </ul>
        </div>
    </div>
  )
}

export default About