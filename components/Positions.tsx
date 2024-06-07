import React from 'react'
import { HoverEffect } from './ui/CardHoverEffect'
import { jobs } from '@/data'

const Positions = () => {
  return (
    <div className="py-20" id="work_experience">
        <h1 className='heading text-blue-500'> 
            Work experience
        </h1>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={jobs} />
    </div>
        </div>
  )
}

export default Positions