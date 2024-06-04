import React from 'react'
import { InfiniteMovingCards } from './ui/InfinityMovingCards'
import { companies, testimonials } from '@/Data/Index'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

function Clients() {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='font-bold text-4xl md:text-5xl text-center'>Kind words from{' '}
                <span className='text-purple'>Satisfied Clients</span>
            </h1>
            <div className='flex flex-col items-center '>
                <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden '>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />
                    <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg mt-10'>
                        {
                            companies.map((item,ind)=>(
                                <div>
                                    <img src={item.img} alt=""
                                    className='md:w-10 w-5'
                                    />
                                      <img src={item.nameImg} alt=""
                                    className='md:w-24 w-20'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients