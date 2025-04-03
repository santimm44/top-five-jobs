import React from 'react'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '../ui/card'

const CustomCard = ({Title, Description}:{Title:string, Description:string}) => {
  

    const handleClick = ()=>{

    }


    return (

    <Card>
        <CardHeader>
            <CardTitle>
                {Title}
            </CardTitle>
            <CardDescription>
                {Description}
            </CardDescription>
            <CardAction onClick={handleClick}>
                Visit Page
            </CardAction>

        </CardHeader>
    </Card>
  )
}

export default CustomCard