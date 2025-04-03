import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>

            <div className='w-full h-screen '>
                <Image className='blur-xs relative' fill={true} src="/garden.jpg" alt='hero image' />
                <div className='bg-[#FFBF009b] absolute top-1/3 left-1/9 w-3/5 text-center rounded-sm text-white font-bold '>
                    <h1 className='text-9xl drop-shadow-[.5rem_.5rem_2px_black]'>Top 5 Jobs I want</h1>
                </div>
                <div className='bg-[#FFBF009b] absolute top-1/2 left-1/9 w-3/5 text-left ps-[3rem] pe-[1rem] pt-[1rem] pb-[1rem] rounded-sm text-white font-bold '>
                    <p className='text-xl leading-relaxed indent-16'>
                        I am seeking a career that not only challenges me to continuously improve as a developer but also allows me to contribute to causes I deeply believe in. 
                        My professional goals align with organizations that leverage technology for good, promote education and digital literacy, or provide humanitarian aid.
                    </p>
                    <p className='text-xl leading-relaxed indent-16'>
                        In addition to mission-driven work, I highly value companies that prioritize the well-being of their employees, fostering a culture of respect, growth, and work-life balance. 
                        The opportunities showcased on this website reflect both of these priorities—companies that are making a meaningful impact while also ensuring that their developers are supported, valued, and given the resources to thrive.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page