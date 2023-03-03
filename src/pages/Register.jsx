import React from 'react'
import avatar from '../img/addAvatar.png'

const Register = () => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target[0].value)
  } 

  return (
    <div className="formContainer">
        <div className="formWraper">

            <span className="logo">ChatChat</span>
            <span className="register">Register</span>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display Name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}}type="file" id="file" />
                <label htmlFor="file"> 
                  <img src={avatar} alt="" />
                  <span>Add an avatar</span>
                </label>
                
            </form>
            <button>Sign Up</button>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register