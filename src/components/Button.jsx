import React from 'react'
import { apple, google } from '../assets'

const Button = ({ styles }) => {
  return (
    <div className='flex flex-row flex-wrap sm:mt-10 mt-6 gap-5'>
      {[apple, google].map((store, idx) => (
        <div
          key={idx}
          className='relative p-[2px] rounded-[16px] animate-border-gradient'
        >
          <div className='w-[160px] h-[45px] rounded-[14px] bg-black flex items-center justify-center cursor-pointer'>
            <img
              src={store}
              alt='store'
              className='w-[90%] h-[90%] object-contain'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Button
