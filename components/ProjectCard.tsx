"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

interface Props {
    image: string;
    title: string;
    text: string;
    demo: string;
    repo: string;
}

const ProjectCard = ({ image, title, text, demo, repo }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
    return (
        <div

            className='w-[250px] h-[160px] sm:w-[450px] sm:h-[280px] rounded-md cursor-pointer'>
            <motion.div
                className='flip-card-inner w-full h-full'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: 'normal' }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-2 sm:p-4'>
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
                    <div onClick={handleFlip} className='absolute'>
                        Learn more &gt;
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-2 sm:p-4'>
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]' />
                    <div className='flex flex-col gap-2 sm:gap-2 sm:py-3 z-[30]'>
                        <h1 onClick={handleFlip} className='text-whote text-md md:text-2xl font-semibold'>{title}</h1>
                        <div className='flex justify-around'>
                            <Link href={demo} className='border text-[6px] px-4 py-3 sm:text-[20px] sm:p-2' target="_blank">DEMO</Link>
                            <Link href={repo} className='border text-[6px] px-4 py-3 sm:text-[20px] sm:p-2' target="_blank">REPO</Link>
                        </div>

                        <p className='text-gray-200 text-[9px] sm:text-[17px]'>
                            {text}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard