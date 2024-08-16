import React from 'react'
import '../styles/Signin.css'

const InputFieldLayput = ({type, id, placeholder, value, required, onChange}) => {
  return (
    <div className="login-input-div">
        <div className='login-input-span'></div>
        <input type={type} onChange={onChange} className="login-input-field " id={id} placeholder={placeholder} value={value} required={required}/>
    </div>
  )
}

export default InputFieldLayput
