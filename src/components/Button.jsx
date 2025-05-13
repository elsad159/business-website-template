import React from 'react'
import { apple, bill, google } from '../assets'

const Button = ({ styles }) => {
  return (
    <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
      <img
        src={apple}
        alt='app-store'
        className='w-[240px] h-[80px] object-contain mr-5 cursor-pointer'
      />
      <img
        src={google}
        alt='google-play'
        className='w-[240px] h-[80px] object-contain cursor-pointer'
      />
    </div>

  )
}

export default Button
