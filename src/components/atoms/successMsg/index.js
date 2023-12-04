import React from 'react'
import Gap from '../Gap'
import './success.css'

const SuccessIcon = ({size, color}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} fill={color} className="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>

const SuccessMsg = ({msg, desc, ...rest}) => {
    return (
        <div className='success-msg prompt'>
            <SuccessIcon size={50} color='green'/>
            <Gap height={20}/>
            <h2>{msg}</h2>
            <p>{desc}</p>
            <Gap height={8}/>
            <button {...rest} className='success-btn'>Continue</button>
        </div>  
    )
}

export default SuccessMsg