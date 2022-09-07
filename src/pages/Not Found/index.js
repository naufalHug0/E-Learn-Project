import React, {useEffect} from 'react'
import './not-found.css'
import { Gap } from '../../components'

const NotFound = () => {
    useEffect(() => {
        document.title = 'Not Found';
        return () => {document.title = 'eLearn'};
    })
    return (
        <div className="not-found">
            <Gap height={100}/>
            <h1>404 Page Not Found</h1>
        </div>
    )
}

export default NotFound