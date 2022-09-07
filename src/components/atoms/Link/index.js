import React from 'react'

const Link = ({title, onClick, ...rest}) => {
    return (
        <p {...rest} onClick={onClick}>{title}</p>
    )
}

export default Link