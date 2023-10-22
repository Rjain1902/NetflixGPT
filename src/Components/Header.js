import React from 'react'
import Logo from '../Utils/Images/Netflix_Logo_PMS.png'
const Header = () => {
  return (
    <div className='absolute px-8 py-2 px-8 bg-gradient-to-b from-black z-10'>
      <img className='w-44'
        src={Logo}
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Header