import PageContent from '@/components/Custom/PageContent'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
         <div className='w-full h-screen relative'>
                <Image className='absolute' fill={true} src="/Calm-Logo2.png" alt='hero image' />
                <div className='h-full w-[50rem] absolute bg-linear-to-r from-black to-transparent'>

                    <div className='absolute top-1/3 left-0 w-3/5 ps-9 h-2/3 text-center rounded-sm text-white font-bold '>
                        <h1 className='text-8xl h-auto w-full '>Calm</h1>
                        <p className='text-xl leading-relaxed h-auto w-full mt-9 indent-16 text-left'>
                        &quot;We&apos;re a mental health brand with the #1 app for sleep, meditation, and relaxation*, with over 150 million downloads and 2.5M 5-star reviews**.  We&apos;re here to help you sleep more, stress less and live mindfully.&quot;
                        </p>
                    </div>
                    <div className=' absolute top-3/4 left-0 w-3/5 text-left ps-[3rem] pe-[1rem] pt-[1rem] pb-[1rem] rounded-sm text-white font-bold '>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>

                <PageContent Title='Full Stack Software Engineer (Calm)' />
            </div>
    </div>
  )
}

export default page