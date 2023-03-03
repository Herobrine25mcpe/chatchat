/*import React from 'react'

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

export default Navbar*/

import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">ChatChat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar