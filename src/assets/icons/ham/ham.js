import React from 'react'
import './ham.css'

const HAM_ICON = ({width, height, ...rest}) => {
    return (
        <div className='ham-icon' style={{width, height}} {...rest}>
            <span></span><span></span><span></span>
        </div>
    )
}

export default HAM_ICON