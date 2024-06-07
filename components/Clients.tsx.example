import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className='heading text-blue-500'>
                Reviews from customers{' '}
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                
                <InfiniteMovingCards items={testimonials} direction='right' speed='slow'/>

                <div className='flex flex-wrap item-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                
                    {companies.map(({id,img,name,nameImg}) => (
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                         <img src={img} alt={name} className='md:w-10 w-8' />
                         <div className="flex md:max-w-60 max-w-32 gap-2" id="projects">
                         <h1 className='text-white text-2xl'>
               {nameImg}
            </h1>
            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
       
    )
}

export default Clients