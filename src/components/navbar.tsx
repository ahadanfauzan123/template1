import React from 'react'
import Navigation from './navigation'

const Navbar = () => {
  return (
    
      <div className="fixed top-0 left-0 bg-gray-800 text-gray-50 w-screen h-[90px] px-4 flex items-center justify-between">
            <h1>template</h1>
            <Navigation />
      </div>
  )
}

export default Navbar