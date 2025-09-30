import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const getLinkPath = (nav) => {
    if (nav.id === 'about-app') {
      return '/about-app'
    }
    if (nav.id === 'partners') {
      return '/partners'
    }
    return `#${nav.id}`
  }

  const handleNavClick = (nav, e) => {
    if (nav.id === 'about-app' || nav.id === 'partners') {
      // Let the Link handle navigation to the separate page
      return
    }
    
    // Prevent default link behavior for scroll navigation
    e.preventDefault()
    
    // Find the target element and scroll to it
    const targetElement = document.getElementById(nav.id)
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link to="/" className="flex items-center">
        <img src={logo} alt="hoobank loqosu" className="w-[50px] h-[50px] mx-4" />
        <h1 className="flex-1 font-poppins font-semibold text-[22px] ss:text-[35px] text-white leading-[32px] ss:leading-[48px]">
          <span className="text-gradient">Easy </span>Business <br className="sm:block hidden" />
        </h1>
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
          >
            <Link 
              to={getLinkPath(nav)}
              onClick={(e) => handleNavClick(nav, e)}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menyu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[14px] ss:text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                <Link 
                  to={getLinkPath(nav)} 
                  onClick={(e) => {
                    handleNavClick(nav, e)
                    setToggle(false)
                  }}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
