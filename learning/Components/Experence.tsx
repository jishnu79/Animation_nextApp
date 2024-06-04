import { workExperience } from '@/Data/Index'
import React from 'react'
import { Button } from './ui/MovingBorder'

function Experence() {
    return (
        <div className='py-20' id='projects'>
            <h1 className='font-bold text-4xl md:text-5xl text-center'>My{' '}
                <span className='text-purple'>Experence</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {
                    workExperience.map((item) => (
                        <Button
                            key={item.id}
                        >
                            <div>
                                <img src={item.thumbnail}
                                    className='lg:w-32 md:w-20'
                                    alt="" />
                            </div>
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}

export default Experence