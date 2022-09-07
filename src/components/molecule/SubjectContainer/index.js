import React from 'react'
import { SubjectItem } from '../../atoms'
import './sub-container.css'

class Subjects extends React.Component {
    render() {
        return (
            <div className="sub-container">
                <SubjectItem/>
                <SubjectItem/>
                <SubjectItem/>
                <SubjectItem/>
                <SubjectItem/>
            </div>
        )
    }
}

export default Subjects