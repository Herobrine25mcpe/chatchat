import React from 'react'
const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWraper">

            <span className="logo">ChatChat</span>
            <span className="title">Login</span>

            <form action="">              
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>         
            </form>
            <button>Sign Up</button>
            <p>Don't have have an account? Register</p>
        </div>
    </div>
  )
}

export default Login