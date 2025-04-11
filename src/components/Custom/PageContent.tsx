'use client'
import React, { useEffect, useState } from 'react'
import data from '@/Data/pageData.json'
import Link from 'next/link'

const PageContent = ({ Title }: { Title: string }) => {

    interface IPage {
        Title: string,
        Why_I_want_to_there: string,
        Tech_stack: string,
        Do_I_need_to_learn_new_tech: string,
        What_goals_do_I_have_in_position: string,
        Do_I_have_the_skills_for_the_job: string,
        Link_to_job: string,
        Job_description: string,
        Job_requirements: string
    }

    const [pageData, setPageData] = useState<IPage>()
    useEffect(() => {
        for (let i: number = 0; i < data.length; i++) {
            if (Title == data[i].Title) {
                setPageData(data[i])
            }
        }
    }, [Title])

    return (
        <div className='place-items-center'>
            <div className='flex p-[0_1.5rem] gap-x-7'>
                <div className='rounded-xl w-auto mt-6 mb-12 p-4 shadow-2xl bg-linear-to-b from-red-100 to-blue-100'>
                    <div className=' mt-6 border-b border-black'>
                        <h2 className='font-bold text-3xl merriweather'>Job Title: </h2>
                        <p className='indent-4 fira-sans-regular text-xl'>
                            {pageData?.Title}
                        </p>
                    </div>
                    <div className=' mt-6'>
                        <h2 className='font-bold text-3xl merriweather'>Link:</h2>
                        <Link className='text-xl indent-4 text-blue-400 underline' href={`${pageData?.Link_to_job == "n/a" ? "#" : pageData?.Link_to_job}`}>
                            {pageData?.Link_to_job == "n/a" ? "No job posting" : pageData?.Title}
                        </Link>
                    </div>
                </div>

                <div className='rounded-xl w-auto mt-6 mb-12 p-4 shadow-2xl bg-linear-to-b from-red-100 to-blue-100'>
                    <div className='border-b border-black mt-6'>
                        <h2 className='font-bold text-3xl merriweather'>Job Description</h2>
                        <p className='leading-9 indent-4 text-xl fira-sans-regular'>
                            {pageData?.Job_description}
                        </p>
                    </div>
                    <div className=' mt-6'>
                        <h2 className='font-bold text-3xl merriweather'>Job Requirements</h2>
                        <p className='leading-9 indent-4 text-xl fira-sans-regular'>
                            {pageData?.Job_requirements}
                        </p>
                    </div>
                </div>
            </div>

            <div className='p-[0_1.5rem] mt-6 mb-[3rem]'>
                <div className=' rounded-xl p-4 shadow-2xl bg-linear-to-b from-blue-100 to-red-100'>
                    <div className='border-b border-black mt-6'>
                        <h2 className='font-bold text-3xl merriweather'>Why I want to work as a {pageData?.Title}</h2>
                        <p className='leading-9 indent-4 text-xl fira-sans-regular'>
                            {pageData?.Why_I_want_to_there}
                        </p>
                    </div>
                    <div className='border-b border-black mt-6'>
                        <h2 className='font-bold text-3xl merriweather'>Would I need to learn new skills?</h2>
                        <p className='leading-9 indent-4 text-xl fira-sans-regular'>
                            {pageData?.Do_I_need_to_learn_new_tech}
                        </p>
                    </div>
                    <div className='border-b border-black mt-6'>
                        <h2 className='font-bold text-3xl merriweather'>What goals would I like to achieve in the hypothetical role</h2>
                        <p className='leading-9 indent-4 text-xl fira-sans-regular'>
                            {pageData?.What_goals_do_I_have_in_position}
                        </p>
                    </div>
                    <div className=' mt-6'>
                        <h2 className='font-bold text-3xl merriweather'>Do I have the skills needed for the job?</h2>
                        <p className='leading-9 indent-4 text-xl fira-sans-regular'>
                            {pageData?.Do_I_have_the_skills_for_the_job}
                        </p>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default PageContent