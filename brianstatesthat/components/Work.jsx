import React from 'react';
import Image from 'next/image';
import { workData, assets } from '@/assets/assets';

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>Latest work</h2>

        <p className='text-center max-w-2x mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my portfolio! Explore my journey in web development and AI prompting. Discover projects showcasing my expertise in front-end development.
        </p>

        <div>
            {workData.map((project, index)=>(
                <div key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work