import React from 'react'
import './alert.css'

const Alert = ({msg, danger}) => {
    return (
        <div className={`alert ${danger ? 'alert-danger':'alert-success'}`}>
            <p>{msg}</p>
        </div>
    )
}

export default Alert