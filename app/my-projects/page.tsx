"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
    return (
        <div
            className='w-screen flex flex-col mt-20 items-center justify-center bg-center bg-cover'>
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-semibold text-white text-[39px] md:text-[50px]">
                    My{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                        {" "}
                        Projects{" "}
                    </span>

                </h1>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[90%] max-h-[90%] mt-8 mb-20'>

                {Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        text={project.text}
                        image={project.src}
                        demo={project.demo}
                        repo={project.repo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Page