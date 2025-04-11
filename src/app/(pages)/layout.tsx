import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import Link from 'next/link'
const layout = ({ children }: { children: React.ReactNode }) => {


    return (
        <div className='bg-[#7393B3] h-screen '>

            <div className=''>
                <div className='absolute z-10 left-[20%] '>
                    <NavigationMenu >
                        <NavigationMenuList >
                            <NavigationMenuItem >
                                <NavigationMenuLink href='/' className='  bg-red-100'>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className='h-full bg-amber-50'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout