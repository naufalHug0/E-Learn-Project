import React from 'react'

const Button = ({title, ...rest}) => {
    return (
        <div>
            <button {...rest}>{title}</button>
        </div>
    )
}

export default Button