import React from 'react'
import './sub-item.css'

const SubjectItem = ({subject, icon, loading, ...rest}) => {
    return loading ? <div className='subject-item skeleton'></div> : (
        <div className='subject-item' {...rest}>
            <img alt={`${subject} logo icon`} src={`http://localhost:4000/${icon}`} className="sub-item-icon"></img>
            <h2>{subject}</h2>
        </div>
    )
}

export default SubjectItem