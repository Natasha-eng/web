import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex 
    justify-between items-center px-10 md:px-20'>
            <div className='flex flex-row gap-3 items-center'>
                {/* <div className='relative'>
                    <Image src='/logo.jpg' alt='logo' width={40} height={40} className='w-full h-full object-contain rounded-full' />
                </div> */}
                <Link href='/'>
                    <h1 className='text-white text-[15px] sm:text-[25px] font-semibold'> Web Development</h1>
                </Link>

            </div>

            <div className='flex flex-row gap-2 sm:gap-5 mb-2'>
                {Socials.map((social) => (
                    <Link key={social.name} href={social.link}>
                        <Image src={social.src} alt={social.name} width={29} height={29} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar
