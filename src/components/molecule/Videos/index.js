import React, { useState } from 'react'
import { useEffect } from 'react'
import {VideoCard} from '../../atoms'
import Subjects from '../SubjectContainer'
import {shuffle} from '../../../config'
import './video-container.css'

const Videos = () => {
    const [data, setData] = useState([])
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(true)
    const header = {
        headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTRjYTE4NTdjZGRhNWFmOGUyODliMiIsIm5hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjcwNDExNDAsImV4cCI6MTY2NzA0MTE2MH0.OZNRM5PWRvPXasNLqNS_a56Bv5SZkYtftQxQpMn-u3M'}
    }
    useEffect(() => {
        fetch('http://localhost:4000/v1/learning/videos')
        .then(res => res.json())
        .then(res => {
            setData(shuffle(res.data))
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])
    const subjectFilter = (filter) => {
        setSubject(filter)
    }

    return (
        <div className="video-section">
        <Subjects handleFilter={subjectFilter}/>
            <div className="video-container">
                {
                    loading ? [...Array(9)].map(()=><VideoCard loading={true}/>)
                    :data.map(video => {
                        return <VideoCard 
                        id={video._id}
                        title={video.title}
                        date={video.createdAt.substring(0,10)}
                        subject={video.subject.name}
                        videoBg={`http://localhost:4000/${video.thumbnail}`}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Videos