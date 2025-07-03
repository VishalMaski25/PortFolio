import React from 'react'

import BallCanvas from './canvas/Ball'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {
      technologies.map((technology) => (
        <div key={technology.name} className='w-28 h-28'> {/* Use a unique key for each mapped item */}
          <BallCanvas icon={technology.icon}></BallCanvas>
        </div>
      ))
    }
  </div>
  
  )
}

export default SectionWrapper(Tech,"")
