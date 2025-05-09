
import CardContainerHome from '@/components/Custom/CardContainerHome'
import Image from 'next/image'
import React from 'react'



const page = () => {
    return (
        <div>

            <div className='w-full h-screen relative'>
                <Image className='blur-xs absolute' fill={true} src="/garden.jpg" alt='hero image' />
                <div className='h-full w-[50rem] absolute bg-linear-to-r from-black to-transparent'>

                    <div className='absolute top-1/3 left-0 w-3/5 ps-9 h-2/3 text-center rounded-sm text-white font-bold '>
                        <h1 className='text-8xl h-auto w-full '>My Top 5</h1>
                        <p className='text-xl leading-relaxed h-auto w-full mt-9 indent-16 text-left'>
                        I&apos;m looking for a career that pushes me to grow as a developer while contributing to causes I believe in, like education, humanitarian aid, and tech for good. I also prioritize companies that treat their employees well and genuinely value work-life balance and developer well-being.
                        </p>
                    </div>
                    <div className=' absolute top-3/4 left-0 w-3/5 text-left ps-[3rem] pe-[1rem] pt-[1rem] pb-[1rem] rounded-sm text-white font-bold '>
                        
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <CardContainerHome/>
                
            </div>
        </div>
    )
}

export default page