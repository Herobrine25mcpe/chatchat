import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo"> ChatChat </span>
        <div className="user">
            <img src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Abhay</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar