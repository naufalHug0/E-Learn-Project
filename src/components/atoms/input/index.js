import React from 'react'
import './Input.css'

const InputMsg = ({msg, color}) => <p style={{color, fontSize: 12, lineHeight: 0}}>{msg}</p>

function Input({label, required, msg, error, ...rest}) {
    return (
        <div className='input-wrapper'>
            <p className='label'>{label}</p>
            <input className='input' type="text" required={required} style={error?{borderColor: 'red'}:null} {...rest}/>
            {error && <InputMsg msg={msg} color="red"/>}
        </div>
    )
}

export default Input