import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWraper">

            <span className="logo">Logo</span>
            <span className="register">Register</span>

            <form action="">
                <input type="text" placeholder='display Name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" />
            </form>
            <button>Sign Up</button>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register