import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { redirect } from 'next/navigation'
const layout = ({ children }: { children: React.ReactNode }) => {

    // const goHome = () => {
    //     redirect('./Home')
    // }
    return (
        <div className='bg-[#7393B3] h-screen w-screen '>

            <div className=''>
                {/* <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div> */}
                <div className='h-full p-[2rem_4rem] bg-amber-50'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout