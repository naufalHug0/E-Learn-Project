import React from 'react'
import { useEffect, useState } from 'react'
import { SubjectItem } from '../../atoms'
import './sub-container.css'

const Subjects = ({handleFilter}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:4000/v1/learning/subjects')
        .then(res => res.json())
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => console.error(err))
    }, [data]) 
    return (
        <div className="sub-container">
            {
                loading ? [...Array(5)].map(()=><SubjectItem loading={true}/>):
                data.map(sub => {
                    return (
                        <SubjectItem 
                        subject={sub.name}
                        onClick={() => handleFilter(sub.name)}
                        icon={sub.icon}
                        />
                    )
                })
            }
        </div>
    )
}

export default Subjects