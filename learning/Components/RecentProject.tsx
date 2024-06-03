import { projects } from '@/Data/Index'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

function RecentProject() {
    return (
        <div className='py-20' id='projects'>
            <h1 className='font-bold text-4xl md:text-5xl text-center'>A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {
                    projects.map(({ des, iconLists, id, img, link, title }) => (
                        <div key={id}
                            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] '
                        >
                            <PinContainer
                                title={title} href={link}
                            >
                                <div className='relative flex items-center justify-center sm:w-96 w-[80vm] overflow-hidden h-[20vh] mb-10 '>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                                        <img src="bg.png" alt="" />
                                    </div>
                                    <img src={img}
                                        className='z-10 absolute bottom-0'
                                        alt="" />
                                </div>
                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                    {title}
                                </h1>
                                < p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {des}
                                </p>
                                <div className='flex items-center justify-between mt-7 mb-3 '>
                                    <div className='flex items-center'>
                                        {
                                            iconLists.map((icon, ind) => (
                                                <div className='border border-white/[0.2] rounded-full bg-black lg-w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                                    style={{
                                                        transition: `translateX(-${5 * ind * 2}px ) `
                                                    }}
                                                >
                                                    <img src={icon} alt="" className='p-2' />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                            Check Live Site</p>
                                        <FaLocationArrow
                                            className='ms-3'
                                            color='#cbacf9'
                                        />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentProject