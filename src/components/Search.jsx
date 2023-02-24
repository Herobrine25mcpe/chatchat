import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text"  placeholder='find user'/>
      </div>

      <div className="userchat">
        <img src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>meow meow</span>
      </div>
    </div>
  )
}

export default Search