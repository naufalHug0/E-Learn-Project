import React from 'react'
import './Input.css'

function Input({label, ...rest}) {
    return (
        <div className='input-wrapper'>
            <p className='label'>{label}</p>
            <input className='input' type="text" {...rest}/>
        </div>
    )
}

export default Input