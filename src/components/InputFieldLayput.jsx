import React from 'react'
import '../styles/Signin.css'

const InputFieldLayput = ({type, id, placeholder}) => {
  return (
    <div className="login-input-div">
        <div className='login-input-span'></div>
        <input type={type} className="login-input-field " id={id} placeholder={placeholder}/>
    </div>
  )
}

export default InputFieldLayput
