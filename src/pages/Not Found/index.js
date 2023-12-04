import React, {useEffect} from 'react'
import './not-found.css'

const NotFound = (props) => {
    useEffect(() => {
        document.title = 'Not Found';
        return () => {document.title = 'eLearn'};
    })
    return (
        <div className="not-found" style={props.style}>
            <h1>404 Page Not Found</h1>
        </div>
    )
}

export default NotFound