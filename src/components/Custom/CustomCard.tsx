import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import {  useRouter } from 'next/navigation'

const CustomCard = ({ Title, Description, ImagePath, CardNumber, Redirect }: { Title: string, Description: string, ImagePath: string, CardNumber: number, Redirect:string }) => {

const router = useRouter()

    return (

        <Card className={`p-[1.5rem] min-h-96 max-w-1/2 bg-transparent border-transparent shadow-none ${CardNumber % 2 == 0 ? "text-left" : "text-right"}`}>
            <div className={`${CardNumber % 2 == 0 ? "" : "w-full flex justify-end"}`}>
                <Image src={ImagePath} height={200} width={300} alt={Title + " picture"} />
            </div>
            <CardHeader >
                <CardTitle>
                    {Title}
                </CardTitle>

            </CardHeader>
            <CardContent>
                <CardDescription>
                    {Description}
                </CardDescription>
            </CardContent>
            <div className={`${CardNumber % 2 == 0 ? "" : "w-full flex justify-end"}`}>
                <Button onClick={()=>router.push(Redirect)} className={`bg-blue-500 hover:bg-blue-700 border-2 border-transparent hover:shadow-[0rem_0rem_1rem_blue] hover:border-blue-500 ${CardNumber % 2 == 0 ? "flex justify-start" : "flex justify-end"}`}>
                    Visit Page
                </Button>
            </div>
        </Card>
    )
}

export default CustomCard