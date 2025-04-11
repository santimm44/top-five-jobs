import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import Link from 'next/link'
const layout = ({ children }: { children: React.ReactNode }) => {


    return (
        <div className='h-screen '>

            <div className=''>
                <div className='absolute z-10 left-0 right-0 place-items-center'>
                    <NavigationMenu>
                        <NavigationMenuList >
                            <NavigationMenuItem className='flex border-b-6'>
                                <NavigationMenuLink href='/' className='text-white hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Home
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/AmericanRedCross' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    American Red Cross
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Buffer' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Buffer
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Calm' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Calm
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/CodeStack' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    CodeStack
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Figma' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Figma
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/GooseChase' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    GooseChase
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/LiveNation' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Live Nation Entertainment
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Notion' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Notion
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Recall' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Recall.ai
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/SnapInc' className='text-white ms-2 hover:bg-[#FFFFFF88] bg-[#000000b8]'>
                                    Snap Inc.
                                </NavigationMenuLink>
                                
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className='h-full bg-[#fcfcfc]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout