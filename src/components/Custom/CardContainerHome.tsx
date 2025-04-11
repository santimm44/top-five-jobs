'use client'
import React from 'react'
import cardData from '@/Data/data.json'
import CustomCard from '@/components/Custom/CustomCard'

const CardContainerHome = () => {

    interface cards {
        Title: string,
        Description: string,
        Image: string,
        Redirect: string
    }

    return (
        <div className='grid grid-cols-1 grid-rows-5 gap-y-24 mt-24 mb-24 ps-5 w-3/4 '>
            {cardData.sort((a: cards, b: cards) => {
                if (a.Title < b.Title) {
                    return -1;
                }
                if (a.Title > b.Title) {
                    return 1;
                }
                return 0
            }).map((cardObjects, index) => {
                return (
                    <div key={index} className={` rounded-2xl ${index % 2 == 0 ? `bg-linear-to-r from-red-300 to-transparent` : "bg-linear-to-l from-amber-300 to-transparent place-items-end"}`}>
                        <CustomCard Redirect={cardObjects.Redirect} CardNumber={index} ImagePath={cardObjects.Image} Title={cardObjects.Title} Description={cardObjects.Description} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardContainerHome