import React from 'react'
import { apple, google } from '../assets'

const Button = ({ styles }) => {
  const links = [
    'https://apps.apple.com/az/app/easybusiness-your-distributor/id6746033485',
    'https://play.google.com/store'
  ]
  return (
    <div className='flex flex-row md:flex-col flex-wrap sm:mt-10 mt-6 gap-5'>
      {[apple, google].map((store, idx) => (
        <div
          key={idx}
          className='relative p-[2px] rounded-[16px] animate-border-gradient'
        >
          <a
            href={links[idx]}
            target='_blank'
            rel='noopener noreferrer'
            className='w-[160px] h-[45px] rounded-[14px] bg-black flex items-center justify-center cursor-pointer'
          >
            <img
              src={store}
              alt='store'
              className='w-[90%] h-[90%] object-contain'
            />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Button
